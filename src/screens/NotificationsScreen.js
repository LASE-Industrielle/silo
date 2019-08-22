import React, { useEffect } from 'react';
import {
  FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigationEvents } from 'react-navigation-hooks';
import { getNotifications } from '../services/NotificationService';
import { useStateValue } from '../context/StateContext';
import { elevationShadowStyle } from '../Styles';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    margin: 20,
  },
  touchableOpacityPadding: {
    paddingBottom: 16,
    marginTop: 10,
  },
  icon: {
    padding: 10,
    margin: 7,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  footer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    borderColor: '#BEB9B9',
    borderWidth: 0.5,
    marginHorizontal: 10,
  },

  allRead: { color: '#6CC799', margin: 5 },
  clearAll: { color: '#F19B93', margin: 5 },
  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    fontSize: 13,
  },
  notificationTitle: {
    fontWeight: 'bold',
    color: '#656565',
    margin: 3,
  },
  notificationBody: { color: '#656565', margin: 3, paddingRight: 30 },
  notificationFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  activeDot: {
    color: '#6cc799',
    fontSize: 30,
    margin: 10,
    alignSelf: 'center',
  },
  inactiveDot: { color: '#656565', fontSize: 30, margin: 10 },
  time: { color: '#D6D6D6', margin: 3 },
  readButton: { color: '#6CC799', margin: 3 },
});

const renderListItem = ({ item }) => {
  item.read = false;
  return (
    <View style={styles.notificationContainer}>
      {item.read ? (
        <View>
          <Text style={styles.inactiveDot}>•</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.activeDot}>•</Text>
        </View>
      )}
      <View>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationBody}>{item.body}</Text>
        <View style={styles.notificationFooter}>
          <Text style={styles.time}>
            {`${item.timestamp.split('-')[0]} ${item.timestamp.split('-')[1]}`}
          </Text>
          {item.read ? null : <Text style={styles.readButton}>Read</Text>}
        </View>
      </View>
    </View>
  );
};

const NotificationsScreen = (props) => {
  const [{ notifications }, dispatch] = useStateValue([]);

  useEffect(() => {
    getNotifications(dispatch);
  }, [notifications.data.length]);

  const reload = () => {
    getNotifications(dispatch);
  };

  useNavigationEvents((event) => {
    if (event.type === 'willFocus') {
      reload();
    }
    if (event.type === 'didFocus') {
      reload();
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Header</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginHorizontal: 15 }}>
        <Text style={{ color: '#C5C5C5', margin: 2 }}>You have 3 unread notifications</Text>
      </View>
      <View
        style={{
          flex: 0.9,
          backgroundColor: 'white',
          ...elevationShadowStyle(1.5, 0.2),
          margin: 10,
          borderRadius: 10,
        }}
      >
        <FlatList
          keyExtractor={item => String(item.id)}
          data={notifications.data}
          renderItem={renderListItem}
          style={{ margin: 10 }}
          refreshing={notifications.loading}
          onRefresh={() => reload()}
          ListHeaderComponent={(
            <View>
              <View style={styles.footer}>
                <TouchableOpacity>
                  <Text style={styles.allRead}>Mark all as read</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.clearAll}>Clear all</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.line} />
            </View>
)}
          ListEmptyComponent={(
            <View style={styles.view}>
              <Text>No notifications</Text>
            </View>
)}
        />
      </View>
    </View>
  );
};

export default NotificationsScreen;

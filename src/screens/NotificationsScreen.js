import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getNotifications} from "../services/NotificationService";
import {useStateValue} from "../context/StateContext";
import {useNavigationEvents} from "react-navigation-hooks";

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    marginTop:50,

  },
  touchableOpacityPadding: {
    paddingBottom: 16,
    marginTop: 10
  },
  icon: {padding: 10, margin: 7, borderRadius: 5, alignSelf: 'flex-end'},
});

const renderListItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={styles.touchableOpacityPadding}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text>{item.body}</Text>
          <Text>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const NotificationsScreen = (props) => {

  const [{notifications}, dispatch] = useStateValue();


  useEffect(() => {
    getNotifications(dispatch);

  },[notifications.data.length])


  const reload = () => {
    getNotifications(dispatch);
  };

  useNavigationEvents((event) => {
    if (event.type === 'willFocus') {
      reload()
    }
    if (event.type === 'didFocus') {
      reload();
    }
  })

  return (

    (notifications.data ?
      <FlatList keyExtractor={item => String(item.id)}
                data={notifications.data}
                style={styles.flatList}
                renderItem={renderListItem}
                refreshing={notifications.loading}
                onRefresh={() => reload()}
                ListEmptyComponent={
                  <View style={styles.view}>
                    <Text style={styles.whiteText}>No notifications</Text>
                  </View>
                }
      /> : <Text>Blabla</Text>)

  );
};

export default NotificationsScreen;

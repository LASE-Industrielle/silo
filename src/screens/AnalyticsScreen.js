import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  ScrollView,
  View,
  Picker,
  ActionSheetIOS,
  Platform,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet, FlatList
} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, List, ListItem, Right, Text, Title,} from 'native-base';
import styles, {elevationShadowStyle} from '../Styles';

import {getAllMeasurements, filterMeasurements, getPeriodMeasurements} from '../services/MeasurementService';
import {useStore} from "../context/StateContext";
import AnalyticsGraph from '../components/AnalyticsGraph';
import DatePickerModal from '../components/DatePickerModal';
import DatePickerIcon from "../icons/DatePickerIcon";
import axios from 'axios';
import moment from 'moment';

import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import CalendarIcon from '../icons/CalendarIcon';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from "react-i18next";


const style = StyleSheet.create({
  line: {
    borderColor: '#BEB9B9',
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  transparentView: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    height: 230,


    padding: 3,
  },
  periodButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  list: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: 35,
    borderRadius: 10,
    ...elevationShadowStyle(),
    paddingHorizontal: 10,
  },
  date: { margin: 10, marginTop: 25, flexDirection: 'row', justifyContent: 'flex-start' },
  percentageFont: { margin: 5, fontWeight: 'bold' },
  dot: { margin: 5, color: 'orange' },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});

const triggerStyles = {
  triggerText: {
    color: 'white',
  },
  triggerOuterWrapper: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingTop: 16,
    flex: 1,
    marginHorizontal: 10,
  },
  triggerWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },

};

const optionsStyles = {
  optionsContainer: {
    backgroundColor: '#6AB499',
    marginTop: 66,
    marginLeft: 20,
    width:  Math.round(Dimensions.get('window').width) - 60,

  },
  optionWrapper: {
    borderBottomColor: '#6BB599',
    borderBottomWidth: 2,
    height: 40,
    flex: 1,
    justifyContent: 'center'
  },
  optionTouchable: {
    activeOpacity: 0.5,
  },
  optionText: {
    color: 'white',
    marginLeft: 13
  },
  OptionTouchableComponent: TouchableOpacity,
};

const AnalyticsScreen = (props) => {

  const [{graphMeasurements}, dispatch] = useStore();
  const siloId = props.navigation.getParam('id', 1);
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const {t} = useTranslation()
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const [lastPeriodToShow, setLastPeriodToShow] = useState('month');

  const [transformedGraphData, setTransformedGraphData] = useState('');

  const formatDate = (date => {
    return moment(date).format('YYYY-MM-DDTHH:mm:ss.000[Z]');
  });

  const filterData = (startDateTime, endDateTime) => {
    setSelectedStartDate(startDateTime);
    setSelectedEndDate(endDateTime);
    filterMeasurements(dispatch, siloId, formatDate(startDateTime), formatDate(endDateTime));
  };

  const getDataMeasurements = () => {
    let measurementsArray = Object.keys(graphMeasurements.data);
    let dataMeasurementsArray = [];
    for (let i = 0; i < measurementsArray.length; i++) {
      let dataMeasurement = {};
      dataMeasurement.x = measurementsArray[i];

      dataMeasurement.y = graphMeasurements.data[measurementsArray[i]];
      dataMeasurementsArray.push(dataMeasurement);
    }
    setTransformedGraphData(dataMeasurementsArray);
  };

  useEffect(() => {
    getPeriodMeasurements(dispatch, siloId, 'month');
    //getAllMeasurements(dispatch, siloId);
  }, []);

  useEffect(() => {
    if(!graphMeasurements.loading) {
      getDataMeasurements();
    }
  }, [graphMeasurements.data]);

  const onRefresh = () => {
    //getAllMeasurements(dispatch, siloId);
  };

  const analyticsList = () => {
    const arr = [];
    Object.keys(graphMeasurements.data).map(key => {
      let o = {};
      o[key] = graphMeasurements.data[key];
      arr.unshift(o);
    });
    return arr.map(x => x);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        {Object.keys(item).map( (x, index) => (
          <View style={{ flex: 1 }} key={x}>
            <View style={style.listItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={style.dot}>•</Text>
                <Text style={style.percentageFont}>{`${item[x]}%`}</Text>
              </View>
              <View>
                <Text style={{ color: '#BEB9B9' }}>{x}</Text>
              </View>
            </View>
            {index === item.length - 1 ?
              <View style={style.line} />
              :
              null
            }
          </View>
        ))}
      </View>
    );
  };

  return (
    <MenuProvider >
      <GradientHeaderComponent backgroundColor={'#6CC799'}>
        <DatePickerModal
          modalDisplayed={modalDisplayed}
          setModalDisplayed={setModalDisplayed}
          setSelectedStartDate={setSelectedStartDate}
          setSelectedEndDate={setSelectedEndDate}
          filterData={filterData}
        />
          <View style={{backgroundColor: '#F2F2F2', flex: 1}}>
            <View style={{zIndex: -1, backgroundColor: 'transparent', height: Math.round(Dimensions.get('window').height * 0.7)}}>
              <LinearGradient
                style={{
                  flex: 1,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20
                }}
                colors={['#6CC799', '#3A7F78']}
              />
            </View>
            <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
              <ScrollView style={{flex: 1}}>
                  <View style={style.transparentView}>
                    {graphMeasurements.loading || transformedGraphData === '' ?
                      <View style={{ height: 220, justifyContent: 'center', alignItems:'center' }}>
                        <ActivityIndicator
                          animating={true}
                          size="large"
                          color="white"
                        />
                      </View> :
                      (transformedGraphData.length > 0 ?
                      <AnalyticsGraph
                        loading={false}
                        data={transformedGraphData}
                        height={220}
                      />
                      :
                      <View style={{backgroundColor: '#6CC799', height: 220, justifyContent: 'center', alignItems:'center' }}>
                        <Text style={{color: 'white'}}>{t('no data to show')}</Text>
                      </View>)
                    }
                  </View>
                  <View>
                    <Menu style={{height: 44}} onSelect={ value => {
                      if(value === 'custom') {
                        setModalDisplayed(true);
                      }
                      else {
                        setLastPeriodToShow(value);
                        getPeriodMeasurements(dispatch, siloId, value);
                      }
                      return true;
                    }}>
                      <MenuTrigger customStyles={triggerStyles}
                      >
                        <Text style={{color: 'white', height: 20}}>{t('select period to show')}</Text><CalendarIcon/>
                      </MenuTrigger>
                      <MenuOptions customStyles={optionsStyles}>
                        <MenuOption value={'hour'} text={t('last hour')} />
                        <MenuOption value={'day'} text={t('last day')}/>
                        <MenuOption value={'week'} text={t('last week')}/>
                        <MenuOption value={'month'} text={t('last month')}/>
                        <MenuOption value={'custom'} text={t('custom date')}/>
                      </MenuOptions>
                    </Menu>
                  </View>
                  <FlatList data={analyticsList()} renderItem={renderItem} style={style.list}
                            keyExtractor={(item, index) => index.toString()} />
                </ScrollView>
            </View>
          </View>
      </GradientHeaderComponent>
    </MenuProvider>
  )
};

export default AnalyticsScreen;

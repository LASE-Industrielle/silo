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


const style = StyleSheet.create({
  line: {
    borderColor: '#BEB9B9',
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  transparentView: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#6CC799',
    borderRadius: 5,
    height: 250
  },
  periodButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  list: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: 10,
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
    marginHorizontal: 10
  },
  triggerWrapper: {
    backgroundColor: '#6CC799',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'row',
  },
  triggerTouchable: {
    underlayColor: 'darkblue',
    activeOpacity: 70,
    style : {
      flex: 1,
    },
  },
};

const optionsStyles = {
  optionsContainer: {
    backgroundColor: '#6CC799',
    marginTop: 45,
    marginHorizontal: 12,
    width:  Math.round(Dimensions.get('window').width) - 24,
  },
  optionWrapper: {
    borderBottomColor: '#6BB599',
    borderBottomWidth: 2,
  },
  optionTouchable: {
    activeOpacity: 0.5,
  },
  optionText: {
    color: 'white',
  },
  OptionTouchableComponent: TouchableOpacity,
};

const AnalyticsScreen = (props) => {

  const [{graphMeasurements}, dispatch] = useStore();
  const siloId = props.navigation.getParam('id', 1);
  const [modalDisplayed, setModalDisplayed] = useState(false);

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
        {Object.keys(item).map(x => (
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
            <View style={style.line} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <MenuProvider >
      <GradientHeaderComponent backgroundColor={'#3A7F78'}>
        <DatePickerModal
          modalDisplayed={modalDisplayed}
          setModalDisplayed={setModalDisplayed}
          setSelectedStartDate={setSelectedStartDate}
          setSelectedEndDate={setSelectedEndDate}
          filterData={filterData}
        />
           {graphMeasurements.loading || transformedGraphData === '' ? <View style={{height: '100%', backgroundColor: '#3A7F78', marginBottom: 0}}>
                 <ActivityIndicator
                  animating={true}
                  size="large"
                />
            </View> :
              (<ScrollView style={{ flex: 1, backgroundColor: '#3A7F78' }}>
                  <View style={style.transparentView}>
                    { transformedGraphData.length > 0 ?
                      <AnalyticsGraph
                        loading={false}
                        data={transformedGraphData}
                        height={220}
                      />
                      :
                      <View style={{backgroundColor: '#6CC799', height: 220, justifyContent: 'center', alignItems:'center' }}>
                        <Text style={{color: 'white'}}>No data to show</Text>
                      </View>
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
                        <Text style={{color: 'white'}}>Select period to show</Text><CalendarIcon/>
                      </MenuTrigger>
                      <MenuOptions customStyles={optionsStyles}>
                        <MenuOption value={'hour'} text='Last Hour' />
                        <MenuOption value={'day'} text={'Last Day'}/>
                        <MenuOption value={'week'} text={'Last Week'}/>
                        <MenuOption value={'month'} text={'Last Month'}/>
                        <MenuOption value={'custom'} text={'Custom Date'}/>
                      </MenuOptions>
                    </Menu>
                  </View>
                  <FlatList data={analyticsList()} renderItem={renderItem} style={style.list}
                            keyExtractor={(item, index) => index.toString()} />
                </ScrollView>
                   )
                }
      </GradientHeaderComponent>
    </MenuProvider>
  )
};

export default AnalyticsScreen;

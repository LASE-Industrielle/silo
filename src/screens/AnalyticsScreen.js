import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView, View, Picker, ActionSheetIOS, Platform, Alert, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, List, ListItem, Right, Text, Title,} from 'native-base';
import styles from '../Styles';

import {getAllMeasurements, filterMeasurements, getPeriodMeasurements} from '../services/MeasurementService';
import {useStore} from "../context/StateContext";
import AnalyticsGraph from '../components/AnalyticsGraph';
import DatePickerModal from '../components/DatePickerModal';
import DatePickerIcon from "../icons/DatePickerIcon";
import axios from 'axios';

import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import GradientHeaderComponent from '../components/GradientHeaderComponent';


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
      // if (i === 7) {
      //   break;
      // }
      let dataMeasurement = {};
      //dataMeasurement.x = moment(new Date(measurementsArray[i])).format("MMM DD");
      dataMeasurement.x = measurementsArray[i];

      //let yValues = Object.values(graphMeasurements.data[measurementsArray[i]]);
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
      arr.unshift(<ListItem key={key}>
        <Left>
          <Text>{graphMeasurements.data[key]}%</Text>
        </Left>
        <Right>
          <Text note>{key}</Text>
        </Right>
      </ListItem>);
    });
    // Object.keys(graphMeasurements.data)
    //   .map(key => {
    //     arr.push(<ListItem key={key} itemDivider>
    //       <Text style={{color: '#676767'}}>{new Date(key).toLocaleDateString('en-US', {
    //         weekday: 'short',
    //         month: 'long',
    //         day: 'numeric'
    //       })}</Text>
    //     </ListItem>);
    //     Object.keys(graphMeasurements.data[key])
    //       .map(timestamp => {
    //         arr.push(<ListItem key={key + timestamp}>
    //           <Left>
    //             <Text>{graphMeasurements.data[key][timestamp]}%</Text>
    //           </Left>
    //           <Right>
    //             <Text note>{timestamp}</Text>
    //           </Right>
    //         </ListItem>);
    //       });
    //   });
    return arr.map(x => x);
  };

  return (
    <MenuProvider >
    <GradientHeaderComponent>
      <DatePickerModal
        modalDisplayed={modalDisplayed}
        setModalDisplayed={setModalDisplayed}
        setSelectedStartDate={setSelectedStartDate}
        setSelectedEndDate={setSelectedEndDate}
        filterData={filterData}
      />
      {graphMeasurements.loading || transformedGraphData === '' ? <View style={{height: 220, marginBottom: 0}}>
          <ActivityIndicator
            animating={true}
            size="large"
          />
      </View> :
        (<View>
          <View style={{marginBottom: 0, height: 220}}>
            { transformedGraphData.length > 0 ?
              <AnalyticsGraph
                loading={false}
                data={transformedGraphData}
                height={220}
              />
              :
              <View style={{backgroundColor: '#6CC799', height: 220}}>
                <Text style={{color: 'white'}}>No data to show</Text>
              </View>
            }
          </View>
          {
           Platform.OS === 'ios' ?
             (
               <View style={{height: 40}}>
                 <Menu onSelect={ value => {
                   if(value === 'custom') {
                     setModalDisplayed(true);
                   }
                   else{
                     setSelectedEndDate(new Date);
                   }
                   return true;
                 }}>
                   <MenuTrigger text='Select date' />
                   <MenuOptions>
                     <MenuOption value={'hour'} text='Last Hour' />
                     <MenuOption value={'day'} text={'Last Day'}/>
                     <MenuOption value={'week'} text={'Last Week'}/>
                     <MenuOption value={'month'} text={'Last Month'} />
                     <MenuOption value={'custom'} text={'Custom Date'}/>
                   </MenuOptions>
                 </Menu>
               </View>
             )
             :
             (
              <View style={{height: 40}}>
               <Menu onSelect={ value => {
                 if(value === 'custom') {
                   setModalDisplayed(true);
                 }
                 else {
                   setLastPeriodToShow(value);
                   getPeriodMeasurements(dispatch, siloId, value);
                 }
                 return true;
               }}>
                 <MenuTrigger text='Select period to show' />
                 <MenuOptions customStyles={{
                   OptionTouchableComponent: TouchableOpacity,
                   optionTouchable: {activeOpacity: 0.5},
                 }}>
                   <MenuOption value={'hour'} text='Last Hour' />
                   <MenuOption value={'day'} text={'Last Day'}/>
                   <MenuOption value={'week'} text={'Last Week'}/>
                   <MenuOption value={'month'} text={'Last Month'}/>
                   <MenuOption value={'custom'} text={'Custom Date'}/>
                 </MenuOptions>
               </Menu>
              </View>
             )
          }
          {/*<View style={{height:40}}>*/}
          {/*  <Button*/}
          {/*    block*/}
          {/*    primary*/}
          {/*    onPress={() => setModalDisplayed(true)}*/}
          {/*    style={{*/}
          {/*      flex: 1,*/}
          {/*      justifyContent: 'center',*/}
          {/*      alignItems: 'center',*/}
          {/*      flexDirection: 'row',*/}
          {/*      //paddingVertical:15,*/}
          {/*      height:40,*/}
          {/*      marginLeft: 20,*/}
          {/*      marginRight: 20,*/}
          {/*      marginTop: 10,*/}
          {/*      backgroundColor: '#6CC799',*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Text>weqwew</Text><DatePickerIcon fill='white'/>*/}
          {/*  </Button>*/}
          {/*</View>*/}
        </View>)}
      <ScrollView style={{position: 'relative', width: '100%', marginTop: 0}} refreshControl={<RefreshControl
        refreshing={graphMeasurements.loading}
        onRefresh={onRefresh}
      />}>
        <List>
          {analyticsList()}
        </List>
      </ScrollView>

    </GradientHeaderComponent>
    </MenuProvider>
  )
};

export default AnalyticsScreen;

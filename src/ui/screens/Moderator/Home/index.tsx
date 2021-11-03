import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../../../components/ModeratePageCard/Header'
import {SafeAreaView} from 'react-native-safe-area-context';
import ModeratePageCard from '../../../components/ModeratePageCard';
import styles from './Style';
import {trades} from '../../../../Assets/dumyData';
import ModeratorNavbar from '../../../components/Navbars/ModeratorNavbar';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#0a8a40',
  color: 'white',
  fontWeight: 'bold',
  //padding: '3%',
};

const index = ({navigation}) => {
  const [pendingBtn, setpendingBtn] = useState(btnSetected);
  const [ongoingBtn, setOngoing] = useState({});
  const [CompletedBtn, setCompleted] = useState({});
  const [navigateState, setnavigateState] = useState(0);
  const navigateCardDetails = (route, status) => {
    console.log(route)
    if (route === 1) {
      navigation.navigate('CardDetails');
    }
    else if (route === 2) {
      if (status === "pending") {
        navigation.navigate('BitcoinCardDetailPending');
      }
      if (status === "ongoing") {
        navigation.navigate('BitcoinCardDetailPending');
      }
      if (status === "completed") {
        navigation.navigate('BitcoinCardDetailComplete');
      }
      
    }
  };

  const activeButton = (buttonType: string) => {
    console.log(buttonType);
    if (buttonType === 'pending') {
      setpendingBtn(btnSetected);
      setOngoing({});
      setCompleted({});
      setnavigateState(0);
    }
    if (buttonType === 'ongoing') {
      setpendingBtn({});
      setOngoing(btnSetected);
      setCompleted({});
      setnavigateState(1);
    }
    if (buttonType === 'completed') {
      setpendingBtn({});
      setOngoing({});
      setCompleted(btnSetected);
      setnavigateState(2);
    }
  };
  // eslint-disable-next-line prettier/prettier
  return (
    <View style={{
      height: height,
      width: width,
      flex: 1,
      backgroundColor: '#0a8a40'
    }}>
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <StatusBar backgroundColor="#0a8a40"/>
      {/* <View style={styles.header}>
        <Text style={styles.headerHeading}>Trades</Text>
      </View> */}
    <View style={{height: height, width: width, backgroundColor: '#0a8a40'}}>
    <View style={{
              flexDirection:'row',
              justifyContent:'space-around',
              backgroundColor:'#0a8a40',
              paddingVertical:6
            }}>
             

              <TouchableOpacity
              onPress={()=>{
                navigation.navigate('ModeratorScreen')
              }}
              >
                <Text></Text>
              <Text style={{color:'white'}}>Trades</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{
                navigation.navigate('')
              }}
              >
                <Text></Text>
              <Text style={{color:'white'}}>Logout</Text>
              </TouchableOpacity>

            </View>
        {/* <Header
          style={{marginTop: 10}}
          navigation={navigation}
          Heading={'Trades'}
        />     */}

      <View style={styles.mainBody}>
        <View style={[styles.headerButtons]}>
          <Text
            style={[styles.headerButtom, styles.JoinLeft, {...pendingBtn}]}
            onPress={() => {
              activeButton('pending');
            }}>
            Pending
          </Text>

          <Text
            style={[styles.headerButtom, {...ongoingBtn}]}
            onPress={() => {
              activeButton('ongoing');
            }}>
            Ongoing
          </Text>

          <Text
            style={[styles.headerButtom, styles.JoinRight, {...CompletedBtn}]}
            onPress={() => {
              activeButton('completed');
            }}>
            Completed
          </Text>
        </View>
        <ScrollView>
          {navigateState === 0 &&
            trades['pending'].map((pending: any, index: number) => {
              return (
                <ModeratePageCard
                  // route={pending?.route}
                  key={index}
                  cardImage={pending?.cardImage}
                  title={pending?.title}
                  id={pending?.id}
                  amount={pending?.amount}
                  date={pending?.date}
                  userName={pending?.userName}
                  reDirecttoCardDetail={() => navigateCardDetails(pending?.route, 'pending')}
                />
              );
            })}

          {navigateState === 1 &&
            trades['ongoing'].map((ongoing: any, index: number) => {
              return (
                <ModeratePageCard
                // route={ongoing?.route}
                  key={index}
                  cardImage={ongoing?.cardImage}
                  title={ongoing?.title}
                  id={ongoing?.id}
                  amount={ongoing?.amount}
                  date={ongoing?.date}
                  userName={ongoing?.userName}
                  reDirecttoCardDetail={() => navigateCardDetails(ongoing?.route, 'ongoing')}
                />
              );
            })}

          {navigateState === 2 &&
            trades['completed'].map((completed: any, index: number) => {
              return (
                <ModeratePageCard
                // route={completed?.route}
                  key={index}
                  cardImage={completed?.cardImage}
                  title={completed?.title}
                  id={completed?.id}
                  amount={completed?.amount}
                  date={completed?.date}
                  userName={completed?.userName}
                  reDirecttoCardDetail={() => navigateCardDetails(completed?.route, 'completed')}
                />
              );
            })}
          
          <View style={{paddingBottom: 60}}></View>
        </ScrollView>
      </View>
      </View>
            <ModeratorNavbar navigation={navigation} activePage={'more'} backgroundColor={'green'}/>
    </SafeAreaView>
    </View>
  );
};

export default index;

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
import {SafeAreaView} from 'react-native-safe-area-context';
import ModeratePageCard from '../../../components/ModeratePageCard';
import styles from './Style';
import {trades} from '../../../../Assets/dumyData';

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
  const navigateCardDetails = () => {
    navigation.navigate('CardDetails');
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
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <StatusBar hidden/>
      <View style={styles.header}>
        <Text style={styles.headerHeading}>Trades</Text>
      </View>

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
                  key={index}
                  cardImage={pending?.cardImage}
                  title={pending?.title}
                  id={pending?.id}
                  amount={pending?.amount}
                  date={pending?.date}
                  userName={pending?.userName}
                  reDirecttoCardDetail={() => navigateCardDetails()}
                />
              );
            })}

          {navigateState === 1 &&
            trades['ongoing'].map((ongoing: any, index: number) => {
              return (
                <ModeratePageCard
                  key={index}
                  cardImage={ongoing?.cardImage}
                  title={ongoing?.title}
                  id={ongoing?.id}
                  amount={ongoing?.amount}
                  date={ongoing?.date}
                  userName={ongoing?.userName}
                  reDirecttoCardDetail={() => navigateCardDetails()}
                />
              );
            })}

          {navigateState === 2 &&
            trades['completed'].map((completed: any, index: number) => {
              return (
                <ModeratePageCard
                  key={index}
                  cardImage={completed?.cardImage}
                  title={completed?.title}
                  id={completed?.id}
                  amount={completed?.amount}
                  date={completed?.date}
                  userName={completed?.userName}
                  reDirecttoCardDetail={() => navigateCardDetails()}
                />
              );
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;

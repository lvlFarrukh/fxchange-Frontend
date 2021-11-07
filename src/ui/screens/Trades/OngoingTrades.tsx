import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';
import styles from './Style';
import ModeratePageCard from '../../../ui/components/ModeratePageCard';
import Navbar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');
const OngoingTrades = ({
  activeButton,
  ongoingTrades,
  completedTrades,
  navigation,
}) => {
  const navigateCardDetails = (route, type) => {
    console.log(route, type);
    if (route === 0) {
      navigation.navigate('tradeCardDetails');
    } else if (route === 1) {
      if (type === 'OngoingTrades') {
        navigation.navigate('TeadesBitcoinCardDetailPending');
      }
      if (type === 'CompletedTrades') {
        // navigation.navigate('BitcoinCardDetailPending');
      }
    }
  };
  return (
  
    <View style={styles.mainBodyPartOne}>
        <View style={[styles.partOneButtons]}>
          <MyText
            style={[
              styles.partOneButton,
              styles.JoinLeft,
              {...ongoingTrades},
              {marginRight: 20},
            ]}
            onPress={() => {
              activeButton('OngoingTrades');
            }}>
            Ongoing Trades
          </MyText>

          <MyText
            style={[
              styles.partOneButton,
              styles.JoinRight,
              {...completedTrades},
            ]}
            onPress={() => {
              activeButton('CompletedTrades');
            }}>
            Completed Trades
          </MyText>
        </View>

        <ScrollView>
          <ModeratePageCard
            key={1}
            cardImage={require('../../../Assets/ITunes.png')}
            title={'Itunes'}
            id={'#FG4558668900'}
            amount={'100(N33,000)'}
            date={'Dec 10, 2021 1:20PM'}
            userName={''}
            reDirecttoCardDetail={() =>
              navigateCardDetails(0, 'OngoingTrades')
            }
          />
          <ModeratePageCard
            key={1}
            cardImage={require('../../../Assets/CARDS/amazon.png')}
            title={'Amazon'}
            id={'#FG4558668900'}
            amount={'100(N33,000)'}
            date={'Dec 10, 2021 1:20PM'}
            userName={''}
            reDirecttoCardDetail={() => ''}
          />
          <ModeratePageCard
            key={1}
            cardImage={require('../../../Assets/ICONS/Bitcoin.png')}
            title={'Bitcoin'}
            id={'#FG4558668900'}
            amount={'100(N33,000)'}
            date={'Dec 10, 2021 1:20PM'}
            userName={''}
            reDirecttoCardDetail={() => navigateCardDetails(1, 'OngoingTrades')}
          />
          <View style={{height: 60}}></View>
        </ScrollView>
      </View>

  );
};
export default OngoingTrades;

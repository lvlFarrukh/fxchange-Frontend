import React, {useContext, useEffect, useMemo, useState} from 'react';
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
  TouchableHighlight,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ModeratePageCard from '../../components/ModeratePageCard';
import styles from './Style';
const {width, height} = Dimensions.get('screen');

const CompletedTrades = ({activeButton, ongoingTrades, completedTrades,navigation}) => {
  const navigateCardDetails = () => {
    navigation.navigate('tradeCardDetails');
  };
  return (
<>
      <View style={styles.mainBodyPartOne}>
        <View style={[styles.partOneButtons]}>
          <Text
            style={[
              styles.partOneButton,
              styles.JoinLeft,
              {...completedTrades},
              {marginRight: 20},
            ]}
            onPress={() => {
              activeButton('OngoingTrades');
            }}>
            Ongoing Trades
          </Text>

          <Text
            style={[styles.partOneButton, styles.JoinRight, {...ongoingTrades}]}
            onPress={() => {
              activeButton('CompletedTrades');
            }}>
            Completed Trades
          </Text>
        </View>
        <ScrollView>
          <View style={{marginTop:30}}>
        <ModeratePageCard
                  key={1}
                  cardImage={require('../../../Assets/ITunes.png')}
                  title={"Itunes"}
                  id={"#FG4558668900"}
                  amount={"100(N33,000)"}
                  date={"Dec 10, 2021 1:20PM"}
                  userName={""}
                  reDirecttoCardDetail={() =>navigateCardDetails()}
                />
                 <ModeratePageCard
                  key={1}
                  cardImage={require('../../../Assets/ITunes.png')}
                  title={"Itunes"}
                  id={"#FG4558668900"}
                  amount={"100(N33,000)"}
                  date={"Dec 10, 2021 1:20PM"}
                  userName={""}
                  reDirecttoCardDetail={() =>navigateCardDetails()}
                />
                </View>
                </ScrollView>
      </View>
    </>
  );
};
export default CompletedTrades;

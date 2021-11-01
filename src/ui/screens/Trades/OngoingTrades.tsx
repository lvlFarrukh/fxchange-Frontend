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
} from 'react-native';
import styles from './Style';
import ModeratePageCard from '../../../ui/components/ModeratePageCard';
const {width, height} = Dimensions.get('screen');
const OngoingTrades = ({activeButton, ongoingTrades, completedTrades}) => {
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
                  reDirecttoCardDetail={() =>""}
                />
                
                </View>
                <ModeratePageCard
                  key={1}
                  cardImage={require('../../../Assets/CARDS/amazon.png')}
                  title={"Amazon"}
                  id={"#FG4558668900"}
                  amount={"100(N33,000)"}
                  date={"Dec 10, 2021 1:20PM"}
                  userName={""}
                  reDirecttoCardDetail={() =>""}
                />
                   <ModeratePageCard
                  key={1}
                  cardImage={require('../../../Assets/ICONS/Bitcoin.png')}
                  title={"Bitcoin"}
                  id={"#FG4558668900"}
                  amount={"100(N33,000)"}
                  date={"Dec 10, 2021 1:20PM"}
                  userName={""}
                  reDirecttoCardDetail={() =>""}
                />
                </ScrollView>
      </View>
    </>
  );
};
export default OngoingTrades;
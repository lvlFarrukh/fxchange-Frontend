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
import CompletedTrades from './CompletedTrades';
import OngoingTrades from './OngoingTrades';
import styles from './Style';
const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#0a8a40',
  color: 'white',
  fontWeight: 'bold',
  Zindex:1,
  //padding: '3%',
};
const Trades = ({navigation}) => {
  const [ongoingTrades, setOngoingTrades] = useState(btnSetected);
  const [completedTrades, setCompletedTrades] = useState({});
  const [screen, setScreen] = useState(0);
  const activeButton = (buttonType: string) => {
    if (buttonType === 'OngoingTrades') {
      setOngoingTrades(btnSetected);
      setScreen(0);
      setCompletedTrades({});
    }
    if (buttonType === 'CompletedTrades') {
      setOngoingTrades({});
      setCompletedTrades(btnSetected);
      setScreen(1);
    }
  };
  return (
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <View style={styles.header}>
          <View style={styles.headerUpperArea}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: '400',
                color: 'white',
                marginLeft: 120,
              }}>
              Trades
            </Text>
          </View>
        </View>
        {screen === 0 ? (
          <OngoingTrades
            activeButton={activeButton}
            ongoingTrades={ongoingTrades}
            completedTrades={completedTrades}
          />
        ) : (
          <CompletedTrades
            activeButton={activeButton}
            ongoingTrades={ongoingTrades}
            completedTrades={completedTrades}
            navigation={navigation}/>
        )}
      </SafeAreaView>
  );
};
export default Trades;

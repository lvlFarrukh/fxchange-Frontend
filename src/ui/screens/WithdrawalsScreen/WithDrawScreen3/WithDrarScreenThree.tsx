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
  StatusBar,
} from 'react-native';
import Bitcoin from './Bitcoin';
import GiftCards from './giftCard';
import styles from './Style';
const { width, height } = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#0a8a40',
  color: 'white',
  fontWeight: 'bold',
  zIndex:5,
  //padding: '3%',
};
const WithdrawalsScreenThree = ({ navigation }) => {
  const [giftCards, setGiftCards] = useState(btnSetected);
  const [bitcoin, setBitcoin] = useState({});
  const [screen, setScreen] = useState(0);

  const activeButton = (buttonType: string) => {
    console.log(buttonType)
    if (buttonType === 'giftCards') {
      setGiftCards(btnSetected);
      setScreen(1);
      setBitcoin({});
    }
    if (buttonType === 'bitcoin') {
      setGiftCards({});
      setBitcoin(btnSetected);
      setScreen(0);
    }
  };
  return (

    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
        <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
     
        <View style={styles.header}>
        <View style={styles.headerUpperArea}>
            <TouchableOpacity
              style={{alignSelf: 'center', marginLeft: 5}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../../../Assets/ICONS/arrow=white.png')}
                style={{
                  height: 15,
                  width: 25,
                }}
              />
            </TouchableOpacity>

            <Text
              style={[
                {
                  color: 'white',
                  fontSize: 18,
                  alignSelf: 'center',
                  marginLeft: -10,
                  marginTop: -5,
                },
              ]}>
              Our Rates
            </Text>
            <View></View>
          </View>
        </View>
        {screen === 0 ? (
          <GiftCards
            activeButton={activeButton}
            giftCards={giftCards}
            bitcoin={bitcoin}
          />
        ) : (
          <Bitcoin
            activeButton={activeButton}
            giftCards={giftCards}
            bitcoin={bitcoin}
          />
        )}
      </ScrollView>
    </SafeAreaView>

  );
};
export default WithdrawalsScreenThree;

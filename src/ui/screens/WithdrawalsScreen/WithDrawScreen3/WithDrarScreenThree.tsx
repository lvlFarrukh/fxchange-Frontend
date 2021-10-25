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
import Bitcoin from './Bitcoin';
import GiftCards from './giftCard';
import styles from './Style';
const { width, height } = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#0a8a40',
  color: 'white',
  fontWeight: 'bold',
  //padding: '3%',
};
const WithdrawalsScreenThree = ({ navigation }) => {
  const [giftCards, setGiftCards] = useState(btnSetected);
  const [bitcoin, setBitcoin] = useState({});
  const [screen, setScreen] = useState(0);
  const activeButton = (buttonType: string) => {
    if (buttonType === 'giftCards') {
      setGiftCards(btnSetected);
      setScreen(0);
      setBitcoin({});
    }
    if (buttonType === 'bitcoin') {
      setGiftCards({});
      setBitcoin(btnSetected);
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
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerUpperArea}>
            <TouchableOpacity
            onPress={()=>{navigation.goBack()}}
            >
              <Image
                source={require('../../../../Assets/ICONS/arrow=white.png')}
                style={{ width: 30, height: 20, marginTop: 6, marginRight: 40 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                fontWeight: '400',
                color: 'white',
                marginLeft: 40,
              }}>
              Our Rates
            </Text>
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

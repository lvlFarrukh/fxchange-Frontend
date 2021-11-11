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
import Navbar from '../../../components/Navbars/Navbar';
import Header from '../../../components/ModeratePageCard/Header';
import Bitcoin from './Bitcoin';
import GiftCards from './giftCard';
import styles from './Style';
const { width, height } = Dimensions.get('window');
const btnSetected: any = {
  backgroundColor: '#1bb76d',
  color: 'white',
  // fontWeight: 'bold',
  zIndex: 5,
  fontFamily:'Nunito-Regular'
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
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={{ flex: 1, height: height }}>

        <View style={styles.header}>
          <View style={{ height: height * 0.10, marginTop: 25 }}>
            <Header navigation={navigation} style={{ marginTop: 5}} Heading={"Our Rates"} />
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
      <Navbar navigation={navigation} activePage={'rates'} backgroundColor={'green'}/>

    </SafeAreaView>

  );
};
export default WithdrawalsScreenThree;

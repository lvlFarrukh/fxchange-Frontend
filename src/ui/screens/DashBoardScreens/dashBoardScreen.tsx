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
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbars/Navbar';

const {width, height} = Dimensions.get('window');

const DashBoardScreen = ({navigation}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#0a8a40',
      }}>
      <SafeAreaView style={{flex: 1, height: height, width: width}}>
        <ScrollView>
          <View style={[styles.header, {}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10,
                marginTop: 5,
              }}>
              <Text style={{color: '#fff', fontSize: 12.5, marginRight: 10}}>
                Hi, Amanda
              </Text>
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 10, color: '#fff', marginBottom: 5}}>
                Wallet Balance
              </Text>
              <Text style={{fontSize: 30, color: '#fff'}}>N50,000</Text>
              <Text></Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('WithDrawScreenSix');
                  }}>
                  <Text style={{fontSize: 10, color: '#fff', marginBottom: 3}}>
                    WITHDRAW FUNDS
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 10, color: '#fff', marginBottom: 3}}>
                  {'     '}|{'       '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TransactionHistoryScreen');
                  }}>
                  <Text style={{fontSize: 10, color: '#fff', marginBottom: 3}}>
                    TRANSECTION HISTORY
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.body, {}]}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                //alignSelf: "center",
                backgroundColor: '#264389',
                height: 65,
                marginTop: -30,
                marginHorizontal: 20,
                borderRadius: 15,
                paddingLeft: 16,
                paddingRight: 22,
              }}
              onPress={() => {
                navigation.navigate('GiftCardScreen');
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../Assets/ICONS/giftcard.png')}
                  style={styles.image}
                />
                <Text style={{color: '#fff', fontSize: 18, marginLeft: 5}}>
                  Sell Giftcard
                </Text>
              </View>
              <Icon
                name={'arrow-forward-outline'}
                size={30}
                color={'#fff'}
                style={{}}></Icon>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                //alignSelf: "center",
                backgroundColor: '#d65d0e',
                height: 65,
                marginTop: 18,
                marginHorizontal: 20,
                borderRadius: 15,
                paddingLeft: 16,
                paddingRight: 22,
              }}
              onPress={() => {
                navigation.navigate('SellBitcoin');
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../Assets/ICONS/Bitcoin.png')}
                  style={styles.image}
                />
                <Text style={{color: '#fff', fontSize: 18, marginLeft: 5}}>
                  Sell Bitcoin
                </Text>
              </View>
              <Icon
                name={'arrow-forward-outline'}
                size={30}
                color={'#fff'}
                style={{}}></Icon>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: '#fff',
                height: 80,
                marginTop: 30,
                marginHorizontal: 20,
                borderRadius: 15,
                paddingHorizontal: 18,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 50},
                shadowOpacity: 1,
                shadowRadius: 5,
                elevation: 8,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  marginVertical: 8,
                  fontWeight: '400',
                  fontSize: 13,
                  color: '#343434',
                }}>
                Top Rates
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    Itunes
                  </Text>
                  <Text style={{fontSize: 9, color: '#595758'}}>N33,000</Text>
                </View>

                <View>
                  <Text
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    ITunes
                  </Text>
                  <Text style={{fontSize: 9, color: '#595758'}}>N33,000</Text>
                </View>

                <View>
                  <Text
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    ITunes
                  </Text>
                  <Text style={{fontSize: 9, color: '#595758'}}>N33,000</Text>
                </View>

                <View>
                  <Text
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    ITunes
                  </Text>
                  <Text style={{fontSize: 9, color: '#595758'}}>N33,000</Text>
                </View>
              </View>
            </View>

            <Text
              style={{
                marginLeft: 50,
                marginTop: 30,
                fontWeight: '600',
                fontSize: 14,
                color: '#343434',
              }}>
              News & Updates
            </Text>

            <View
              style={{
                marginTop: 20,
                marginHorizontal: 20,
                padding: 5,
                backgroundColor: '#ffffff',
                alignContent: 'center',
                borderRadius: 3,
              }}>
              <ImageBackground
                source={require('../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                style={styles.cardImage}></ImageBackground>
            </View>
          </View>
        </ScrollView>
        <Navbar navigation={navigation} activePage={'home'} backgroundColor={undefined}/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
  },
  header: {
    height: 250,
    backgroundColor: '#0a8a40',
  },
  body: {
    height: height - 250,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  cardImage: {
    resizeMode: 'contain',
    height: 135,
    width: '100%',
    backgroundColor: '#dfe2f5',
    alignSelf: 'center',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});
export default DashBoardScreen;

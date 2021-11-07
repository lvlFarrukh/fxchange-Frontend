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
  ScrollView
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbars/Navbar';
import Slider from 'react-native-hook-image-slider';
import MyText from '../../components/DefaultTextComponent/MyText';

const {width, height} = Dimensions.get('window');

const DashBoardScreen = ({navigation}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d',
      }}>
      <SafeAreaView style={{flex: 1, height: height, width: width}}>
        <ScrollView >
          <View style={[styles.header, {}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10,
                marginTop: 5,
              }}>
              <MyText style={{color: '#fff', fontSize: 12.5, marginRight: 10}}>
                Hi, Amanda
              </MyText>
            </View>
            <View style={{marginLeft: 20}}>
              <MyText style={{fontSize: 10, color: '#fff', marginBottom: 5}}>
                Wallet Balance
              </MyText>
              <MyText style={{fontSize: 30, color: '#fff'}}>N50,000</MyText>
              <MyText></MyText>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                activeOpacity={0.9}
                  onPress={() => {
                    navigation.navigate('WithDrawScreenSix');
                  }}>
                  <MyText style={{fontSize: 10, color: '#fff', marginBottom: 3}}>
                    WITHDRAW FUNDS
                  </MyText>
                </TouchableOpacity>
                <MyText style={{fontSize: 10, color: '#fff', marginBottom: 3}}>
                  {'     '}|{'       '}
                </MyText>
                <TouchableOpacity
                activeOpacity={0.9}
                  onPress={() => {
                    navigation.navigate('TransactionHistoryScreen');
                  }}>
                  <MyText style={{fontSize: 10, color: '#fff', marginBottom: 3}}>
                    TRANSECTION HISTORY
                  </MyText>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.body, {}]}>
            <TouchableOpacity
              activeOpacity={1}
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
                <MyText style={{color: '#fff', fontSize: 17, marginLeft: 5}}>
                  Sell Giftcard
                </MyText>
              </View>
              <Icon
                name={'arrow-forward-outline'}
                size={25}
                color={'#fff'}
                style={{}}></Icon>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={1}
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
                <MyText style={{color: '#fff', fontSize: 17, marginLeft: 5}}>
                  Sell Bitcoin
                </MyText>
              </View>
              <Icon
                name={'arrow-forward-outline'}
                size={25}
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
              <MyText
                style={{
                  marginVertical: 8,
                  fontWeight: '400',
                  fontSize: 13,
                  color: '#343434',
                }}>
                Top Rates
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <MyText
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    Itunes
                  </MyText>
                  <MyText style={{fontSize: 9, color: '#595758'}}>N33,000</MyText>
                </View>

                <View>
                  <MyText
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    ITunes
                  </MyText>
                  <MyText style={{fontSize: 9, color: '#595758'}}>N33,000</MyText>
                </View>

                <View>
                  <MyText
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    ITunes
                  </MyText>
                  <MyText style={{fontSize: 9, color: '#595758'}}>N33,000</MyText>
                </View>

                <View>
                  <MyText
                    style={{fontWeight: '400', color: '#343434', fontSize: 13}}>
                    ITunes
                  </MyText>
                  <MyText style={{fontSize: 9, color: '#595758'}}>N33,000</MyText>
                </View>
              </View>
            </View>

            <MyText
              style={{
                marginLeft: 50,
                marginTop: 30,
                fontWeight: '600',
                fontSize: 14,
                color: '#343434',
              }}>
              News & Updates
            </MyText>

            <View
              style={{
                marginTop: 20,
                marginHorizontal: 20,
                // padding: 2,
                // backgroundColor: 'pink',
                alignContent: 'center',
                borderRadius: 4,
                overflow: 'hidden'
              }}>
              <Slider
              
                imageHeight={150}
                activeDotColor={'transparent'}
                emptyDotColor={'transparent'}
                images={[
                  'https://i.ibb.co/cFghNhF/timon-klauser-3-MAmj1-ZKSZA-unsplash-c2e88811.jpg',
                  'https://i.ibb.co/q1kFVRT/img2.png',
                ]}
              />

              {/* <ImageBackground
                source={require('../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                style={styles.cardImage}></ImageBackground> */}
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
    height: 210,
    backgroundColor: '#1bb76d',
  },
  body: {
    height: "100%",
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingBottom: 20
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

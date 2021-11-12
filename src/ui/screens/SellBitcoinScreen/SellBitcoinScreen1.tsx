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
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import Header from '../../components/ModeratePageCard/Header';
import Navbar from '../../components/Navbars/Navbar';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');

const SellBitcoinScreen1 = ({navigation}) => {
  return (
    <View style={{height: height, width: width, flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* <StatusBar hidden /> */}
      <SafeAreaView
        style={{
          flex: 1,
          height: height,
          width: width,
          backgroundColor: '#d65d0e',
        }}>
        <View style={{height: 50, justifyContent: 'center'}}>
          <Header navigation={navigation} Heading={'Sell Bitcoin'} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.whiteCardBg,
              {height: '100%', paddingHorizontal: wp(10)},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                paddingBottom: 20,
                marginTop: 10,
              }}>
              <View>
                <MyText style={{fontSize: RFValue(10)}}>Wallet Addresss</MyText>
                <MyText style={{fontSize: RFValue(10)}}>
                  1BnG5DHDVF67gCDHFKFKFGSGXCgCfb
                </MyText>
              </View>
              <Image
                style={{height: wp(28), width: wp(28)}}
                source={require('../../../Assets/ICONS/barCode.png')}
              />
            </View>

            <View style={{marginTop: 20}}>
              <MyText
                style={{fontSize: RFValue(10), alignSelf: 'center', color: '#686667'}}>
                Estimated Rate (570/$)
              </MyText>
              <MyText
                style={{
                  fontSize: RFValue(20),
                  fontWeight: '600',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                N3,500,000
              </MyText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
                            <MyText style={{ padding: 12 }}>Amount Sent in USD</MyText>
                        </TouchableOpacity> */}
              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Amount Sent in USD'}
                placeholderTextColor={'#949494'}></TextInput>

              {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
                            <MyText style={{ padding: 12 }}>Amount Sent in BTC</MyText>
                        </TouchableOpacity> */}
              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Amount Sent in USD'}
                placeholderTextColor={'#949494'}></TextInput>
            </View>
            {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4, marginTop: 10 }}>
                        <MyText style={{ padding: 12 }}>Transaction id (optional)</MyText>
                    </TouchableOpacity> */}
            <TextInput
              style={[styles.TextInputStyle, {marginTop: 10, width: '100%'}]}
              placeholder={'Amount Sent in USD'}
              placeholderTextColor={'#949494'}></TextInput>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <ImageBackground
                source={require('../../../Assets/IMG_3151.jpg')}
                style={styles.cardImage}
                resizeMode={'contain'}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 20,
                      backgroundColor: 'black',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../../../Assets/ICONS/close2.jpeg')}
                      style={{
                        width: 11,
                        height: 11,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </ImageBackground>

              <ImageBackground
                source={require('../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                style={styles.cardImage}
                resizeMode={'contain'}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 20,
                      backgroundColor: 'black',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../../../Assets/ICONS/close2.jpeg')}
                      style={{
                        width: 11,
                        height: 11,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </ImageBackground>
              
            </View>
            

            <TouchableOpacity activeOpacity={0.9} style={styles.roundButton1}>
              <MyText
                style={{fontSize: RFValue(35), color: '#1bb76d', paddingBottom: 5}}>
                +
              </MyText>
            </TouchableOpacity>
            <MyText
              style={{
                color: '#1bb76d',
                alignSelf: 'center',
                marginTop: 5,
                fontSize: RFValue(10),
              }}>
              Add Attachment
            </MyText>

            <TouchableOpacity
              activeOpacity={0.9}
              style={{marginTop: 20, marginBottom: 'auto'}}
              onPress={() => {
                navigation.navigate('TradeSuccesfullScreen2');
              }}>
              <MyText
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#d65d0e',
                  width: '100%',
                  textAlign: 'center',
                  padding: 8,
                  color: '#fff',
                  borderRadius: 5,
                  fontSize: RFValue(12),
                }}>
                SUBMIT
              </MyText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <View style={{position: 'absolute', width: width, bottom: 1}}>
        <Navbar
          navigation={navigation}
          activePage={'home'}
          backgroundColor={undefined}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 20,
    height: 20,
  },
  roundButton1: {
    width: 50,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 50},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 160,
    height: 55,
    alignSelf: 'center',
    marginTop: 20,
  },
  tickImage: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 30,
  },
  whiteCardBg: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: width,
    padding: 20,
    marginBottom: 50
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  bodyHeader: {
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    paddingBottom: 15,
  },
  cardImage: {
    // width: 140,
    // height: 110,
    width: wp(39),
    height: wp(30),
    marginTop: 20,
    backgroundColor: '#dfe2f5',
  },
  Heading: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(15),
    color: '#343434',
  },
  TextInputStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F1F1F1',
    width: wp(38),
    paddingLeft: 10,
    color: '#000',
    fontSize: RFValue(13),
    fontFamily:'Nunito-Regular'
  },
});
export default SellBitcoinScreen1;

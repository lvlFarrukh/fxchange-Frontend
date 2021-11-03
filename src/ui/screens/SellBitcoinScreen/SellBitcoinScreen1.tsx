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
import Header from '../../components/ModeratePageCard/Header';

const {width, height} = Dimensions.get('screen');

const SellBitcoinScreen1 = ({navigation}) => {
  return (
      <ScrollView>
    <View style={{height: height, width: width, flex: 1}}>
    <StatusBar translucent backgroundColor='transparent' />

      {/* <StatusBar hidden /> */}
      <SafeAreaView
        style={{
          flex: 1,
          height: height,
          width: width,
          backgroundColor: '#d65d0e',
        }}>
        <View style={{height: '8%', justifyContent: 'center'}}>
          <Header navigation={navigation} Heading={'Sell Bitcoin'} />
        </View>

        <View
          style={[styles.whiteCardBg, {height: '100%', paddingHorizontal: 35}]}>
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
              <Text style={{fontSize: 10}}>Wallet Addresss</Text>
              <Text style={{fontSize: 10}}>1BnG5DHDVF67gCDHFKFKFGSGXCgCfb</Text>
            </View>
            <Image
              style={{height: 100, width: 100}}
              source={require('../../../Assets/ICONS/barCode.png')}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 10, alignSelf: 'center', color: '#686667'}}>
              Estimated Rate (570/$)
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              N3,500,000
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
                            <Text style={{ padding: 12 }}>Amount Sent in USD</Text>
                        </TouchableOpacity> */}
            <TextInput
              style={styles.TextInputStyle}
              placeholder={'Amount Sent in USD'}
              placeholderTextColor={'#949494'}></TextInput>

            {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
                            <Text style={{ padding: 12 }}>Amount Sent in BTC</Text>
                        </TouchableOpacity> */}
            <TextInput
              style={styles.TextInputStyle}
              placeholder={'Amount Sent in USD'}
              placeholderTextColor={'#949494'}></TextInput>
          </View>
          {/* <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4, marginTop: 10 }}>
                        <Text style={{ padding: 12 }}>Transaction id (optional)</Text>
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
              <TouchableOpacity activeOpacity={0.9}>
                <Image
                  style={styles.closeIcon}
                  source={require('../../../Assets/ICONS/close.png')}
                />
              </TouchableOpacity>
            </ImageBackground>

            <ImageBackground
              source={require('../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
              style={styles.cardImage}
              resizeMode={'contain'}>
              <TouchableOpacity> activeOpacity={0.9}
                <Image
                  style={styles.closeIcon}
                  source={require('../../../Assets/ICONS/close.png')}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <TouchableOpacity activeOpacity={0.9} style={styles.roundButton1}>
            <Text style={{fontSize: 35, color: '#1bb76d', paddingBottom: 5}}>+</Text>
          </TouchableOpacity>
          <Text style={{color: '#1bb76d', alignSelf: 'center', marginTop: 5, fontSize: 10}}>
            Add Attachment
          </Text>

          <TouchableOpacity activeOpacity={0.9} style={{marginTop: 20, marginBottom: 'auto'}}
          onPress={() => {
            navigation.navigate('TradeSuccesfullScreen2')
          }}
          >
            <Text
              style={{
                alignSelf: 'center',
                backgroundColor: '#d65d0e',
                width: '100%',
                textAlign: 'center',
                padding: 8,
                color: '#fff',
                borderRadius: 5,
                fontSize: 12
              }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
    <View style={{marginBottom: 60}}></View>
    </ScrollView>
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
    width: 140,
    height: 110,
    marginTop: 20,
    backgroundColor: '#dfe2f5',
  },
  Heading: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 15,
    color: '#343434',
  },
  TextInputStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F1F1F1',
    width: '48%',
    paddingLeft: 10,
    color: '#000',
  },
});
export default SellBitcoinScreen1;

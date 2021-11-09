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

const {width, height} = Dimensions.get('window');

const ItunesGiftCardScreen = ({route, navigation}) => {
  const [headerTitle, setheaderTitle] = useState(route?.params?.headerTitle);

  return (
    <View style={{height: height, width: width, flex: 1}}>
      <StatusBar translucent backgroundColor="#1bb76d" />
      {/* <StatusBar hidden /> */}
      <SafeAreaView
        style={{
          flex: 1,
          height: height,
          width: width,
          backgroundColor: '#1bb76d',
        }}>
        <View style={{height: 50}}>
          <Header
            navigation={navigation}
            style={{marginTop: 5}}
            Heading={headerTitle}
          />
        </View>

        <View style={[styles.whiteCardBg, {height: '100%'}]}>
          <ScrollView>
            <View style={styles.bodyHeader}>
              <Image
                source={require('../../../Assets/CARDS/itunes.png')}
                style={styles.image}
              />
              <MyText style={{marginTop: 8, fontSize: 12}}>
                Upload all ypur{' '}
                <Text style={{fontWeight: '700', fontFamily: 'Nunito-Regular'}}>
                  ITUNES
                </Text>{' '}
                cards one by one
              </MyText>
              <MyText style={{fontSize: 12}}>
                then click start Trade to process
              </MyText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 10,
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

                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    flexDirection: 'row',
                    marginTop: 'auto',
                    justifyContent: 'space-between',
                    padding: 5,
                  }}>
                  <View>
                    <MyText
                      style={{color: '#fff', fontWeight: '400', fontSize: 12}}>
                      Itunes
                    </MyText>
                    <MyText style={{color: '#fff', fontSize: 8}}>
                      $800 (264,000)
                    </MyText>
                  </View>

                  <View>
                    <MyText
                      style={{color: '#fff', fontWeight: '400', fontSize: 12}}>
                      Physical
                    </MyText>
                    <MyText
                      style={{
                        color: '#fff',
                        fontSize: 8,
                        alignSelf: 'flex-end',
                      }}>
                      360/$
                    </MyText>
                  </View>
                </View>
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

                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    flexDirection: 'row',
                    marginTop: 'auto',
                    justifyContent: 'space-between',
                    padding: 5,
                  }}>
                  <View>
                    <MyText
                      style={{color: '#fff', fontWeight: '400', fontSize: 12}}>
                      Itunes
                    </MyText>
                    <MyText style={{color: '#fff', fontSize: 8}}>
                      $800 (264,000)
                    </MyText>
                  </View>

                  <View>
                    <MyText
                      style={{color: '#fff', fontWeight: '400', fontSize: 12}}>
                      Physical
                    </MyText>
                    <MyText
                      style={{
                        color: '#fff',
                        fontSize: 8,
                        alignSelf: 'flex-end',
                      }}>
                      360/$
                    </MyText>
                  </View>
                </View>
              </ImageBackground>
            </View>

            {/* <View style={{flexDirection:"row" , backgroundColor:'pink'}}> */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UploadGiftCard');
              }}
              style={[
                styles.cardImage,
                {
                  backgroundColor: '#1bb76d',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                },
              ]}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MyText
                  style={{
                    color: '#1bb76d',
                    marginTop: -6,
                    fontSize: 45,
                    fontWeight: '400',
                  }}>
                  +
                </MyText>
              </View>
              <MyText style={{color: '#fff', marginTop: 5}}>Upload Card</MyText>
            </TouchableOpacity>
            {/* </View> */}
            <View
              style={{
                marginTop: 140,
                paddingTop: 5,
                borderTopWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
              }}>
              <MyText style={{fontSize: 12, color: '#333'}}>
                Total Card Value: $1000
              </MyText>
              <MyText style={{fontSize: 12, color: '#333'}}>
                Transaction Value: N330,000
              </MyText>

              <TouchableOpacity
                style={{marginTop: 10}}
                onPress={() => {
                  navigation.navigate('TradeSuccessfull');
                }}>
                <MyText
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#1bb76d',
                    width: '100%',
                    textAlign: 'center',
                    padding: 10,
                    color: '#fff',
                    borderRadius: 4,
                    fontSize: 13,
                  }}>
                  START TRADE
                </MyText>
              </TouchableOpacity>
            </View>
            <View style={{height: 50}}></View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <View style={{position: 'absolute', width: width, bottom: 1}}>
        {/* <Navbar navigation={navigation} activePage={'home'} backgroundColor={undefined}/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  image: {
    width: 40,
    height: 40,
    //marginVertical: 20
  },
  whiteCardBg: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: width,
    paddingHorizontal: 25,
    paddingVertical: 15,
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
    width: 150,
    height: 110,
    marginTop: 10,
    backgroundColor: '#dfe2f5',
  },
  Heading: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 15,
    color: '#343434',
  },
  TextInputStyle: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#949494',
    paddingLeft: 10,
    color: '#000',
  },
  GreenButton: {
    // alignSelf:'center',
    // backgroundColor:'#1bb76d',
    // width:'100%'
    borderWidth: 1,
    borderColor: '#1bb76d',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 15,
    fontWeight: '700',
    color: '#fafafa',
    backgroundColor: '#1bb76d',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 50},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    //marginTop: 20,
    //marginBottom: 10
  },
  BottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
export default ItunesGiftCardScreen;

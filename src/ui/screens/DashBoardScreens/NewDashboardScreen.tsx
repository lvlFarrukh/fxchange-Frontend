import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../../components/ModeratePageCard/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';

const {width, height} = Dimensions.get('window');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const DashboardScreen = ({navigation}) => {
  return (
    <View
      style={{
        height: height ,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d',
      }}>
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <StatusBar backgroundColor="#1bb76d" />
        {/* <View style={styles.header}>
        <MyText style={styles.headerHeading}>Trades</MyText>
      </View> */}
        <View
          style={{height: height, width: width, backgroundColor: '#1bb76d'}}>
         
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
          <View
            style={{
              alignSelf: 'center',
            //   marginBottom: 20,
              width: width,
              height: height - 150,
              backgroundColor: '#f9f9f9',
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              position: 'absolute',
              zIndex: 1,
              top: 130,
            }}>
            <ScrollView
              style={{
                paddingTop: hp(4),
                paddingHorizontal: wp(7),
                height: '100%',
              }}>
                  
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                  }}>
                      <View style={{
                          backgroundColor: '#1bb76d',
                          flexDirection: 'column',
                          width: wp(26),
                          height: wp(24),
                          borderRadius: 15,
                            justifyContent: 'center',
                            
                        
                      }}>
                          <Image style={{
                              height: wp(10),
                              width: wp(10),
                              alignSelf: 'center'
                          }} source={require('../../../Assets/ICONS/giftcard-edit.png')}/>
                          <Text style={{
                              fontSize: RFValue(13),
                              alignSelf: 'center',
                                color: '#ffffff',
                                marginTop: hp(1)

                          }}>Sell Giftcard</Text>
                      </View>

                      <View style={{
                          backgroundColor: '#ffffff',
                          flexDirection: 'column',
                          width: wp(26),
                          height: wp(24),
                          borderRadius: 15,
                          justifyContent: 'center'
                        
                      }}>
                          <Image style={{
                              height: wp(10),
                              width: wp(10),
                              alignSelf: 'center'
                          }} source={require('../../../Assets/ICONS/Bitcoin-green.png')}/>
                          <Text style={{
                              fontSize: RFValue(13),
                              alignSelf: 'center',
                                color: '#636363',
                                marginTop: hp(1)
                          }}>Sell Bitcoin</Text>
                      </View>

                      <View style={{
                          backgroundColor: '#ffffff',
                          flexDirection: 'column',
                          width: wp(26),
                          height: wp(24),
                          borderRadius: 15,
                            justifyContent: 'center'
                        
                      }}>
                          <Image style={{
                              height: wp(10),
                              width: wp(10),
                              alignSelf: 'center'
                          }} source={require('../../../Assets/ICONS/airtime.png')}/>
                          <Text style={{
                              fontSize: RFValue(13),
                              alignSelf: 'center',
                                color: '#636363',
                                marginTop: hp(1)
                          }}>Airtime/Data</Text>
                      </View>

                  </View>


              </ScrollView>
              <Navbar navigation={navigation} activePage={'home'} backgroundColor={undefined}/>

          </View>

        </View>

      </SafeAreaView>
    </View>
  );
};

export default DashboardScreen;

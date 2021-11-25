import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Slider from 'react-native-hook-image-slider';

import React, { Fragment, useContext, useEffect, useMemo, useState } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';

const { width, height } = Dimensions.get('window');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const DashboardScreen = ({ navigation }) => {
  return (
    <View
      style={{
        height: height + StatusBar.currentHeight,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d',
      }}>
      <SafeAreaView
        style={{
          height: height + StatusBar.currentHeight,
          width: width,
          flex: 1,
        }}>
        <StatusBar backgroundColor="#1bb76d" />
        {/* <View style={styles.header}>
        <MyText style={styles.headerHeading}>Trades</MyText>
      </View> */}
        <View
          style={{ height: height + StatusBar.currentHeight, width: width, backgroundColor: '#1bb76d' }}>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: 10,
              marginTop: 5,
            }}>
            <MyText style={{color: '#fff', fontSize: 12.5, marginRight: 10}}>
              Hi, Amanda
            </MyText>
          </View> */}
          <View style={{ marginLeft: 20, marginTop: hp(2) }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <MyText style={{ fontSize: 10, color: '#fff' }}>
                Wallet Balance
              </MyText>
              <MyText
                style={{
                  color: '#fff',
                  fontSize: RFValue(15),
                  marginRight: wp(4),
                }}>
                Hi, Amanda
              </MyText>
            </View>

            <MyText style={{ fontSize: 30, color: '#fff' }}>N50,000</MyText>
            <MyText></MyText>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('WithDrawScreenSix');
                }}>
                <MyText style={{ fontSize: 10, color: '#fff', marginBottom: 3 }}>
                  WITHDRAW FUNDS
                </MyText>
              </TouchableOpacity>
              <MyText style={{ fontSize: 10, color: '#fff', marginBottom: 3 }}>
                {'     '}|{'       '}
              </MyText>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('TransactionHistoryScreen');
                }}>
                <MyText style={{ fontSize: 10, color: '#fff', marginBottom: 3 }}>
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
              height: height > 600 ? height : height - 150,
              backgroundColor: '#f9f9f9',
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              position: 'absolute',
              zIndex: 1,
              top: 130,
              paddingTop: 5
            }}>
            <ScrollView
              style={{
                paddingTop: hp(4),
                paddingHorizontal: wp(7),
                height: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    backgroundColor: '#1bb76d',
                    flexDirection: 'column',
                    width: wp(26),
                    height: wp(24),
                    borderRadius: 15,
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: wp(10),
                      width: wp(10),
                      alignSelf: 'center',
                    }}
                    source={require('../../../Assets/ICONS/giftcard-edit.png')}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      alignSelf: 'center',
                      color: '#ffffff',
                      marginTop: hp(1),
                    }}>
                    Sell Giftcard
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: '#ffffff',
                    flexDirection: 'column',
                    width: wp(26),
                    height: wp(24),
                    borderRadius: 15,
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: wp(10),
                      width: wp(10),
                      alignSelf: 'center',
                    }}
                    source={require('../../../Assets/ICONS/Bitcoin-green.png')}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      alignSelf: 'center',
                      color: '#636363',
                      marginTop: hp(1),
                    }}>
                    Sell Bitcoin
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: '#ffffff',
                    flexDirection: 'column',
                    width: wp(26),
                    height: wp(24),
                    borderRadius: 15,
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: wp(10),
                      width: wp(10),
                      alignSelf: 'center',
                    }}
                    source={require('../../../Assets/ICONS/airtime.png')}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      alignSelf: 'center',
                      color: '#636363',
                      marginTop: hp(1),
                    }}>
                    Airtime/Data
                  </Text>
                </View>
              </View>

              <MyText
                style={{
                  fontSize: RFValue(14),
                  marginTop: hp(3),
                  marginBottom: hp(2),
                  fontWeight: '600',
                  color: '#343434',
                }}>
                Top Rates
              </MyText>

              <View
                style={{
                  borderWidth: 1.5,
                  borderColor: '#f1f1f1',
                  borderRadius: 10,
                  backgroundColor: '#ffffff',
                  paddingVertical: hp(2.5),

                }}>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.5,
                    borderColor: '#f1f1f1',
                    paddingHorizontal: wp(4.5),
                    paddingBottom: 2
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{ height: wp(8), width: wp(8) }}
                      source={require('../../../Assets/CARDS/itunes.png')}
                    />
                    <Text
                      style={{
                        color: '#494949',
                        fontSize: RFValue(13),
                        marginTop: hp(0.5),
                        marginLeft: wp(2.5),
                      }}>
                      Itunes
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',

                    }}>
                    <Text style={{ color: '#494949', fontSize: RFValue(13), marginTop: hp(0.5), marginRight: wp(5) }}>
                      N33,000
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#e1e1e1',
                        height: wp(6),
                        width: wp(6),
                        borderRadius: 20,
                        justifyContent: 'center',
                        marginTop: hp(0.2)

                      }}>
                      <Image
                        style={{
                          height: wp(6),
                          alignSelf: 'center',
                          width: wp(4),
                          resizeMode: 'contain',
                        }}
                        source={require('../../../Assets/ICONS/arrow=black.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.5,
                    borderColor: '#f1f1f1',
                    paddingHorizontal: wp(4.5),
                    paddingBottom: hp(0.5),
                    paddingTop: hp(0.8),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{ height: wp(8), width: wp(8) }}
                      source={require('../../../Assets/CARDS/amazon.png')}
                    />
                    <Text
                      style={{
                        color: '#494949',
                        fontSize: RFValue(13),
                        marginTop: hp(0.5),
                        marginLeft: wp(2.5),
                      }}>
                      Amazon
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',

                    }}>
                    <Text style={{ color: '#494949', fontSize: RFValue(13), marginTop: hp(0.5), marginRight: wp(5) }}>
                      N33,000
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#e1e1e1',
                        height: wp(6),
                        width: wp(6),
                        borderRadius: 20,
                        justifyContent: 'center',
                        marginTop: hp(0.2)

                      }}>
                      <Image
                        style={{
                          height: wp(6),
                          alignSelf: 'center',
                          width: wp(4),
                          resizeMode: 'contain',
                        }}
                        source={require('../../../Assets/ICONS/arrow=black.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.5,
                    borderColor: '#f1f1f1',
                    paddingHorizontal: wp(4.5),
                    paddingBottom: hp(0.5),
                    paddingTop: hp(0.8),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{ height: wp(8), width: wp(8) }}
                      source={require('../../../Assets/CARDS/steam.png')}
                    />
                    <Text
                      style={{
                        color: '#494949',
                        fontSize: RFValue(13),
                        marginTop: hp(0.5),
                        marginLeft: wp(2.5),
                      }}>
                      Stream
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',

                    }}>
                    <Text style={{ color: '#494949', fontSize: RFValue(13), marginTop: hp(0.5), marginRight: wp(5) }}>
                      N33,000
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#e1e1e1',
                        height: wp(6),
                        width: wp(6),
                        borderRadius: 20,
                        justifyContent: 'center',
                        marginTop: hp(0.2)

                      }}>
                      <Image
                        style={{
                          height: wp(6),
                          alignSelf: 'center',
                          width: wp(4),
                          resizeMode: 'contain',
                        }}
                        source={require('../../../Assets/ICONS/arrow=black.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>


                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // borderBottomWidth: 0.5,
                    // borderColor: '#f1f1f1',
                    paddingHorizontal: wp(4.5),
                    // paddingBottom: hp(0.5),
                    paddingTop: hp(0.8),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{ height: wp(8), width: wp(8) }}
                      source={require('../../../Assets/CARDS/Googleplay.png')}
                    />
                    <Text
                      style={{
                        color: '#494949',
                        fontSize: RFValue(13),
                        marginTop: hp(0.5),
                        marginLeft: wp(2.5),
                      }}>
                      Google Play
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',

                    }}>
                    <Text style={{ color: '#494949', fontSize: RFValue(13), marginTop: hp(0.5), marginRight: wp(5) }}>
                      N33,000
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#e1e1e1',
                        height: wp(6),
                        width: wp(6),
                        borderRadius: 20,
                        justifyContent: 'center',
                        marginTop: hp(0.2)

                      }}>
                      <Image
                        style={{
                          height: wp(6),
                          alignSelf: 'center',
                          width: wp(4),
                          resizeMode: 'contain',
                        }}
                        source={require('../../../Assets/ICONS/arrow=black.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

              </View>


              <MyText
                style={{
                  marginTop: hp(3),
                  fontWeight: '600',
                  fontSize: RFValue(14),
                  color: '#343434',
                }}>
                News & Updates
              </MyText>

              <View
                style={{
                  marginTop: 20,
                  // marginHorizontal: 20,
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

              <View style={{ height: 50 }}></View>
            </ScrollView>
            <Navbar
              navigation={navigation}
              activePage={'home'}
              backgroundColor={undefined}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DashboardScreen;

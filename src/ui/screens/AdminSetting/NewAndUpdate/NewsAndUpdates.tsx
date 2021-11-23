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
import Header from '../../../components/ModeratePageCard/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyText from '../../../components/DefaultTextComponent/MyText';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const NewsAndUpdates = ({navigation}) => {
  return (
    <View
      style={{
        height: height,
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
        <StatusBar backgroundColor="#343434" />
        <View
          style={{height: height, width: width, backgroundColor: '#343434'}}>
          <Header
            // arrowIconStyle={{display: 'none'}}
            style={{marginTop: 0, marginLeft: 10, backgroundColor: '#343434'}}
            navigation={navigation}
            Heading={'News & Updates'}
          />

          <View
            style={{
              alignSelf: 'center',
              marginBottom: 20,
              width: width,
              height: height - 100,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              position: 'absolute',
              zIndex: 1,
              top: 50,
              paddingTop: hp(1)
            }}>
            <ScrollView
              style={{
                paddingTop: hp(1),
                paddingHorizontal: wp(7),
                height: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1.5,
                  borderColor: '#f1f1f1',
                  paddingBottom: hp(1),
                }}>
                <Image
                  style={{height: wp(5), width: wp(5)}}
                  source={require('../../../../Assets/ICONS/info_icon.png')}
                />
                <MyText style={{fontSize: RFValue(11), marginLeft: 6}}>
                  Image dimensions:{' '}
                </MyText>
                <MyText style={{fontSize: RFValue(11), fontWeight: 'bold'}}>
                  445 x 195
                </MyText>
              </View>

              {/* slide 1 */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp(3),
                }}>
                <MyText
                  style={{
                    fontSize: RFValue(17),
                    fontWeight: '500',
                    marginLeft: wp(8),
                  }}>
                  Slide 1
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(12),
                    color: '#b00002',
                    marginTop: hp(0.5),
                  }}>
                  Remove
                </MyText>
              </View>

              <View
                style={{
                  borderWidth: 1.5,
                  borderColor: '#f1f1f1',
                  borderRadius: 5,
                  marginTop: hp(1.5),
                }}>
                <View
                  style={{
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                    paddingVertical: hp(2),
                    paddingLeft: wp(8),
                  }}>
                  <MyText style={{fontSize: RFValue(12)}}>
                    https://www.fixlancer.com
                  </MyText>
                </View>

                <View
                  style={{
                    paddingVertical: hp(3),
                    paddingLeft: wp(8),
                  }}>
                  <ImageBackground
                    style={{
                      height: hp(12),
                      width: wp(50),
                    }}
                    source={require('../../../../Assets/IMG_3151.jpg')}>
                    <Image
                      style={{
                        width: wp(5),
                        height: wp(5),
                        position: 'absolute',
                        right: -wp(5.8),
                        top: -wp(3.2),
                      }}
                      source={require('../../../../Assets/ICONS/close.png')}
                    />
                  </ImageBackground>
                </View>
              </View>
              {/* end slide 1 */}

              {/* slide 2 */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp(3),
                }}>
                <MyText
                  style={{
                    fontSize: RFValue(17),
                    fontWeight: '500',
                    marginLeft: wp(8),
                  }}>
                  Slide 2
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(12),
                    color: '#b00002',
                    marginTop: hp(0.5),
                  }}>
                  Remove
                </MyText>
              </View>

              <View
                style={{
                  borderWidth: 1.5,
                  borderColor: '#f1f1f1',
                  borderRadius: 5,
                  marginTop: hp(1.5),
                }}>
                <View
                  style={{
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                    paddingVertical: hp(2),
                    paddingLeft: wp(8),
                  }}>
                  <MyText style={{fontSize: RFValue(12)}}>URL</MyText>
                </View>

                <View
                  style={{
                    paddingVertical: hp(3),
                    paddingLeft: wp(8),
                  }}>
                  <TouchableOpacity
                    style={{
                      width: hp(9),
                      height: hp(9),
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#f1f1f1',
                      padding: 8,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      // navigation.navigate('AddCard');
                    }}>
                    <MyText
                      style={{
                        fontSize: height > 600 ? RFValue(30) : RFValue(20),
                        alignSelf: 'center',
                        marginTop: -10,
                        marginBottom: height > 600 ? 0: 5
                      }}>
                      +
                    </MyText>
                    <MyText
                      style={{
                        fontSize: height > 600 ? RFValue(8) : RFValue(7),
                        alignSelf: 'center',
                        marginTop: -10,
                       
                      }}>
                      Upload
                    </MyText>
                    <MyText
                      style={{
                        fontSize: height > 600 ? RFValue(8) : RFValue(7),
                        alignSelf: 'center',
                        marginTop: height > 600 ? -12 : -8,
                      }}>
                      {'\n'}Image/video
                    </MyText>
                  </TouchableOpacity>
                </View>
              </View>
              {/* end slide 2 */}

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginTop: hp(2),
                  marginLeft: wp(8),
                }}>
                <Image
                  style={{
                    height: wp(6),
                    width: wp(6),
                  }}
                  source={require('../../../../Assets/ICONS/greenPlusIcon.png')}
                />
                <MyText
                  style={{
                    fontSize: RFValue(15),
                    fontWeight: 'bold',
                    marginLeft: wp(3),
                    color: '#1ab86d',
                  }}>
                  Add a Slide
                </MyText>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp(6),
                  backgroundColor: '#1bb76d',
                  marginTop: hp(6),
                  justifyContent: 'center',
                  borderRadius: 4
                }}>
                <MyText style={{textAlign: 'center', color: 'white',fontSize: RFValue(15)}}>SAVE</MyText>
              </TouchableOpacity>

              <View style={{height: 50}}></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewsAndUpdates;

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
import ModeratePageCard from '../../../components/ModeratePageCard';
import {trades} from '../../../../Assets/dumyData';
import ModeratorNavbar from '../../../components/Navbars/ModeratorNavbar';
import MyText from '../../../components/DefaultTextComponent/MyText';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SettingModal from '../Modals/SettingModal';
import Statistics from '../Modals/Statistics';
import GenerateStatement from '../Modals/GenerateStatement';
import PushNotification from '../Modals/PushNotification';
import CardModal from '../Modals/CardModal';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const AdminWithdrawalHome = ({navigation}) => {
    const [isSettingModal, setisSettingModal] = useState(false)
    const [isStatisticsModal, setisStatisticsModal] = useState(false)
    const [isGenerateStatement, setisGenerateStatement] = useState(false)
    const [isPushNotification, setisPushNotification] = useState(false)

  const handleChangePushNotification = () => {
    setisPushNotification(!isPushNotification)
  }

    const handleChangeGenerateStatement = () => {
      setisGenerateStatement(!isGenerateStatement)
    }

    const handleChangeSetting = () => {
        setisSettingModal(!isSettingModal)
    }
    
    const handleChangeStatistics = () => {
      setisStatisticsModal(!isStatisticsModal)
    }
  return (
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <StatusBar backgroundColor="#343434" />
        <View
          style={{
            height: height,
            width: width,
            backgroundColor: '#343434',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: hp(4),
            }}>
            <View
              style={{
                backgroundColor: '#022529',
                width: wp(11),
                height: wp(11),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <MyText
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontSize: RFValue(16),
                }}>
                F
              </MyText>
            </View>

            <View style={{justifyContent: 'center'}}>
              <MyText
                style={{
                  color: '#ffffff',
                  fontSize: RFValue(18),
                  marginLeft: wp(5),
                  marginBottom: 5,
                }}>
                Fxchange Admin
              </MyText>
            </View>
          </View>
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
              top: hp(15),
            }}>
            <ScrollView
              style={{
                paddingTop: hp(3),
                paddingHorizontal: wp(7),
                height: '100%',
              }}>
              <MyText style={{fontSize: RFValue(12), marginLeft: 10, color: '#858585', marginBottom: 5}}>QUICK LINKS</MyText>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('CardSetting');
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    Card Settings
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    handleChangeSetting()
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    Settings
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('NewsAndUpdates');
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    News & Updates
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity         
                activeOpacity={0.9}
                onPress={handleChangePushNotification}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    Push Notifications
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <MyText style={{fontSize: RFValue(12), marginLeft: 10, color: '#858585',marginTop: hp(5), marginBottom: 5}}>MORE</MyText>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleChangeGenerateStatement}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    Generate Statement
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleChangeStatistics}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    Site  Stats
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                //   navigation.navigate('WithdrawalsScreenFive');
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    My Account
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity         
                activeOpacity={0.9}
                onPress={() => {
                //   navigation.navigate('WithdrawalsScreenFive');
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                  }}>
                  <MyText
                    style={{color: '#343434', fontSize: RFValue(14), fontWeight: '600'}}>
                    Change Password
                  </MyText>
                  <Icon
                    name={'arrow-forward-ios'}
                    size={14}
                    color={'#000000'}
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      marginTop: 2,
                    }}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity         
                activeOpacity={0.9}
                onPress={() => {
                //   navigation.navigate('WithdrawalsScreenFive');
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F1F1F1',
                    paddingTop: 10,
                    borderColor: '#F1F1F1',
                    backgroundColor: '#d52a18',
                    height: wp(11),
                    borderRadius: 4,
                    marginTop: hp(5)
                  }}>
                  <MyText
                    style={{color: '#ffffff', fontSize: RFValue(14), fontWeight: '600'}}>
                    LOGOUT
                  </MyText>
                  
                </View>
              </TouchableOpacity>
              <View style={{height: 80}}></View>
            </ScrollView>
          </View>
        </View>
        <SettingModal isOpen={isSettingModal} handleChange={handleChangeSetting}/>
        <Statistics isOpen={isStatisticsModal} handleChange={handleChangeStatistics} action={handleChangeStatistics}/>
        <GenerateStatement isOpen={isGenerateStatement} handleChange={handleChangeGenerateStatement} />
        <PushNotification isOpen={isPushNotification} handleChange={handleChangePushNotification} />
        <CardModal isOpen={false} handleChange={undefined} data={undefined}  />
      </SafeAreaView>
    </View>
  );
};

export default AdminWithdrawalHome;

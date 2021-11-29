import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/Ionicons';
import MyText from '../../../components/DefaultTextComponent/MyText';

interface Props {
  isOpen: any;
  handleChange: any;
}

const DeclineModal: React.FC<Props> = props => {
  return (
    <Modal isVisible={props.isOpen}>
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: '#343434',
          borderRadius: 16,
          width: wp(100),
          height: hp(100),
          alignSelf: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: wp(8),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(3),
            height: hp(6),
          }}>
          <TouchableOpacity onPress={props.handleChange}>
            <Image
              style={{width: wp(5), height: wp(5)}}
              source={require('../../../../Assets/ICONS/cross.png')}
            />
          </TouchableOpacity>
          <MyText
            style={{
              color: '#ffffff',
              fontSize: RFValue(18),
            }}>
            1 of 4
          </MyText>
          <View></View>
        </View>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'black',
              // paddingTop: hp(10),
              borderTopEndRadius: 40,
              borderTopStartRadius: 40,
              height: hp(105),
            }}>
            <View
              style={{
                marginTop: hp(10),
                backgroundColor: '#ffffff',
                height: hp(60),
                paddingTop: hp(10),
                // flexDirection: 'row',
                // justifyContent: 'space-between',
              }}>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(4),
                }}>
                <View
                  style={{
                    backgroundColor: '#ffffff',
                    width: wp(43),
                    height: wp(26),
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderRadius: 7,
                    paddingTop: hp(2.5),
                    paddingLeft: wp(4),
                  }}>
                  <MyText style={{fontSize: RFValue(10)}}>
                    Post what you need done {'\n'}
                    and receive custom offers {'\n'}
                    in minutes
                  </MyText>

                  <TouchableOpacity
                    style={{
                      backgroundColor: '#1ac889',
                      justifyContent: 'center',
                      padding: 2,
                      width: wp(25),
                      borderRadius: 20,
                      marginTop: hp(1.5),
                    }}>
                    <MyText
                      style={{
                        fontSize: RFValue(10),
                        color: '#ffffff',
                        alignSelf: 'center',
                      }}>
                      Post job request
                    </MyText>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    backgroundColor: '#ffffff',
                    width: wp(43),
                    height: wp(26),
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderRadius: 7,
                    paddingTop: hp(2.5),
                    paddingLeft: wp(4),
                  }}>
                  <MyText style={{fontSize: RFValue(10)}}>
                    Bring in the skill and {'\n'}
                    we will make earnings {'\n'}
                    much easier
                  </MyText>

                  <TouchableOpacity
                    style={{
                      backgroundColor: '#e17934',
                      justifyContent: 'center',
                      padding: 2,
                      width: wp(25),
                      borderRadius: 20,
                      marginTop: hp(1.5),
                    }}>
                    <MyText
                      style={{
                        fontSize: RFValue(10),
                        color: '#ffffff',
                        alignSelf: 'center',
                      }}>
                      Become a seller
                    </MyText>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#1c1e2b',
                  height: hp(15),
                  marginTop: hp(2),
                  justifyContent: 'center'
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // paddingTop: hp(2.5),
                    paddingHorizontal: wp(5),
                    height: wp(19),
                  }}>

                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      height: wp(19),
                      width: wp(28),
                      borderRadius: 3,
                      paddingTop: hp(1.5),
                      paddingLeft: hp(2),
                    }}>
                    <Image
                      style={{
                        height: wp(6),
                        width: wp(6),
                        marginBottom: hp(0.8),
                      }}
                      source={require('../../../../Assets/ICONS/modalIcon1.png')}
                    />
                    <MyText style={{fontSize: RFValue(10)}}>Ongoing Sales</MyText>
                    <MyText style={{fontSize: RFValue(10)}}>10</MyText>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      height: wp(19),
                      width: wp(28),
                      borderRadius: 3,
                      paddingTop: hp(1.5),
                      paddingLeft: hp(2),
                    }}>
                    <Image
                      style={{
                        height: wp(6),
                        width: wp(6),
                        marginBottom: hp(0.8),
                      }}
                      source={require('../../../../Assets/ICONS/modalIcon2.png')}
                    />
                    <MyText style={{fontSize: RFValue(10)}}>Balance</MyText>
                    <MyText style={{fontSize: RFValue(10)}}>2000</MyText>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      height: wp(19),
                      width: wp(28),
                      borderRadius: 3,
                      paddingTop: hp(1.5),
                      paddingLeft: hp(2),
                    }}>
                    <Image
                      style={{
                        height: wp(6),
                        width: wp(6),
                        marginBottom: hp(0.8),
                      }}
                      source={require('../../../../Assets/ICONS/modalIcon3.png')}
                    />
                    <MyText style={{fontSize: RFValue(10)}}>Ongoing Order</MyText>
                    <MyText style={{fontSize: RFValue(10)}}>5</MyText>
                  </View>

                </View>
              </View>
            </View>

            <View style={{marginTop: 5}}>
              <View
                style={{
                  backgroundColor: '#0a8a40',
                  paddingTop: hp(3),
                  paddingHorizontal: wp(6),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText style={{color: '#ffffff', fontSize: RFValue(18)}}>
                  ITUNES - $100
                </MyText>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  Ecode
                </MyText>
              </View>

              <View
                style={{
                  backgroundColor: '#0a8a40',
                  paddingTop: hp(0.5),
                  paddingHorizontal: wp(6),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  Card code: 4545474537445473
                </MyText>
              </View>

              <View
                style={{
                  backgroundColor: '#0a8a40',
                  paddingBottom: hp(3),
                  paddingHorizontal: wp(6),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  Trade Id: #FG455866890
                </MyText>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  2/4
                </MyText>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#ffffff',
                height: hp(10),
                justifyContent: 'center',
                marginTop: hp(8),
              }}>
             <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginTop: 25,
                  // marginBottom: 22,
                  paddingLeft: 18,
                  paddingRight: 18,
                }}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    {
                      backgroundColor: '#f2f2f2',
                      borderRadius: 20,
                      padding: 4,
                      width: wp(27),
                      height: hp(5),
                      justifyContent: 'center'
                    },
                    // Style.btnShadow,
                  ]}>
                  <MyText
                    style={[{color: 'red', fontSize: 11, alignSelf: 'center'}]}
                    onPress={() => {
                      // toggleDelineModal();
                    }}>
                    DECLINE
                  </MyText>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('SwitchGiftCard');
                  }}
                  activeOpacity={0.9}
                  style={[
                    {
                      backgroundColor: '#d65d0e',
                      borderRadius: 20,
                      padding: 4,
                      width: wp(27),
                      height: hp(5),
                      justifyContent: 'center'
                    },
                    // Style.btnShadow,
                  ]}>
                  <MyText
                    style={[
                      {color: 'white', fontSize: 11, alignSelf: 'center'},
                    ]}>
                    SWITCH
                  </MyText>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    {
                      backgroundColor: '#1bb76d',
                      borderRadius: 20,
                      padding: 4,
                      width: wp(27),
                      height: hp(5),
                      justifyContent: 'center'
                    },
                    // Style.btnShadow,
                  ]}>
                  <MyText
                    onPress={() => {
                      // toggleModal();
                    }}
                    style={[
                      {color: 'white', fontSize: 11, alignSelf: 'center'},
                    ]}>
                    ACCEPT
                  </MyText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DeclineModal;

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
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import AddRate from '../Modals/AddRate';
import EditRate from '../Modals/EditRate';
import WarningModal from '../Modals/WarningModal';
import MyText from '../../../components/DefaultTextComponent/MyText';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const AddCard = ({navigation}) => {
  const [isAddRate, setisAddRate] = useState(false);
  const [isEditRate, setisEditRate] = useState(false);
  const [rateData, setrateData] = useState([]);
  const [isDeclineModal, setisDeclineModal] = useState(false);

  const declineModalHandleChange = () => {
    setisDeclineModal(!isDeclineModal);
  };

  const handleChangeAddRate = () => {
    setisAddRate(!isAddRate);
  };

  const handleChangeEditRate = data => {
    setrateData(data);
    setisEditRate(!isEditRate);
  };
  const cardNameDropDown: any = [
    'ITUNES',
    'STEAM',
    'GOOGLE PLAY',
    'SEPHORA',
    'AMERICAN EXPRESS',
    'VANILLA',
    'WALMART',
    'VISA',
    'EBAY',
    'AMAZON',
    'NORDSTROM',
    'NIKE',
    'FOOTLOCKER',
  ];
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
        {/* <View style={styles.header}>
        <MyText style={styles.headerHeading}>Trades</MyText>
      </View> */}
        <View
          style={{height: height, width: width, backgroundColor: '#343434'}}>
          <Header
            style={{marginTop: 0, marginLeft: 10, backgroundColor: '#343434'}}
            navigation={navigation}
            Heading={'Add Card'}
          />

          <View
            style={{
              alignSelf: 'center',
              marginBottom: 20,
              width: width,
              height: height,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              position: 'absolute',
              zIndex: 1,
              top: 50,
              paddingTop: 5,
            }}>
            <ScrollView
              style={{
                paddingTop: hp(2),
                paddingHorizontal: wp(7),
                height: '100%',
              }}>
              <SelectDropdown
                data={cardNameDropDown}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                renderDropdownIcon={() => {
                  return (
                    <Image
                      source={require('../../../../Assets/ICONS/dropdwo.png')}
                      style={{width: 10, height: 5}}
                    />
                  );
                }}
                defaultButtonText={'Card Name'}
                buttonTextStyle={{
                  textAlign: 'left',
                  fontSize: RFValue(12),
                  fontFamily: 'Nunito-Regular',
                }}
                rowStyle={{backgroundColor: 'white', width: '100%'}}
                rowTextStyle={{
                  fontSize: RFValue(12),
                  fontFamily: 'Nunito-Regular',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  borderWidth: 1.5,
                  borderColor: '#f1f1f1',
                  borderRadius: 4,
                  height: hp(7),
                  width: '100%',
                  paddingRight: 10,
                  paddingVertical: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
                dropdownStyle={{
                  borderRadius: 10,
                }}
              />

              <MyText
                style={{
                  margin: 10,
                  fontSize: RFValue(17),
                  paddingLeft: wp(3),
                  paddingTop: hp(1),
                }}>
                Rate
              </MyText>

              <View
                style={{
                  borderRadius: 8,
                  borderWidth: 1.5,
                  borderColor: '#f1f1f1',
                  marginTop: -5,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    handleChangeEditRate({
                      country: 'US',
                      cardType: 'Physical',
                      cardValue: '50',
                      startingCode: '',
                      rate: '330',
                    })
                  }
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <MyText
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    50
                  </MyText>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <MyText
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 330/$
                    </MyText>
                    <MyText
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </MyText>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    handleChangeEditRate({
                      country: 'US',
                      cardType: 'Physical',
                      cardValue: '50',
                      startingCode: '3779',
                      rate: '330',
                    })
                  }
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <MyText
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    100
                  </MyText>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <MyText
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 3779 | 330/$
                    </MyText>
                    <MyText
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </MyText>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    handleChangeEditRate({
                      country: 'US',
                      cardType: 'Physical',
                      cardValue: '100-199',
                      startingCode: '',
                      rate: '330',
                    })
                  }
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <MyText
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    100 - 199
                  </MyText>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <MyText
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 300/$
                    </MyText>
                    <MyText
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </MyText>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    handleChangeEditRate({
                      country: 'US',
                      cardType: 'Physical',
                      cardValue: '100-199',
                      startingCode: '',
                      rate: '300',
                    })
                  }
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <MyText
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    100 - 199
                  </MyText>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <MyText
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 300/$
                    </MyText>
                    <MyText
                      style={{
                        fontSize: RFValue(12),
                        marginLeft: wp(8),
                        marginTop: -6,
                        color: '#d22b18',
                      }}>
                      DISABLED
                    </MyText>
                    <MyText
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </MyText>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={handleChangeAddRate}
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginLeft: wp(5.5),
                }}>
                <Image
                  style={{
                    height: wp(6),
                    width: wp(6),
                  }}
                  source={require('../../../../Assets/ICONS/kindpng_1121065.png')}
                />

                <MyText
                  style={{
                    fontSize: RFValue(15),
                    marginLeft: wp(3),
                    color: '#1bb76d',
                  }}>
                  Add a Rate
                </MyText>
              </TouchableOpacity>

              <View
                style={{
                  marginTop: hp(5),
                }}>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    marginLeft: wp(5.5),
                  }}>
                  Card Icon
                </MyText>

                <View
                  style={{
                    borderWidth: 1.5,
                    borderColor: '#f1f1f1',
                    marginTop: hp(2.5),
                    paddingVertical: wp(3),
                    paddingHorizontal: wp(5.5),
                    borderRadius: 4,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      borderWidth: 1.5,
                      borderColor: '#f1f1f1',
                      width: wp(22),
                      height: wp(20),
                      borderRadius: 5,
                      padding: wp(4),
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      source={require('../../../../Assets/CARDS/amazon.png')}
                    />
                  </View>

                  <TouchableOpacity
                    style={{
                      width: wp(22),
                      height: wp(7),
                      borderWidth: 1.5,
                      borderColor: '#f1f1f1',
                      borderRadius: 4,
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <MyText
                      style={{
                        alignSelf: 'center',
                        fontSize: RFValue(12),
                        color: '#1bb76d',
                      }}>
                      + Upload
                    </MyText>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={{
                  margin: 5,
                  backgroundColor: '#1bb76d',
                  borderRadius: 4,
                  justifyContent: 'center',
                  height: hp(6),
                  marginTop: hp(10),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <MyText
                  style={{
                    color: '#ffffff',
                    alignSelf: 'center',
                  }}>
                  SAVE
                </MyText>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  margin: 5,
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  justifyContent: 'center',
                  height: hp(6),
                  marginTop: hp(1),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <MyText
                  style={{
                    color: 'black',
                    alignSelf: 'center',
                  }}>
                  DISABLE
                </MyText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={declineModalHandleChange}
                style={{
                  margin: 5,
                  marginBottom: 50,
                  backgroundColor: '#d52a18',
                  borderRadius: 4,
                  justifyContent: 'center',
                  height: hp(6),
                  marginTop: hp(1),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <MyText
                  style={{
                    color: '#ffffff',
                    alignSelf: 'center',
                  }}>
                  DELETE
                </MyText>
              </TouchableOpacity>

              <View style={{height: 110}}></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      <AddRate isOpen={isAddRate} handleChange={handleChangeAddRate} />
      <EditRate
        isOpen={isEditRate}
        handleChange={handleChangeEditRate}
        data={rateData}
      />
      <WarningModal
        type={'DELETE'}
        text={'Are you sure you want to\ndelete this card?'}
        isOpen={isDeclineModal}
        onPressAction={declineModalHandleChange}
        handleChange={declineModalHandleChange}
      />
    </View>
  );
};

export default AddCard;

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

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const AddCard = ({navigation}) => {
    const [isAddRate, setisAddRate] = useState(false)

    const handleChangeAddRate = () => {
        setisAddRate(!isAddRate)
    }
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
              height: height - 100,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              position: 'absolute',
              zIndex: 1,
              top: 50,
              paddingTop: 5
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
              />

              <Text
                style={{
                  margin: 10,
                  fontSize: RFValue(17),
                  paddingLeft: wp(3),
                  paddingTop: hp(1),
                }}>
                Rate
              </Text>

              <View
                style={{
                  borderRadius: 8,
                  borderWidth: 1.5,
                  borderColor: '#f1f1f1',
                  marginTop: -5,
                }}>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    50
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 330/$
                    </Text>
                    <Text
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    100
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 3779 | 330/$
                    </Text>
                    <Text
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    100 - 199
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 300/$
                    </Text>
                    <Text
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    paddingHorizontal: wp(5.5),
                    paddingVertical: hp(1),
                    borderBottomWidth: 1.5,
                    borderColor: '#f1f1f1',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontWeight: '500',
                    }}>
                    100 - 199
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        color: '#676767',
                      }}>
                      US | Physical | 330/$
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        marginLeft: wp(8),
                        marginTop: -6,
                        color: '#d22b18',
                      }}>
                      DISABLED
                    </Text>
                    <Text
                      style={{
                        color: '#353535',
                        fontSize: RFValue(13),
                        marginTop: -6,
                      }}>
                      Edit
                    </Text>
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
                  source={require('../../../../Assets/ICONS/uploadIconGray.png')}
                />

                <Text
                  style={{
                    fontSize: RFValue(15),
                    marginLeft: wp(3),
                    color: "#1cb86e"
                  }}>
                  Add a Rate
                </Text>
              </TouchableOpacity>

              <View style={{
                  marginTop: hp(5)
              }}>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    marginLeft: wp(5.5),
                    
                  }}>
                  Card Icon
                </Text>

                <View style={{
                    borderWidth: 1.5,
                    borderColor: '#f1f1f1',
                    marginTop: hp(2.5),
                    paddingVertical: wp(3),
                    paddingHorizontal: wp(5.5),
                    borderRadius: 4,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        borderWidth: 1.5,
                        borderColor: '#f1f1f1',
                        width: wp(22),
                        height: wp(20),
                        borderRadius: 5,
                        padding: wp(4),
                        
                    }}>
                        <Image 
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            source={require('../../../../Assets/CARDS/amazon.png')}
                        />

                    </View>

                    <TouchableOpacity style={{
                        width: wp(22),
                        height: wp(7),
                        borderWidth: 1.5,
                        borderColor: '#f1f1f1',
                        borderRadius: 4,
                        marginLeft: 10,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: RFValue(12),
                            color: "#1ab86e"
                        }}>+ Upload</Text>
                    </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={{
                  backgroundColor: '#1bb76d',
                  borderRadius: 4,
                  justifyContent: 'center',
                  height: hp(6),
                  marginTop: hp(10)
              }}>
                  <Text style={{
                      color: '#ffffff',
                      alignSelf: 'center'
                  }}>SAVE</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                  backgroundColor: '#f1f1f1',
                  borderRadius: 4,
                  justifyContent: 'center',
                  height: hp(6),
                  marginTop: hp(1)
              }}>
                  <Text style={{
                      color: 'black',
                      alignSelf: 'center'
                  }}>DISABLE</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                  backgroundColor: '#d52a18',
                  borderRadius: 4,
                  justifyContent: 'center',
                  height: hp(6),
                  marginTop: hp(1)
              }}>
                  <Text style={{
                      color: '#ffffff',
                      alignSelf: 'center'
                  }}>DELETE</Text>
              </TouchableOpacity>

                  <View style={{height: 60}}></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      <AddRate isOpen={isAddRate} handleChange={handleChangeAddRate}/>
    </View>
  );
};

export default AddCard;

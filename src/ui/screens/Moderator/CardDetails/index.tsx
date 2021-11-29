import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import Header from '../../../components/ModeratePageCard/Header';
import Style from './Style';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeclineModal from '../Modals/DeclineModal';
import PendingModal from '../Modals/PendingModal';
import ComplateModal from '../Modals/ComplateModal';

const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDelineModalVisible, setdelineModalVisible] = useState(false);
  const declineReason = [
    'Already redeemed by someone else',
    'Card is not activated',
    'Card is not clear',
  ];
  const [previewImgPath, setpreviewImgPath] = useState(0);
  const [isPreviewImage, setisPreviewImage] = useState(false);
  const [isdeclineModal, setisdeclineModal] = useState(false);
  const [ispendingModal, setispendingModal] = useState(false);
  const [iscompleteModal, setiscompleteModal] = useState(false);

  const handleChangeDeclineModal = () => {
    setisdeclineModal(!isdeclineModal);
  };
  
  const handleChangeCompleteModal = () => {
    setiscompleteModal(!iscompleteModal)
  }

  const handleChangePendingModal = () => {
    setispendingModal(!ispendingModal);
  };

  const previewImage = (image: number) => {
    setpreviewImgPath(image);
    togglePreviewImgModal();
  };

  const togglePreviewImgModal = () => {
    setisPreviewImage(!isPreviewImage);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleDelineModal = () => {
    setdelineModalVisible(!isDelineModalVisible);
  };

  const navigateBack = () => {
    console.log('WORKING');
    navigation.goBack(null);
  };
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
        <StatusBar translucent backgroundColor={isdeclineModal ? "#343434" : "#1bb76d"} />
        <View style={Style.header}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginLeft: 15, paddingTop: 5}}
            onPress={() => navigateBack()}>
            <Image
              source={require('../../../../Assets/ICONS/arrow=white.png')}
              style={Style.backArrow}
            />
          </TouchableOpacity>
          <MyText style={Style.headerHeading}>ITUNES - #FGRAC23287843</MyText>
          <MyText></MyText>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Style.mainBody}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={[Style.headerButtons]}>
                <MyText style={[Style.headerButtom]}>Opened by Thomas</MyText>
              </View>

              <TouchableOpacity
                style={[Style.headerButtons, {backgroundColor: '#0c8c41'}]}
                onPress={handleChangeDeclineModal}>
                <MyText style={[Style.headerButtom, {color: '#ffffff'}]}>
                  View all Cards
                </MyText>
              </TouchableOpacity>
            </View>

            <View
              style={[
                {
                  backgroundColor: '#fff',
                  marginTop: 12,
                  borderRadius: 15,
                  paddingTop: 8,
                  paddingBottom: 12,
                  marginBottom: 40,
                  // paddingLeft: 18, paddingRight: 18,
                },
                Style.btnShadow,
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 18,
                  paddingRight: 18,
                }}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View
                    style={[
                      {
                        height: 18,
                        width: 30,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        marginLeft: -34,
                        marginTop: 7,
                      },
                    ]}>
                    <MyText
                      style={{
                        color: 'black',
                        fontSize: 10,
                        paddingLeft: 7,
                        paddingTop: 2,
                      }}>
                      1
                    </MyText>
                  </View>

                  <Image
                    source={require('../../../../Assets/CARDS/itunes.png')}
                    style={Style.titleImage}
                  />
                  <MyText
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 5,
                      alignSelf: 'center',
                      paddingBottom: 6,
                    }}>
                    Itunes
                  </MyText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: -3,
                    // position: 'relative',
                    // right: 50,
                  }}>
                  <ImageBackground
                    source={require('../../../../Assets/IMG_3151.jpg')}
                    style={{
                      width: 48,
                      height: 40,
                      // marginLeft: 10,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      // onPress={() => previewImage(1)}>
                      onPress={handleChangeDeclineModal}>
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          alignSelf: 'center',
                          alignItems: 'center',
                          // position: 'relative',
                          // left: 45,
                          // zIndex: -1,
                        }}>
                        <Image
                          source={require('../../../../Assets/ICONS/zoom.png')}
                          style={{
                            width: 12,
                            height: 12,
                            alignSelf: 'center',
                            marginTop: 4,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>

              {/* hr */}
              <View
                style={[Style.hr, {marginLeft: 18, marginRight: 18}]}></View>

              <View
                style={[
                  Style.lowerPortion,
                  {paddingLeft: 18, paddingRight: 18},
                ]}>
                <View>
                  <MyText style={[Style.smFontSize, , {color: 'gray'}]}>
                    Amount (120/5)
                  </MyText>
                  <MyText style={Style.mdFontBlackColor}>
                    ${'50 (N16,000)'}
                  </MyText>
                </View>

                <View>
                  <MyText style={[{color: 'gray', fontSize: 10}]}>
                    {'DEC 10, 2021 1:20pm'}
                  </MyText>
                  <MyText
                    style={[{textAlign: 'right', color: 'red', fontSize: 13}]}>
                    {'DECLINED'}
                  </MyText>
                </View>
              </View>

              {/* hr */}
              <View
                style={[Style.hr, {marginLeft: 18, marginRight: 18}]}></View>

              <View
                style={[
                  {
                    marginBottom: 6,
                    flexDirection: 'row',
                    paddingLeft: 18,
                    paddingRight: 18,
                  },
                ]}>
                <View>
                  <MyText
                    style={[{color: 'gray', fontSize: 10, marginBottom: 2}]}>
                    REASON FOR DECLINE
                  </MyText>
                  <MyText
                    style={[{color: 'black', fontSize: 10, marginBottom: 2}]}>
                    Card is not activated
                  </MyText>
                </View>

                <View style={[{flexDirection: 'row', marginLeft: 20}]}>
                  <ImageBackground
                    source={require('../../../../Assets/IMG_3151.jpg')}
                    style={{
                      width: 43,
                      height: 37,
                      // marginLeft: 10,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => previewImage(1)}>
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          alignSelf: 'center',
                          alignItems: 'center',
                          // position: 'relative',
                          // left: 45,
                          // zIndex: -1,
                        }}>
                        <Image
                          source={require('../../../../Assets/ICONS/zoom.png')}
                          style={{
                            width: 13,
                            height: 13,
                            alignSelf: 'center',
                            marginTop: 4,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground
                    source={require('../../../../Assets/IMG_3151.jpg')}
                    style={{
                      width: 43,
                      height: 37,
                      marginLeft: 5,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => previewImage(1)}>
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          alignSelf: 'center',
                          alignItems: 'center',
                          // position: 'relative',
                          // left: 45,
                          // zIndex: -1,
                        }}>
                        <Image
                          source={require('../../../../Assets/ICONS/zoom.png')}
                          style={{
                            width: 13,
                            height: 13,
                            alignSelf: 'center',
                            marginTop: 4,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>

              {/* hr */}
              <View style={[Style.hr]}></View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 18,
                  paddingRight: 18,
                }}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <View
                    style={[
                      {
                        height: 18,
                        width: 30,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        marginLeft: -34,
                        marginTop: 7,
                      },
                    ]}>
                    <MyText
                      style={{
                        color: 'black',
                        fontSize: 10,
                        paddingLeft: 7,
                        paddingTop: 2,
                      }}>
                      {2}
                    </MyText>
                  </View>
                  <Image
                    source={require('../../../../Assets/CARDS/itunes.png')}
                    style={Style.titleImage}
                  />
                  <MyText
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 5,
                      alignSelf: 'center',
                      paddingBottom: 6,
                    }}>
                    Itunes
                  </MyText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: -3,
                    // position: 'relative',
                    // right: 50,
                  }}>
                  <ImageBackground
                    source={require('../../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                    style={{
                      width: 48,
                      height: 40,
                      // marginLeft: 10,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      // onPress={() => previewImage(0)}
                      onPress={handleChangeDeclineModal}>
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          alignSelf: 'center',
                          alignItems: 'center',
                          // position: 'relative',
                          // left: 45,
                          // zIndex: -1,
                        }}>
                        <Image
                          source={require('../../../../Assets/ICONS/zoom.png')}
                          style={{
                            width: 12,
                            height: 12,
                            alignSelf: 'center',
                            marginTop: 4,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>

              {/* hr */}
              <View
                style={[Style.hr, {marginLeft: 18, marginRight: 18}]}></View>

              <View
                style={[
                  Style.lowerPortion,
                  {paddingLeft: 18, paddingRight: 18},
                ]}>
                <View>
                  <MyText style={[Style.smFontSize, , {color: 'gray'}]}>
                    Amount (120/5)
                  </MyText>
                  <MyText style={Style.mdFontBlackColor}>
                    ${'50 (N16,000)'}
                  </MyText>

                  <MyText
                    style={[
                      Style.smFontSize,
                      ,
                      {color: 'gray', marginTop: 10},
                    ]}>
                    Card code: 12345678946579
                  </MyText>
                </View>

                <View>
                  <MyText style={[{color: 'gray', fontSize: 10}]}>
                    {'DEC 10, 2021 1:20pm'}
                  </MyText>
                  <MyText
                    style={[{textAlign: 'right', color: 'red', fontSize: 13}]}>
                    {'IN PROGRESS'}
                  </MyText>
                </View>
              </View>

              {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 25,
                  marginBottom: 22,
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
                      width: 80,
                    },
                    Style.btnShadow,
                  ]}>
                  <MyText
                    style={[{color: 'red', fontSize: 11, alignSelf: 'center'}]}
                    onPress={() => {
                      toggleDelineModal();
                    }}>
                    DECLINE
                  </MyText>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SwitchGiftCard');
                  }}
                  activeOpacity={0.9}
                  style={[
                    {
                      backgroundColor: '#d65d0e',
                      borderRadius: 20,
                      padding: 4,
                      width: 80,
                    },
                    Style.btnShadow,
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
                      width: 80,
                    },
                    Style.btnShadow,
                  ]}>
                  <MyText
                    onPress={() => {
                      toggleModal();
                    }}
                    style={[
                      {color: 'white', fontSize: 11, alignSelf: 'center'},
                    ]}>
                    ACCEPT
                  </MyText>
                </TouchableOpacity>
              </View> */}

              {/* hr */}
              <View style={[Style.hr]}></View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 18,
                  paddingRight: 18,
                }}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <View
                    style={[
                      {
                        height: 18,
                        width: 30,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        marginLeft: -34,
                        marginTop: 7,
                      },
                    ]}>
                    <MyText
                      style={{
                        color: 'black',
                        fontSize: 10,
                        paddingLeft: 7,
                        paddingTop: 2,
                      }}>
                      {3}
                    </MyText>
                  </View>
                  <Image
                    source={require('../../../../Assets/CARDS/itunes.png')}
                    style={Style.titleImage}
                  />
                  <MyText
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 5,
                      alignSelf: 'center',
                      paddingBottom: 6,
                    }}>
                    Itunes
                  </MyText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: -3,
                    // position: 'relative',
                    // right: 50,
                  }}>
                  <ImageBackground
                    source={require('../../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                    style={{
                      width: 48,
                      height: 40,
                      // marginLeft: 10,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={handleChangeDeclineModal}>
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          alignSelf: 'center',
                          alignItems: 'center',
                          // position: 'relative',
                          // left: 45,
                          // zIndex: -1,
                        }}>
                        <Image
                          source={require('../../../../Assets/ICONS/zoom.png')}
                          style={{
                            width: 12,
                            height: 12,
                            alignSelf: 'center',
                            marginTop: 4,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>

              {/* hr */}
              <View
                style={[Style.hr, {marginLeft: 18, marginRight: 18}]}></View>

              <View
                style={[
                  Style.lowerPortion,
                  {paddingLeft: 18, paddingRight: 18},
                ]}>
                <View>
                  <MyText style={[Style.smFontSize, , {color: 'gray'}]}>
                    Amount (120/5)
                  </MyText>
                  <MyText style={Style.mdFontBlackColor}>
                    ${'50 (N16,000)'}
                  </MyText>
                </View>

                <View>
                  <MyText style={[{color: 'gray', fontSize: 10}]}>
                    {'DEC 10, 2021 1:20pm'}
                  </MyText>
                  <MyText
                    style={[
                      {textAlign: 'right', color: '#1bb76d', fontSize: 13},
                    ]}>
                    {'COMPLETED'}
                  </MyText>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Modal
        //style={{ backgroundColor:'#fafafa' , height:height/2}}
        isVisible={isModalVisible}
        //coverScreen={true}
        // swipeDirection='down'
        // onSwipeComplete={toggleModal}
        // swipeThreshold={50}
      >
        <View
          style={{
            width: width - 100,
            height: width - 125,
            borderRadius: 50,
            alignSelf: 'center',
            backgroundColor: '#1bb76d',
          }}>
          <View
            style={{
              width: width - 100,
              height: width - 145,
              marginTop: 20,
              borderRadius: 40,
              alignSelf: 'center',
              backgroundColor: 'white',
              justifyContent: 'space-between',
            }}>
            <View>
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 5,
                  fontWeight: '500',
                  color: '#1bb76d',
                }}>
                ACCEPT
              </MyText>

              {/* hr */}
              <View style={[Style.hr, {marginTop: 0}]}></View>
            </View>

            <View>
              <MyText
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Are you sure you want to
              </MyText>
              <MyText
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                accept this transaction
              </MyText>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  toggleModal();
                }}>
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '500',
                    color: '#1bb76d',
                  }}>
                  YES ACCEPT
                </MyText>
              </TouchableOpacity>
              {/* hr */}
              <View style={[Style.hr, {marginTop: 6}]}></View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{marginBottom: 8, marginTop: -4}}
                onPress={() => toggleModal()}>
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Cancel
                </MyText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        //style={{ backgroundColor:'#fafafa' , height:height/2}}
        isVisible={isDelineModalVisible}
        //coverScreen={true}
        // swipeDirection='down'
        // onSwipeComplete={toggleModal}
        // swipeThreshold={50}
      >
        <View
          style={{
            width: width - 50,
            height: width - 10,
            borderRadius: 50,
            alignSelf: 'center',
            backgroundColor: '#ef2a22',
          }}>
          <View
            style={{
              width: width - 50,
              height: width - 30,
              marginTop: 20,
              borderRadius: 40,
              alignSelf: 'center',
              backgroundColor: 'white',
              justifyContent: 'space-between',
            }}>
            <View>
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 8,
                  fontWeight: '500',
                  color: '#ef2a22',
                }}>
                DECLINE
              </MyText>

              {/* hr */}
              <View
                style={[
                  Style.hr,
                  {marginTop: 0, marginLeft: 36, marginRight: 36},
                ]}></View>
            </View>

            <View style={{flex: 1}}>
              <SelectDropdown
                data={declineReason}
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
                defaultButtonText={'Reason'}
                buttonTextStyle={{
                  textAlign: 'left',
                  fontSize: 13,
                  fontFamily: 'Nunito-Regular',
                }}
                rowStyle={{backgroundColor: 'white', width: '100%'}}
                rowTextStyle={{fontSize: 15, fontFamily: 'Nunito-Regular'}}
                buttonStyle={{
                  backgroundColor: 'white',
                  borderWidth: 0.5,
                  borderColor: 'gray',
                  borderRadius: 4,
                  height: 42,
                  width: '80%',
                  paddingRight: 10,
                  paddingVertical: 10,
                  alignSelf: 'center',
                }}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginVertical: 10,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    margin: 2,
                    width: wp(20),
                    height: wp(15),
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{position: 'absolute', zIndex: 1, margin: 1}}>
                    <View
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 20,
                        backgroundColor: 'black',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../../../../Assets/ICONS/close2.jpeg')}
                        style={{
                          width: 10,
                          height: 10,
                          alignSelf: 'center',
                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <Image
                    source={require('../../../../Assets/IMG_3151.jpg')}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={{margin: 2, width: '32%', height: width - 300}}>
                  {/* Upload Button */}
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                      Style.btnShadow,
                      {
                        backgroundColor: '#fefefe',
                        width: wp(9),
                        height: wp(9),
                        borderRadius: 50,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      },
                    ]}>
                    <MyText
                      style={{
                        fontSize: RFValue(25),
                        fontWeight: '500',
                        color: '#1bb76d',
                        alignSelf: 'center',
                      }}>
                      +
                    </MyText>
                  </TouchableOpacity>
                  <MyText
                    style={{
                      color: '#1bb76d',
                      fontSize: 10,
                      fontWeight: '500',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Upload Image
                  </MyText>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => toggleDelineModal()}>
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#ef2a22',
                  }}>
                  YES DECLINE
                </MyText>
              </TouchableOpacity>
              {/* hr */}
              <View style={[Style.hr, {marginTop: 6}]}></View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{marginBottom: 8, marginTop: -5}}
                onPress={() => toggleDelineModal()}>
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  CANCEL
                </MyText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ImagePreviewModal
        image={previewImgPath}
        isPreviewImgVisible={isPreviewImage}
        togglePreviewImgModal={togglePreviewImgModal}
      />

      <DeclineModal
        isOpen={isdeclineModal}
        handleChange={handleChangeDeclineModal}
        navigation={navigation}
        toggleDelineModal={toggleDelineModal}
        toggleModal={toggleModal}
      />

      <PendingModal
        isOpen={ispendingModal}
        handleChange={handleChangePendingModal}
      />

      <ComplateModal
        isOpen={iscompleteModal}
        handleChange={handleChangeCompleteModal}
      />
      
    </View>
  );
};

export default index;

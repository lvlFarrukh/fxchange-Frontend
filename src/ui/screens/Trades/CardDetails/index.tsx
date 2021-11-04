import React, {useState, Fragment} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyText from '../../../components/DefaultTextComponent/MyText';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import Navbar from '../../../components/Navbars/Navbar';
import Style from './Style';

const {width, height} = Dimensions.get('window');

const index = ({navigation}) => {
  const [previewImgPath, setpreviewImgPath] = useState(0);
  const [isPreviewImage, setisPreviewImage] = useState(false);

  const previewImage = (image: number) => {
    setpreviewImgPath(image);
    togglePreviewImgModal();
  };

  const togglePreviewImgModal = () => {
    setisPreviewImage(!isPreviewImage);
  };

  const navigateBack = () => {
    console.log('WORKING');
    navigation.goBack(null);
  };
  return (
    <Fragment>
      <ScrollView>
        <SafeAreaView
          style={{
            height: height,
            width: width,
            flex: 1,
          }}>
          <StatusBar translucent backgroundColor="#1bb76d" />
          <View style={Style.header}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{marginLeft: 15}}
              onPress={() => navigateBack()}>
              <Image
                source={require('../../../../Assets/ICONS/arrow=white.png')}
                style={Style.backArrow}
              />
            </TouchableOpacity>
            <MyText style={Style.headerHeading}>ITUNES - #FGRAC23287843</MyText>
            <MyText></MyText>
          </View>
          <View style={Style.mainBody}>
            <View
              style={[
                {
                  backgroundColor: '#fff',
                  marginTop: 35,
                  borderRadius: 15,
                  paddingTop: 8,
                  paddingBottom: 12,
                  // paddingLeft: 18, paddingRight: 18,
                },
                Style.btnShadow,
              ]}>
              <View
                style={{
                  paddingLeft: 18,
                  paddingRight: 18,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
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
                    <TouchableOpacity onPress={() => previewImage(1)}>
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
                  <MyText style={Style.mdFontBlackColor}>${'50 (N16,000)'}</MyText>
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
                  Style.lowerPortion,
                  {marginBottom: 6, paddingLeft: 18, paddingRight: 18},
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

                <View style={[{flexDirection: 'row'}]}>
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

                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      navigation.navigate('UploadGiftCard');
                    }}
                    style={[
                      {
                        backgroundColor: '#1bb76d',
                        borderRadius: 20,
                        padding: 4,
                        width: 40,
                        marginLeft: 10,
                        marginTop: 5,
                      },
                      Style.btnShadow,
                    ]}>
                    <MyText
                      style={[
                        {color: 'white', fontSize: 7, alignSelf: 'center'},
                      ]}>
                      RETRY
                    </MyText>
                  </TouchableOpacity>
                </View>
              </View>

              {/* hr */}
              <View style={Style.hr}></View>

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
                    <TouchableOpacity onPress={() => previewImage(0)}>
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
                  <MyText style={Style.mdFontBlackColor}>${'50 (N16,000)'}</MyText>
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

              {/* hr */}
              <View style={Style.hr}></View>

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
                    <TouchableOpacity onPress={() => previewImage(0)}>
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
                  <MyText style={Style.mdFontBlackColor}>${'50 (N16,000)'}</MyText>

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
                    style={[
                      {textAlign: 'right', color: '#16a041', fontSize: 13},
                    ]}>
                    {'COMPLETED'}
                  </MyText>
                </View>
              </View>

              {/* hr */}
              <View style={Style.hr}></View>

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
                      4
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
                    <TouchableOpacity onPress={() => previewImage(1)}>
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
                  <MyText style={Style.mdFontBlackColor}>${'50 (N16,000)'}</MyText>

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
                    style={[
                      {textAlign: 'right', color: '#d65d0e', fontSize: 13},
                    ]}>
                    {'IN PROGRESS'}
                  </MyText>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <ImagePreviewModal
          image={previewImgPath}
          isPreviewImgVisible={isPreviewImage}
          togglePreviewImgModal={togglePreviewImgModal}
        />
      </ScrollView>
      <Navbar
        navigation={navigation}
        activePage={'trade'}
        backgroundColor={undefined}
      />
    </Fragment>
  );
};

export default index;

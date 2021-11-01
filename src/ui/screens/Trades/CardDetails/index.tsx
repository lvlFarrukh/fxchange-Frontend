import React, { useState } from 'react';
import {View, Text, Dimensions, Image, StatusBar, ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import Style from './Style';

const {width, height} = Dimensions.get('screen');

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
    <ScrollView>
      
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>

        <View style={Style.header}>
          
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => navigateBack()}>
            <Image
              source={require('../../../../Assets/ICONS/arrow=white.png')}
              style={Style.backArrow}
            />
          </TouchableOpacity>
          <Text style={Style.headerHeading}>ITUNES - #FGRAC23287843</Text>
          <Text></Text>
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
                paddingLeft: 18,
                paddingRight: 18,
              },
              Style.btnShadow,
            ]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',}}>
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
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 10,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    1
                  </Text>
                </View>

                <Image
                  source={require('../../../../Assets/CARDS/itunes.png')}
                  style={Style.titleImage}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginLeft: 5,
                    alignSelf: 'center',
                    paddingBottom: 6,
                  }}>
                  Itunes
                </Text>
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
            <View style={Style.hr}></View>

            <View style={Style.lowerPortion}>
              <View>
                <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                  Amount (120/5)
                </Text>
                <Text style={Style.mdFontBlackColor}>${'50 (N16,000)'}</Text>
              </View>

              <View>
                <Text style={[{color: 'gray', fontSize: 10}]}>
                  {'DEC 10, 2021 1:20pm'}
                </Text>
                <Text
                  style={[{textAlign: 'right', color: 'red', fontSize: 13}]}>
                  {'DECLINED'}
                </Text>
              </View>
            </View>

            {/* hr */}
            <View style={Style.hr}></View>

            <View style={[Style.lowerPortion, {marginBottom: 6}]}>
              <View>
                <Text style={[{color: 'gray', fontSize: 10, marginBottom: 2}]}>
                  REASON FOR DECLINE
                </Text>
                <Text style={[{color: 'black', fontSize: 10, marginBottom: 2}]}>
                  Card is not activated
                </Text>
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
                
                  onPress={() => {
                      navigation.navigate('UploadGiftCard')
                  }}
                activeOpacity={0.5}
                style={[
                  {
                    backgroundColor: '#0a8a40',
                    borderRadius: 20,
                    padding: 4,
                    width: 40,
                    marginLeft:10,
                    marginTop:5
                  },
                  Style.btnShadow,
                ]}>
                <Text
                  style={[{color: 'white', fontSize: 7, alignSelf: 'center'}]}>
                  RETRY
                </Text>
              </TouchableOpacity>
              </View>
            </View>

            {/* hr */}
            <View style={Style.hr}></View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 10,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                      {2}
                  </Text>
                </View>
                <Image
                  source={require('../../../../Assets/CARDS/itunes.png')}
                  style={Style.titleImage}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginLeft: 5,
                    alignSelf: 'center',
                    paddingBottom: 6,
                  }}>
                  Itunes
                </Text>
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
            <View style={Style.hr}></View>

            <View style={Style.lowerPortion}>
              <View>
                <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                  Amount (120/5)
                </Text>
                <Text style={Style.mdFontBlackColor}>${'50 (N16,000)'}</Text>
              </View>

              <View>
                <Text style={[{color: 'gray', fontSize: 10}]}>
                  {'DEC 10, 2021 1:20pm'}
                </Text>
                <Text
                  style={[
                    {textAlign: 'right', color: '#0a8a40', fontSize: 13},
                  ]}>
                  {'COMPLETED'}
                </Text>
              </View>
            </View>

            {/* hr */}
            <View style={Style.hr}></View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 10,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                      {3}
                  </Text>
                </View>
                <Image
                  source={require('../../../../Assets/CARDS/itunes.png')}
                  style={Style.titleImage}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginLeft: 5,
                    alignSelf: 'center',
                    paddingBottom: 6,
                  }}>
                  Itunes
                </Text>
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
            <View style={Style.hr}></View>

            <View style={Style.lowerPortion}>
              <View>
                <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                  Amount (120/5)
                </Text>
                <Text style={Style.mdFontBlackColor}>${'50 (N16,000)'}</Text>

                <Text
                  style={[Style.smFontSize, , {color: 'gray', marginTop: 10}]}>
                  Card code: 12345678946579
                </Text>
              </View>

              <View>
                <Text style={[{color: 'gray', fontSize: 10}]}>
                  {'DEC 10, 2021 1:20pm'}
                </Text>
                <Text
                  style={[{textAlign: 'right', color: '#16a041', fontSize: 13}]}>
                  {'COMPLETED'}
                </Text>
              </View>
            </View>

              {/* hr */}
              <View style={Style.hr}></View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',}}>
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
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 10,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    4
                  </Text>
                </View>

                <Image
                  source={require('../../../../Assets/CARDS/itunes.png')}
                  style={Style.titleImage}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginLeft: 5,
                    alignSelf: 'center',
                    paddingBottom: 6,
                  }}>
                  Itunes
                </Text>
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
            <View style={Style.hr}></View>
            
            <View style={Style.lowerPortion}>
              <View>
                <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                  Amount (120/5)
                </Text>
                <Text style={Style.mdFontBlackColor}>${'50 (N16,000)'}</Text>

                <Text
                  style={[Style.smFontSize, , {color: 'gray', marginTop: 10}]}>
                  Card code: 12345678946579
                </Text>
              </View>

              <View>
                <Text style={[{color: 'gray', fontSize: 10}]}>
                  {'DEC 10, 2021 1:20pm'}
                </Text>
                <Text
                  style={[{textAlign: 'right', color: '#d65d0e', fontSize: 13}]}>
                  {'IN PROGRESS'}
                </Text>
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
  );
};

export default index;
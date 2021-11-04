import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  ImageBackground,
  ScrollView, TouchableOpacity, StatusBar
} from 'react-native';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../../components/ModeratePageCard/Header';
import Style from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import MyText from '../../../components/DefaultTextComponent/MyText';


const {width, height} = Dimensions.get('screen');

const index = ({ navigation }) => {
  const [isReportModalVisible, setReportModalVisible] = useState(false);
  const [previewImgPath, setpreviewImgPath] = useState(0);
  const [isPreviewImage, setisPreviewImage] = useState(false);

  const previewImage = (image: number) => {
    setpreviewImgPath(image);
    togglePreviewImgModal();
  };

  const togglePreviewImgModal = () => {
    setisPreviewImage(!isPreviewImage);
  };

  const toggleReportModal = () => {
    setReportModalVisible(!isReportModalVisible);
  };

  return (
    <View style={{ height: height, width: width, backgroundColor: '#d65d0e' }}>
       <StatusBar translucent backgroundColor='transparent' />
     
        <View style={{ height: '8%', justifyContent: 'center' }}>
          <Header
            navigation={navigation}
            Heading={'BITCOIN - #FG4558668900'}
            style={{ marginTop: 35 }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            height: '92%',
            width: width,
            backgroundColor: '#fff',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            paddingLeft: '10%',
            paddingRight: '8%',
          }}>
            <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <MyText style={{ fontSize: 9, color: 'black', marginTop: 25 }}>
              Opened By Thomas
            </MyText>
          </View>

          <View style={{ alignSelf: 'center', marginTop: -22 }}>
            <Image
              source={require('../../../../Assets/ICONS/Bitcoin.png')}
              style={{
                width: 32,
                height: 32,
                alignSelf: 'center',
              }}
            />
            <MyText
              style={{
                color: 'black',
                fontSize: 13,
                marginTop: 5,
              }}>
              Bitcoin Trade
            </MyText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={Style.lowerPortion}>
                <View>
                  <MyText style={[Style.smFontSize, , { color: 'gray' }]}>
                    Amount Sent
                  </MyText>
                  <MyText style={[Style.mdFontBlackColor, { fontSize: 18 }]}>
                    {'0.2356 BTC ($2300)'}
                  </MyText>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    {
                      backgroundColor: '#f2f2f2',
                      borderRadius: 5,
                      padding: 3,
                      width: 80,
                      marginTop: 15,
                      marginBottom: 5,
                    },
                    Style.btnShadow,
                  ]}>
                  <MyText
                    style={[
                      { color: '#1bb76d', fontSize: 11, alignSelf: 'center' },
                    ]}
                    onPress={() => { }}>
                    COMPLETED
                  </MyText>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#1bb76d',
                width: 115,
                height: 85,
                padding: 12,
                borderRadius: 8,
                marginTop: 32,
              }}>
              <MyText style={{ fontSize: 10, color: 'white', marginBottom: 2 }}>
                Amount Received
              </MyText>
              <MyText style={{ fontSize: 13, color: 'white' }}>$2000</MyText>
              <TouchableOpacity
              activeOpacity={0.9}
                onPress={() => toggleReportModal()}
                // onPress={()=>previewImage('../../../../Assets/IMG_3151.jpg')}
                style={[
                  {
                    backgroundColor: 'white',
                    borderRadius: 30,
                    padding: 3,
                    width: '100%',
                    marginTop: 10,
                    marginBottom: 5,
                  },
                  Style.btnShadow,
                ]}>
                <MyText
                  style={[
                    { color: '#1bb76d', fontSize: 10, alignSelf: 'center' },
                  ]}>
                  VIEW REPORT
                </MyText>
              </TouchableOpacity>
            </View>
          </View>

          {/* hr */}
          <View style={Style.hr}></View>

          <View style={[Style.lowerPortion, { marginBottom: 6, marginTop: 12 }]}>
            <View>
              <MyText style={[{ color: 'gray', fontSize: 11, marginBottom: 2 }]}>
                Wallet Address
              </MyText>
              <MyText style={[{ color: 'black', fontSize: 10, marginBottom: 2 }]}>
                23kjhsdfk1kjjkdfskf1kjkhjkkd
              </MyText>
            </View>

            <Image
              source={require('../../../../Assets/ICONS/barCode.png')}
              style={{
                width: 85,
                height: 85,
                alignSelf: 'center',
              }}
            />
          </View>

          {/* hr */}
          <View style={[Style.hr, { marginTop: 3 }]}></View>

          <View style={[Style.lowerPortion, { marginBottom: 6, marginTop: 2 }]}>
            <View>
              <MyText style={[{ color: 'gray', fontSize: 11, marginBottom: 2 }]}>
                Transaction Value in Naira (570/5)
              </MyText>
              <MyText style={[{ color: 'black', fontSize: 13, marginBottom: 2 }]}>
                N1,311,000
              </MyText>
            </View>
          </View>

          {/* hr */}
          <View style={[Style.hr, { marginTop: 3 }]}></View>

          <View style={[Style.lowerPortion, { marginBottom: 6, marginTop: 2 }]}>
            <View>
              <MyText style={[{ color: 'gray', fontSize: 11, marginBottom: 2 }]}>
                Transaction ID
              </MyText>
              <MyText style={[{ color: 'black', fontSize: 10, marginBottom: 2 }]}>
                ada asdlalskd aslkdma aksdkad aksjda askldal asdkaklsd
                askdakldja alsdkaasd asdhajkd aksjdna asd
              </MyText>
            </View>
          </View>

          {/* hr */}
          <View style={[Style.hr, { marginTop: 3 }]}></View>

          <View style={[Style.lowerPortion, { marginBottom: 6, marginTop: 2 }]}>
            <View>
              <MyText style={[{ color: 'gray', fontSize: 11, marginBottom: 2 }]}>
                Attachment
              </MyText>
            </View>
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
                width: 100,
                height: 70,
                // marginLeft: 10,
                justifyContent: 'center',
              }}
              imageStyle={{}}>
              <TouchableOpacity activeOpacity={0.9} onPress={() => previewImage(1)}>
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: 30,
                    height: 30,
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
                      width: 18,
                      height: 18,
                      alignSelf: 'center',
                      marginTop: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>

            <ImageBackground
              source={require('../../../../Assets/IMG_3151.jpg')}
              style={{
                width: 100,
                height: 70,
                marginLeft: 10,
                justifyContent: 'center',
              }}
              imageStyle={{}}>
              <TouchableOpacity activeOpacity={0.9} onPress={() => previewImage(1)}>
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: 30,
                    height: 30,
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
                      width: 18,
                      height: 18,
                      alignSelf: 'center',
                      marginTop: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{ paddingBottom: 60 }}></View>
           </ScrollView>
        </View>
     
      {/* Process modal */}
      <Modal
        //style={{ backgroundColor:'#fafafa' , height:height/2}}
        isVisible={isReportModalVisible}
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
            backgroundColor: '#1bb76d',
          }}>
          <View
            style={{
              width: width - 50,
              height: width - 30,
              marginTop: 20,
              borderRadius: 40,
              alignSelf: 'center',
              backgroundColor: '#fff',
              justifyContent: 'space-between',
            }}>
            <View>
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 8,
                  fontWeight: '500',
                  color: '#1bb76d',
                }}>
                REPORT
              </MyText>

              {/* hr */}
              <View
                style={[
                  Style.hr,
                  { marginTop: 8, marginLeft: 34, marginRight: 34 },
                ]}></View>
            </View>

            <View style={{ flex: 1}}>
              <View style={{ marginLeft: 34 }}>
                <View style={[Style.lowerPortion, { marginTop: 8 }]}>
                  <View>
                    <MyText
                      style={[{ color: 'black', fontSize: 11, marginBottom: 2 }]}>
                      Amount Received
                    </MyText>
                    <MyText
                      style={[
                        Style.mdFontBlackColor,
                        { fontSize: 15, fontWeight: '500' },
                      ]}>
                      {'$2000 (0.00023 BTC)'}
                    </MyText>
                  </View>
                </View>

                {/* hr */}
                <View
                  style={[Style.hr, { marginTop: 10, marginRight: 34 }]}></View>

                <View
                  style={[Style.lowerPortion, { marginTop: 8, marginRight: 40 }]}>
                  <View>
                    <MyText
                      style={[{ color: 'black', fontSize: 11, marginBottom: 2 }]}>
                      Naira Value
                    </MyText>
                    <MyText
                      style={[
                        Style.mdFontBlackColor,
                        { fontSize: 15, fontWeight: '400' },
                      ]}>
                      {'N330,000'}
                    </MyText>
                  </View>

                  <View>
                    <MyText
                      style={[{ color: 'black', fontSize: 11, marginBottom: 2 }]}>
                      Rate
                    </MyText>
                    <MyText
                      style={[
                        Style.mdFontBlackColor,
                        { fontSize: 15, fontWeight: '400' },
                      ]}>
                      {'570/$'}
                    </MyText>
                  </View>
                </View>

                {/* hr */}
                <View
                  style={[Style.hr, { marginTop: 10, marginRight: 34 }]}></View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}></View>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 5,
                  width: '80%',
                  alignSelf: 'center',
                }}>
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
                      width: 100,
                      height: 70,
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity  activeOpacity={0.9} onPress={() => previewImage(1)}>
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 30,
                          height: 30,
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
                            width: 18,
                            height: 18,
                            alignSelf: 'center',
                            marginTop: 5,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground
                    source={require('../../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                    style={{
                      width: 100,
                      height: 70,
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}
                    imageStyle={{}}>
                    <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={() => previewImage(0)}
                    >
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          width: 30,
                          height: 30,
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
                            width: 18,
                            height: 18,
                            alignSelf: 'center',
                            marginTop: 5,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>
            </View>

            <View>
              {/* hr */}
              <View style={[Style.hr, { marginTop: 6}]}></View>
              <TouchableOpacity
              activeOpacity={0.9}
                style={{ marginBottom: 8, marginTop: -5 }}
                onPress={toggleReportModal}>
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  CLOSE
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
    </View>
  );
};

export default index;

import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import Header from '../../../components/ModeratePageCard/Header';
import Style from './Style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
  const [isProcessModalVisible, setProcessModalVisible] = useState(false);
  const [isDelineModalVisible, setdelineModalVisible] = useState(false);
  const [previewImgPath, setpreviewImgPath] = useState(0);
  const [isPreviewImage, setisPreviewImage] = useState(false);

  const previewImage = (image: number) => {
    setpreviewImgPath(image);
    togglePreviewImgModal();
  };

  const togglePreviewImgModal = () => {
    setisPreviewImage(!isPreviewImage);
  };

  const toggleDeclineModal = () => {
    setdelineModalVisible(!isDelineModalVisible);
  };

  const toggleProcessModal = () => {
    setProcessModalVisible(!isProcessModalVisible);
  };

  return (
    <View style={{height: height, width: width, backgroundColor: '#d65d0e'}}>
      <StatusBar translucent backgroundColor="transparent" />
        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'BITCOIN - #FG4558668900'}
        />
      <ScrollView>

        <View
          style={{
            marginTop: 10,
            // height: height,
            width: width,
            backgroundColor: '#ffffff',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            paddingHorizontal: '10%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MyText style={{fontSize: 9, color: 'black', marginTop: 25}}>
              Opened By Thomas
            </MyText>
          </View>

          <View style={{alignSelf: 'center', marginTop: -22}}>
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

          <View style={Style.lowerPortion}>
            <View>
              <MyText style={[Style.smFontSize, , {color: 'gray'}]}>
                Amount Sent
              </MyText>
              <MyText style={[Style.mdFontBlackColor, {fontSize: 20}]}>
                {'0.2356 BTC ($2300)'}
              </MyText>
            </View>
          </View>
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
              style={[{color: '#d65d0e', fontSize: 11, alignSelf: 'center'}]}
              onPress={() => {}}>
              PENDING
            </MyText>
          </TouchableOpacity>

          {/* hr */}
          <View style={Style.hr}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 12}]}>
            <View>
              <MyText style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Wallet Address
              </MyText>
              <MyText style={[{color: 'black', fontSize: 10, marginBottom: 2}]}>
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
          <View style={[Style.hr, {marginTop: 3}]}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 2}]}>
            <View>
              <MyText style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Transaction Value in Naira (570/5)
              </MyText>
              <MyText style={[{color: 'black', fontSize: 13, marginBottom: 2}]}>
                N1,311,000
              </MyText>
            </View>
          </View>

          {/* hr */}
          <View style={[Style.hr, {marginTop: 3}]}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 2}]}>
            <View>
              <MyText style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Transaction ID
              </MyText>
              <MyText style={[{color: 'black', fontSize: 10, marginBottom: 2}]}>
                ada asdlalskd aslkdma aksdkad aksjda askldal asdkaklsd asd aa alsdkaasd asdhajkd aksjdna asd
              </MyText>
            </View>
          </View>

          {/* hr */}
          <View style={[Style.hr, {marginTop: 3}]}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 2}]}>
            <View>
              <MyText style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
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
              <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => previewImage(1)}>
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
              <TouchableOpacity 
              activeOpacity={0.9}
              onPress={() => previewImage(1)}>
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 40,
              marginBottom: 22,
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                {
                  backgroundColor: '#e32b23',
                  borderRadius: 20,
                  padding: 4,
                  width: 125,
                },
                Style.btnShadow,
              ]}>
              <MyText
                style={[{color: 'white', fontSize: 11, alignSelf: 'center'}]}
                onPress={() => toggleDeclineModal()}>
                DECLINE
              </MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                {
                  backgroundColor: '#d65d0e',
                  borderRadius: 20,
                  padding: 4,
                  width: 125,
                },
                Style.btnShadow,
              ]}>
              <MyText
                style={[{color: 'white', fontSize: 11, alignSelf: 'center'}]}
                onPress={() => {
                  toggleProcessModal();
                }}>
                PROCESS
              </MyText>
            </TouchableOpacity>
          </View>

          <View style={{paddingBottom: 60}}></View>
        </View>
      </ScrollView>

      {/* Decline modal */}
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
            width: width - 100,
            height: width - 125,
            borderRadius: 50,
            alignSelf: 'center',
            backgroundColor: '#e32b23',
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
                  color: '#e32b23',
                }}>
                DECLINE
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
                decline this transaction
              </MyText>
            </View>

            <View>
              <TouchableOpacity activeOpacity={0.9}
                onPress={() => {
                  toggleDeclineModal();
                  navigation.navigate('BitcoinCardDetailDecline');
                }}
              >
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '500',
                    color: '#e32b23',
                  }}>
                  YES DECLINE
                </MyText>
              </TouchableOpacity>
              {/* hr */}
              <View style={[Style.hr, {marginTop: 6}]}></View>
              <TouchableOpacity
              activeOpacity={0.9}
                style={{marginBottom: 8, marginTop: -4}}
                onPress={() => toggleDeclineModal()}>
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

      {/* Process modal */}
      <Modal
        //style={{ backgroundColor:'#fafafa' , height:height/2}}
        isVisible={isProcessModalVisible}
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
            backgroundColor: '#d65d0e',
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
                  color: '#d65d0e',
                }}>
                PROCESS
              </MyText>

              {/* hr */}
              <View
                style={[
                  Style.hr,
                  {marginTop: 0, marginLeft: 34, marginRight: 34},
                ]}></View>
            </View>

            <View style={{flex: 1}}>
              <MyText
                style={{
                  fontSize: 9,
                  textAlign: 'right',
                  marginRight: 34,
                  marginTop: -8,
                  marginBottom: -5,
                }}>
                Rate: 570/$
              </MyText>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.7,
                  width: '80%',
                  height: 44,
                  margin: 7,
                  paddingLeft: 15,
                  fontFamily:'Nunito-Regular'
                }}
                underlineColorAndroid="transparent"
                placeholder="Amount Received in USD"
                placeholderTextColor="#676767"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              />

              <TextInput
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.5,
                  width: '80%',
                  height: 44,
                  margin: 7,
                  paddingLeft: 15,
                  fontFamily:'Nunito-Regular'
                }}
                underlineColorAndroid="transparent"
                placeholder="Amount Received in BTC"
                placeholderTextColor="#676767"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              />
              <MyText
                style={{
                  fontSize: 9,
                  textAlign: 'right',
                  marginRight: 34,
                  marginTop: -4,
                  marginBottom: -5,
                }}>
                Naira Value: N30,000,000
              </MyText>
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
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute',
                      zIndex: 1,
                      margin: 1,}}>

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
                onPress={() => {
                  toggleProcessModal();
                  navigation.navigate('BitcoinCardDetailComplete');
                }}>
                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#d65d0e',
                  }}>
                  ACCEPT
                </MyText>
              </TouchableOpacity>
              {/* hr */}
              <View style={[Style.hr, {marginTop: 6}]}></View>
              <TouchableOpacity
              activeOpacity={0.9}
                style={{marginBottom: 8, marginTop: -5}}
                onPress={() => {
                  toggleProcessModal();
                }}>
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
    </View>
  );
};

export default index;

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
import SelectDropdown from 'react-native-select-dropdown';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import Header from '../../../components/ModeratePageCard/Header';
import Style from './Style';

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
      <ScrollView>
        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'BITCOIN - #FG4558668900'}
        />
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
            <Text style={{fontSize: 9, color: 'black', marginTop: 25}}>
              Opened By Thomas
            </Text>
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
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                marginTop: 5,
              }}>
              Bitcoin Trade
            </Text>
          </View>

          <View style={Style.lowerPortion}>
            <View>
              <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                Amount Sent
              </Text>
              <Text style={[Style.mdFontBlackColor, {fontSize: 20}]}>
                {'0.2356 BTC ($2300)'}
              </Text>
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
            <Text
              style={[{color: '#d65d0e', fontSize: 11, alignSelf: 'center'}]}
              onPress={() => {}}>
              PENDING
            </Text>
          </TouchableOpacity>

          {/* hr */}
          <View style={Style.hr}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 12}]}>
            <View>
              <Text style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Wallet Address
              </Text>
              <Text style={[{color: 'black', fontSize: 10, marginBottom: 2}]}>
                23kjhsdfk1kjjkdfskf1kjkhjkkd
              </Text>
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
              <Text style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Transaction Value in Naira (570/5)
              </Text>
              <Text style={[{color: 'black', fontSize: 13, marginBottom: 2}]}>
                N1,311,000
              </Text>
            </View>
          </View>

          {/* hr */}
          <View style={[Style.hr, {marginTop: 3}]}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 2}]}>
            <View>
              <Text style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Transaction ID
              </Text>
              <Text style={[{color: 'black', fontSize: 10, marginBottom: 2}]}>
                ada asdlalskd aslkdma aksdkad aksjda askldal asdkaklsd
                askdakldja alsdkaasd asdhajkd aksjdna asd
              </Text>
            </View>
          </View>

          {/* hr */}
          <View style={[Style.hr, {marginTop: 3}]}></View>

          <View style={[Style.lowerPortion, {marginBottom: 6, marginTop: 2}]}>
            <View>
              <Text style={[{color: 'gray', fontSize: 11, marginBottom: 2}]}>
                Attachment
              </Text>
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
              <Text
                style={[{color: 'white', fontSize: 11, alignSelf: 'center'}]}
                onPress={() => toggleDeclineModal()}>
                DECLINE
              </Text>
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
              <Text
                style={[{color: 'white', fontSize: 11, alignSelf: 'center'}]}
                onPress={() => {
                  toggleProcessModal();
                }}>
                PROCESS
              </Text>
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
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 5,
                  fontWeight: '500',
                  color: '#e32b23',
                }}>
                ACCEPT
              </Text>

              {/* hr */}
              <View style={[Style.hr, {marginTop: 0}]}></View>
            </View>

            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Are you sure you want to
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                decline this transaction
              </Text>
            </View>

            <View>
              <TouchableOpacity activeOpacity={0.9}
                onPress={() => {
                  toggleDeclineModal();
                  navigation.navigate('BitcoinCardDetailDecline');
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '500',
                    color: '#e32b23',
                  }}>
                  YES DECLINE
                </Text>
              </TouchableOpacity>
              {/* hr */}
              <View style={[Style.hr, {marginTop: 6}]}></View>
              <TouchableOpacity
              activeOpacity={0.9}
                style={{marginBottom: 8, marginTop: -4}}
                onPress={() => toggleDeclineModal()}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Cancel
                </Text>
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
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 8,
                  fontWeight: '500',
                  color: '#d65d0e',
                }}>
                PROCESS
              </Text>

              {/* hr */}
              <View
                style={[
                  Style.hr,
                  {marginTop: 0, marginLeft: 34, marginRight: 34},
                ]}></View>
            </View>

            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 9,
                  textAlign: 'right',
                  marginRight: 34,
                  marginTop: -8,
                  marginBottom: -5,
                }}>
                Rate: 570/$
              </Text>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderColor: 'lightgray',
                  borderWidth: 0.7,
                  width: '80%',
                  height: 44,
                  margin: 7,
                  paddingLeft: 15,
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
                  borderColor: 'lightgray',
                  borderWidth: 0.5,
                  width: '80%',
                  height: 44,
                  margin: 7,
                  paddingLeft: 15,
                }}
                underlineColorAndroid="transparent"
                placeholder="Amount Received in BTC"
                placeholderTextColor="#676767"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              />
              <Text
                style={{
                  fontSize: 9,
                  textAlign: 'right',
                  marginRight: 34,
                  marginTop: -4,
                  marginBottom: -5,
                }}>
                Naira Value: N30,000,000
              </Text>
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
                    width: '32%',
                    height: width - 300,
                  }}>
                  {/* <TouchableOpacity style={{}}> */}
                  <Image
                    source={require('../../../../Assets/ICONS/close.png')}
                    style={{
                      width: '20%',
                      height: '20%',
                      position: 'absolute',
                      zIndex: 1,
                      margin: 1,
                    }}
                  />
                  {/* </TouchableOpacity> */}

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
                        width: width - 328,
                        height: width - 328,
                        borderRadius: 50,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: '500',
                        color: '#0a8a40',
                        alignSelf: 'center',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#0a8a40',
                      fontSize: 10,
                      fontWeight: '500',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Upload Image
                  </Text>
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
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#d65d0e',
                  }}>
                  ACCEPT
                </Text>
              </TouchableOpacity>
              {/* hr */}
              <View style={[Style.hr, {marginTop: 6}]}></View>
              <TouchableOpacity
              activeOpacity={0.9}
                style={{marginBottom: 8, marginTop: -5}}
                onPress={() => {
                  toggleProcessModal();
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  CANCEL
                </Text>
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

import React, {useState} from 'react';
import {View, Text, Dimensions, Image, TextInput, ImageBackground,ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../../components/ModeratePageCard/Header';
import Style from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePreviewModal from '../../../components/ImagePreviewModal';
import MyText from '../../../components/DefaultTextComponent/MyText';

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
       <StatusBar translucent backgroundColor='transparent' />
      <ScrollView>
        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'BITCOIN - #FG4558668900'}
        />
        <View
          style={{
            marginTop: 10,
            height: height-60,
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
          <View style={{
            flexDirection: 'row'
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
                style={[{color: 'red', fontSize: 11, alignSelf: 'center'}]}
                onPress={() => {}}>
                DECLINE
              </MyText>
            </TouchableOpacity>
    
            <View style={{
              flexDirection: 'row',
              marginLeft: 14,
              marginTop: 15,
            }}>
              <Image 
                source={require('../../../../Assets/ICONS/info_icon.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginRight:5
              }}
              />
              <MyText style={{fontSize: 10}}>Not received</MyText>
            </View>
          </View>

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
                ada asdlalskd aslkdma aksdkad aksjda askldal asdkaklsd
                askdakldja alsdkaasd asdhajkd aksjdna asd
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

          {/* <View style={{paddingBottom: 60}}></View> */}
        </View>
      </ScrollView>
      <ImagePreviewModal
        image={previewImgPath}
        isPreviewImgVisible={isPreviewImage}
        togglePreviewImgModal={togglePreviewImgModal}
      />
    </View>
  );
};

export default index;

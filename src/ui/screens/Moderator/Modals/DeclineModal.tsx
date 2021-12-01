import React, {useState} from 'react';
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
import {SliderBox} from 'react-native-image-slider-box';

interface Props {
  isOpen: any;
  handleChange: any;
  navigation: any;
  toggleDelineModal: any;
  toggleModal: any;
}

const DeclineModal: React.FC<Props> = props => {
  const [imageIndex, setimageIndex] = useState(1);
  const navigation = props.navigation;

  const switchBtnAction = () => {
    props.handleChange();
    navigation.navigate('SwitchGiftCard');
  };

  return (
    <Modal
      isVisible={props.isOpen}
      animationIn={'fadeInRightBig'}
      animationOut={'fadeOutRightBig'}
      animationInTiming={600}  
      animationOutTiming={500}  
    >
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
            paddingHorizontal: wp(5),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(1),
            height: hp(6),
          }}>
          <TouchableOpacity onPress={props.handleChange}>
            <Image
              style={{width: wp(5), height: wp(5)}}
              source={require('../../../../Assets/ICONS/white-cross.png')}
            />
          </TouchableOpacity>
          <MyText
            style={{
              color: '#ffffff',
              fontSize: RFValue(18),
              marginLeft: -wp(2),
            }}>
            {imageIndex} of 4
          </MyText>
          <View></View>
        </View>
        {/* <ScrollView> */}

        <View
          style={{
            backgroundColor: 'black',
            // paddingTop: hp(10),
            // borderTopEndRadius: 40,
            // borderTopStartRadius: 40,
            height: hp(94),
            paddingTop: hp(8),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}>
          <SliderBox
            images={[
              require('../../../../Assets/IMG_3151.jpg'),
              require('../../../../Assets/sliderImg2.jpeg'),
              require('../../../../Assets/sliderImg2.jpeg'),
            ]}
            sliderBoxHeight={imageIndex === 1 ? hp(45) : hp(55)}
            // onCurrentImagePressed={index =>
            //     console.warn(`image ${index} pressed`)
            // }
            circleLoop
            dotStyle={{
              display: 'none',
            }}
            currentImageEmitter={index => setimageIndex(index + 1)}
            // parentWidth={this.state.width}
          />
          {/* <Image
            style={{
              // backgroundColor: 'blue',
              height: hp(45),
              width: '100%',
              marginTop: hp(15),
            }}
            source={require('../../../../Assets/IMG_3151.jpg')}
          /> */}

          {imageIndex === 1 ? (
            <View>
              <View
                style={{
                  backgroundColor: '#0a8a40',
                  paddingTop: hp(3),
                  paddingHorizontal: wp(6),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText style={{color: '#ffffff', fontSize: RFValue(18)}}>
                  ITUNES - $50
                </MyText>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  Physical
                </MyText>
              </View>

              <View
                style={{
                  backgroundColor: '#0a8a40',
                  paddingVertical: hp(3),
                  paddingHorizontal: wp(6),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  Trade Id: #FG455866890
                </MyText>
                <MyText style={{color: '#ffffff', fontSize: RFValue(16)}}>
                  {imageIndex}/4
                </MyText>
              </View>
            </View>
          ) : (
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
                  {imageIndex}/4
                </MyText>
              </View>
            </View>
          )}

          {imageIndex === 1 ? (
            <TouchableOpacity
              style={[
                {
                  backgroundColor: '#ffffff',
                  height: hp(10),
                  justifyContent: 'center',
                },
                imageIndex === 1 && {marginTop: hp(11)},
              ]}>
              <MyText
                style={{
                  color: '#ee2920',
                  alignSelf: 'center',
                  fontSize: RFValue(18),
                }}>
                DECLINED
              </MyText>
            </TouchableOpacity>
          ) : imageIndex === 2 ? (
            <View
              style={[
                {
                  backgroundColor: '#ffffff',
                  height: hp(10),
                  justifyContent: 'center',
                },
              ]}>
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
                      justifyContent: 'center',
                    },
                    // Style.btnShadow,
                  ]}>
                  <MyText
                    style={[{color: 'red', fontSize: 11, alignSelf: 'center'}]}
                    onPress={props.toggleDelineModal}>
                    DECLINE
                  </MyText>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={switchBtnAction}
                  activeOpacity={0.9}
                  style={[
                    {
                      backgroundColor: '#d65d0e',
                      borderRadius: 20,
                      padding: 4,
                      width: wp(27),
                      height: hp(5),
                      justifyContent: 'center',
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
                      justifyContent: 'center',
                    },
                    // Style.btnShadow,
                  ]}>
                  <MyText
                    onPress={props.toggleModal}
                    style={[
                      {color: 'white', fontSize: 11, alignSelf: 'center'},
                    ]}>
                    ACCEPT
                  </MyText>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            imageIndex === 3 && (
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  height: hp(10),
                  justifyContent: 'center',
                }}>
                <MyText
                  style={{
                    color: '#2d9b5b',
                    alignSelf: 'center',
                    fontSize: RFValue(18),
                  }}>
                  COMPLETED
                </MyText>
              </TouchableOpacity>
            )
          )}
        </View>
        {/* </ScrollView> */}
      </View>
    </Modal>
  );
};

export default DeclineModal;

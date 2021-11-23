import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

interface Props {
  isOpen: boolean;
  handleChange: () => void;
}

const PushNotification: React.FC<Props> = props => {
  const [sendAsPopup, setsendAsPopup] = useState(true);

  return (
    <Modal isVisible={props.isOpen}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          backgroundColor: '#ffffff',
          borderRadius: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={props.handleChange}
            style={{marginLeft: -10}}>
            <MyText style={{fontSize: 30, fontWeight: '500', color: '#979797'}}>
              x
            </MyText>
          </TouchableOpacity>

          <MyText
            style={{
              fontSize: RFValue(22),
              fontWeight: '500',
              marginLeft: 20,
              paddingTop: 2,
            }}>
            Push Notifications
          </MyText>
          <MyText></MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 10,
          }}></View>

        <View>
          <TextInput
            style={{
              height: 46,
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#F1F1F1',
              paddingLeft: 20,
              color: '#000',
              fontSize: RFValue(14),
              marginTop: 8,
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Title'}
            placeholderTextColor={'#343434'}></TextInput>

          <TextInput
            style={{
              marginTop: 2,
              fontWeight: '500',
              textAlignVertical: 'top',
              borderColor: '#F1F1F1',
              borderWidth: 1.5,
              color: 'black',
              fontFamily: 'Nunito-Regular',
              borderRadius: 4,
              paddingLeft: 20,
              fontSize: RFValue(14),
            }}
            underlineColorAndroid="transparent"
            placeholder="Enter Your Message"
            placeholderTextColor="#333333"
            numberOfLines={5}
            multiline={true}
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <ImageBackground
            style={{
              width: wp(70 / 3) - 5,
              height: hp(9),
            }}
            source={require('../../../../Assets/img2.png')}>
            <Image
              style={{width: wp(5), height: wp(5)}}
              source={require('../../../../Assets/ICONS/close.png')}
            />
          </ImageBackground>

          <TouchableOpacity
            style={{
              width: hp(9),
              height: hp(9),
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#f1f1f1',
              padding: 8,
              justifyContent: 'center',
              marginHorizontal: 10
            }}
            onPress={() => {
              // navigation.navigate('AddCard');
            }}>
            <MyText
              style={{
                fontSize: RFValue(30),
                alignSelf: 'center',
                marginTop: -10,
              }}>
              +
            </MyText>
            <MyText
              style={{
                fontSize: RFValue(8),
                alignSelf: 'center',
                marginTop: -10,
              }}>
              Upload
            </MyText>
            <MyText
              style={{
                fontSize: RFValue(8),
                alignSelf: 'center',
                marginTop: -10,
              }}>
              {'\n'}Image/video
            </MyText>
            
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: hp(3)}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setsendAsPopup(!sendAsPopup)}>
            <Image
              style={{
                resizeMode: 'contain',
                height: wp(8),
                width: wp(13),
              }}
              source={
                sendAsPopup
                  ? require('../../../../Assets/ICONS/onBtn.png')
                  : require('../../../../Assets/ICONS/offBtn.png')
              }
            />
          </TouchableOpacity>
          <MyText style={{fontSize: RFValue(13), marginLeft: 5, marginTop: 5}}>
            Send as popup
          </MyText>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handleChange}
          style={{alignSelf: 'center', marginTop: hp(4)}}>
          <MyText
            style={{
              color: '#0c883f',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            SEND
          </MyText>
        </TouchableOpacity>
        <View
          style={[
            {borderTopWidth: 1.5, borderColor: '#F1F1F1', marginBottom: 20},
            {width: wp(40), alignSelf: 'center'},
          ]}></View>
      </View>
    </Modal>
  );
};

export default PushNotification;

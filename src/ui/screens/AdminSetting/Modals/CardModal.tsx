import React, {useState} from 'react';
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
  handleChange: any;
  data: any;
  // action: () => void;
}

const CardModal: React.FC<Props> = props => {
  return (
    <Modal isVisible={props.isOpen}>
      <View
        style={{
          //   paddingVertical: 10,
          //   paddingHorizontal: 30,
          width: wp(80),
          alignSelf: 'center',
          backgroundColor: '#ffffff',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: hp(5),
          }}>
          {/* <ImageBackground 
                style={{
                    height: hp(26),
                    width: '100%',
                }}
              > */}
          <Image
            style={{
              height: hp(26),
              width: wp(85),
              marginTop: -18
            }}
            source={require('../../../../Assets/pop-image.png')}
          />
          <TouchableOpacity
            onPress={props.handleChange}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#575e64c4',
              height: wp(7),
              width: wp(7),
              borderRadius: 20,
              justifyContent: 'center',
              position: 'absolute',
              right: wp(3),
              top: wp(3),
            }}>
            <Image
              style={{alignSelf: 'center', width: wp(3), height: wp(3)}}
              source={require('../../../../Assets/ICONS/cross.png')}
            />
          </TouchableOpacity>

          {/* </ImageBackground> */}

          <MyText style={{marginVertical: 10, fontWeight: 'bold'}}>
            Google Play
          </MyText>
          <MyText style={{fontSize: RFValue(11), color: '#333333'}}>
            Google play cards will be trading at 300/${'\n'}
            currently because we are going on a short break{'\n'}
            that will take approximately 2-4hrs.{'\n'}
            {'\n'}
            We are sorry for inconveniences this may cause{'\n'}
            {'\n'}
            Thank you for choosing frjora.
          </MyText>
        </View>
      </View>
    </Modal>
  );
};

export default CardModal;

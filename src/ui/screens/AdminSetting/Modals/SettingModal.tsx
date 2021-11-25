import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
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

const SettingModal: React.FC<Props> = props => {
  const [isRegistration, setisRegistration] = useState(true);
  const [isWithdrawal, setisWithdrawal] = useState(false);
  const [isBitcoinTrade, setisBitcoinTrade] = useState(true);
  const [isGiftCardTrade, setisGiftCardTrade] = useState(true);
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
            borderBottomWidth: 1,
            borderColor: '#f1f1f1',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={props.handleChange}
            style={{marginLeft: -45}}>
            {/* <MyText style={{fontSize: 30, fontWeight: '500', color: '#979797'}}>
              x
            </MyText> */}
            <Image style={{height: wp(5), width: wp(5)}} source={require('../../../../Assets/ICONS/cross.png')} />

          </TouchableOpacity>

          <MyText
            style={{
              fontSize: RFValue(22),
              fontWeight: '500',
              marginLeft: 20,
              paddingTop: 2,
            }}>
            Settings
          </MyText>
          <MyText></MyText>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TextInput
            style={{
              height: wp(13),
              width: wp(36),
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#F1F1F1',
              paddingLeft: 15,
              color: '#000',
              fontSize: RFValue(12),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Max. Withdrawal'}
            placeholderTextColor={'#343434'}></TextInput>

          <TextInput
            style={{
              height: wp(13),
              width: wp(36),
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#F1F1F1',
              paddingLeft: 15,
              color: '#000',
              fontSize: RFValue(12),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Withdrawal Fee'}
            placeholderTextColor={'#343434'}></TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <MyText
            style={{
              color: '#343434',
              fontSize: RFValue(15),
              marginTop: 30,
            }}>
            Wallet Address
          </MyText>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 40,
            }}>
            <Image
              style={{height: wp(6), width: wp(6), alignSelf: 'center', marginTop: 10}}
              source={require('../../../../Assets/ICONS/uploadIconGray.png')}
            />
            <MyText style={{fontSize: RFValue(10)}}>Upload Image</MyText>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(4),
          }}>
          <MyText style={{paddingVertical: 'auto', marginTop: '5%'}}>
            500 - 1000
          </MyText>
          <TextInput
            style={{
              height: wp(13),
              width: wp(43),
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#F1F1F1',
              paddingLeft: 15,
              color: '#000',
              fontSize: RFValue(12),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Range e.g 570'}
            placeholderTextColor={'#343434'}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(0.5),
          }}>
          <MyText style={{paddingVertical: 'auto', marginTop: '5%'}}>
            1001 - 4999
          </MyText>
          <TextInput
            style={{
              height: wp(13),
              width: wp(43),
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#F1F1F1',
              paddingLeft: 15,
              color: '#000',
              fontSize: RFValue(12),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Range e.g 570'}
            placeholderTextColor={'#343434'}></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(0.5),
          }}>
          <MyText style={{paddingVertical: 'auto', marginTop: '5%'}}>
            5000 & Above
          </MyText>
          <TextInput
            style={{
              height: wp(13),
              width: wp(43),
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#F1F1F1',
              paddingLeft: 15,
              color: '#000',
              fontSize: RFValue(12),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Range e.g 570'}
            placeholderTextColor={'#343434'}></TextInput>
        </View>

        <View style={{flexDirection: 'row', marginTop: hp(3)}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setisRegistration(!isRegistration)}>
            <Image
              style={{
                resizeMode: 'contain',
                height: wp(8),
                width: wp(17),
              }}
              source={
                isRegistration
                  ? require('../../../../Assets/ICONS/onBtn.png')
                  : require('../../../../Assets/ICONS/offBtn.png')
              }
            />
          </TouchableOpacity>
          <MyText style={{fontSize: RFValue(15), marginLeft: 15, marginTop: 2}}>
            Registration
          </MyText>
        </View>

        <View style={{flexDirection: 'row', marginTop: hp(1)}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setisWithdrawal(!isWithdrawal)}>
            <Image
              style={{
                resizeMode: 'contain',
                height: wp(8),
                width: wp(17),
              }}
              source={
                isWithdrawal
                  ? require('../../../../Assets/ICONS/onBtn.png')
                  : require('../../../../Assets/ICONS/offBtn.png')
              }
            />
          </TouchableOpacity>
          <MyText style={{fontSize: RFValue(15), marginLeft: 15, marginTop: 2}}>
            Withdrawals
          </MyText>
        </View>

        <View style={{flexDirection: 'row', marginTop: hp(1)}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setisBitcoinTrade(!isBitcoinTrade)}>
            <Image
              style={{
                resizeMode: 'contain',
                height: wp(8),
                width: wp(17),
              }}
              source={
                isBitcoinTrade
                  ? require('../../../../Assets/ICONS/onBtn.png')
                  : require('../../../../Assets/ICONS/offBtn.png')
              }
            />
          </TouchableOpacity>
          <MyText style={{fontSize: RFValue(15), marginLeft: 15, marginTop: 2}}>
            Bitcoin Trade
          </MyText>
        </View>

        <View style={{flexDirection: 'row', marginTop: hp(1), marginBottom: hp(4)}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setisGiftCardTrade(!isGiftCardTrade)}>
            <Image
              style={{
                resizeMode: 'contain',
                height: wp(8),
                width: wp(17),
              }}
              source={
                isGiftCardTrade
                  ? require('../../../../Assets/ICONS/onBtn.png')
                  : require('../../../../Assets/ICONS/offBtn.png')
              }
            />
          </TouchableOpacity>
          <MyText style={{fontSize: RFValue(15), marginLeft: 15, marginTop: 2}}>
            Giftcard Trade
          </MyText>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handleChange}
          style={{alignSelf: 'center', marginTop: 0}}>
          <MyText
            style={{
              color: '#0c883f',
              fontSize: RFValue(14),
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            SAVE
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

export default SettingModal;

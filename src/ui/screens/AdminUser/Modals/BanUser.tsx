import React from 'react';
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
    isOpen: boolean,
    handleChange: () => void;
    action: ()=> void;
}

const BanUser: React.FC<Props> = props => {
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
            marginTop: hp(1)
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
              onPress={props.handleChange}
            style={{marginLeft: -40}}>
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
            Ban User
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
              backgroundColor: '#dbd9da',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#F1F1F1',
              paddingLeft: 20,
              color: '#000',
              fontSize: 12,
              marginTop: hp(3),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
            }}
            editable={false}
            placeholder={'Jthomas'}
            placeholderTextColor={'#343434'}>
          </TextInput>    

          <SelectDropdown
            data={["Spamming", "Trade too many bad cards", "Sending fake trade screenshots"]}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            renderDropdownIcon={() => {
              return (
                <Image
                  source={require('../../../../Assets/ICONS/dropdwo.png')}
                  style={{width: 10, height: 5}}
                />
              );
            }}
            defaultButtonText={'Reason'}
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: 13,
              color: '#333333',
              fontFamily: 'Nunito-Regular',
            }}
            rowStyle={{backgroundColor: 'white', width: '100%'}}
            rowTextStyle={{fontSize: 15, fontFamily: 'Nunito-Regular'}}
            buttonStyle={{
              backgroundColor: '#ffffff',
              borderWidth: 1.5,
              borderColor: '#F1F1F1',
              borderRadius: 4,
              height: 46,
              width: '100%',
              paddingRight: 10,
              paddingVertical: 10,
              alignSelf: 'center',
              margin: 7,
            }}
          />

          <SelectDropdown
            data={["Permanent", "1 day", "2 days", "1 week", "2 weeks", "1 month", "Pick date"]}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            renderDropdownIcon={() => {
              return (
                <Image
                  source={require('../../../../Assets/ICONS/dropdwo.png')}
                  style={{width: 10, height: 5}}
                />
              );
            }}
            defaultButtonText={'Unban Date'}
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: 13,
              color: '#333333',
              fontFamily: 'Nunito-Regular',
            }}
            rowStyle={{backgroundColor: 'white', width: '100%'}}
            rowTextStyle={{fontSize: 15, fontFamily: 'Nunito-Regular'}}
            buttonStyle={{
              backgroundColor: '#ffffff',
              borderWidth: 1.5,
              borderColor: '#F1F1F1',
              borderRadius: 4,
              height: 46,
              width: '100%',
              paddingRight: 10,
              paddingVertical: 10,
              alignSelf: 'center',
              margin: 7,
              marginBottom: hp(10)
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handleChange}
          style={{alignSelf: 'center', marginTop: 5}}>
          <MyText
            style={{
              color: '#0c883f',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            BAN
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

export default BanUser;

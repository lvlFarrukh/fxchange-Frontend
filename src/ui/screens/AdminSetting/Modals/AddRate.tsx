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
  // action: () => void;
}

const AddRate: React.FC<Props> = props => {
  const [showOnTop, setshowOnTop] = useState(true);

  const countryNames = [
    'US',
    'UK',
    'GERMANY',
    'CANADA',
    'NETHERLAND',
    'AUSTRALIA',
    'SINGAPORE',
    'Ireland',
    'Spain',
    'Belgium',
    'Italy',
    'France',
    'Greece',
    'Portugal',
  ];

  const cardType = ['Phyical', 'Encode', 'Cash Recipt'];

  const cardValue = [
    '10-99',
    '25-99',
    '25-100',
    '51-99',
    '50',
    '50-99',
    '50-100',
    '50-200',
    '50-500',
    '100',
    '150',
    '100-200',
    '100-199',
    '101-500',
    '100-199',
    '100-399',
    '100-500',
    '101-500',
    '200',
    '200-299',
    '200-399',
    '200-500',
    '300-500',
    '200-2000',
    '400-500',
  ];

  const startingCode = [
    '3779',
    '4358',
    '4852',
    '4024',
    '4097',
    '4118',
    '5432',
    '5164',
    '4847',
    '4941',
  ];
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
            Add Rate
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
          <SelectDropdown
            data={countryNames}
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
            defaultButtonText={'Select Country'}
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            rowStyle={{backgroundColor: 'white', width: '100%'}}
            rowTextStyle={{
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#f1f1f1',
              borderRadius: 4,
              height: hp(7),
              width: '100%',
              paddingRight: 10,
              paddingVertical: 10,
              alignSelf: 'center',
              marginTop: 20,
            }}
            dropdownStyle={{
              borderRadius: 10,
            }}
          />

          <SelectDropdown
            data={cardType}
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
            defaultButtonText={'Card Type'}
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            rowStyle={{backgroundColor: 'white', width: '100%'}}
            rowTextStyle={{
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#f1f1f1',
              borderRadius: 4,
              height: hp(7),
              width: '100%',
              paddingRight: 10,
              paddingVertical: 10,
              alignSelf: 'center',
              marginTop: 10,
            }}
            dropdownStyle={{
              borderRadius: 10,
            }}
          />

          <SelectDropdown
            data={cardValue}
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
            defaultButtonText={'Card Value'}
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            rowStyle={{backgroundColor: 'white', width: '100%'}}
            rowTextStyle={{
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#f1f1f1',
              borderRadius: 4,
              height: hp(7),
              width: '100%',
              paddingRight: 10,
              paddingVertical: 10,
              alignSelf: 'center',
              marginTop: 10,
            }}
            dropdownStyle={{
              borderRadius: 10,
            }}
          />

          <SelectDropdown
            data={startingCode}
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
            defaultButtonText={'Starting Code'}
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            rowStyle={{backgroundColor: 'white', width: '100%'}}
            rowTextStyle={{
              fontSize: RFValue(12),
              fontFamily: 'Nunito-Regular',
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#f1f1f1',
              borderRadius: 4,
              height: hp(7),
              width: '100%',
              paddingRight: 10,
              paddingVertical: 10,
              alignSelf: 'center',
              marginTop: 10,
            }}
            dropdownStyle={{
              borderRadius: 10,
            }}
          />

          <TextInput
            style={{
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#F1F1F1',
              paddingLeft: 20,
              color: '#000',
              fontSize: RFValue(12),
              marginBottom: 5,
              fontFamily: 'Nunito-Regular',
              marginTop: 10,
              height: hp(7),
            }}
            placeholder={'Rate e.g 330'}
            placeholderTextColor={'#343434'}></TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setshowOnTop(!showOnTop)}>
            <Image
              style={{
                resizeMode: 'contain',
                height: wp(8),
                width: wp(13),
              }}
              source={
                showOnTop
                  ? require('../../../../Assets/ICONS/onBtn.png')
                  : require('../../../../Assets/ICONS/offBtn.png')
              }
            />
          </TouchableOpacity>
          <MyText style={{fontSize: RFValue(13), marginLeft: 5, marginTop: 5}}>
            Show on Top Rates
          </MyText>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handleChange}
          style={{alignSelf: 'center', marginTop: wp(20)}}>
          <MyText
            style={{
              color: '#0c883f',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            ADD RATE
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

export default AddRate;

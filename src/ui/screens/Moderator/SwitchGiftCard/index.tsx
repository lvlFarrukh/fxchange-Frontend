import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Header from '../../../components/ModeratePageCard/Header';
import Style from '../CardDetails/Style';

// const {width1, height1} = Dimensions.get('screen');
const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
  const countryNames = [
    "US",
    "UK",
    "GERMANY",
    "CANADA",
    "NETHERLAND",
    "AUSTRALIA",
    "SINGAPORE",
    "Ireland",
    "Spain",
    "Belgium",
    "Italy",
    "France",
    "Greece",
    "Portugal"
  ]

  const cardTypes = [
    "ITUNES",
    "STEAM",
    "GOOGLE PLAY",
    "SEPHORA",
    "AMERICAN EXPRESS",
    "VANILLA",
    "WALMART",
    "VISA",
    "EBAY",
    "AMAZON",
    "NORDSTROM",
    "NIKE",
    "FOOTLOCKER",
  ]
  return (
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: '#d65d0e',
        }}>
        <StatusBar translucent backgroundColor="#d65d0e" />
        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'Switch Giftcard'}
        />
    <ScrollView>

        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            height: height < 600 ? '100%' : height,
            width: width,
            backgroundColor: '#ffffff',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
          }}>
          <Image
            source={require('../../../../Assets/CARDS/itunes.png')}
            style={{
              width: 52,
              height: 52,
              alignSelf: 'center',
              marginTop: 35,
            }}
          />

          <View style={{marginTop: 16}}>
          <SelectDropdown
              // disabled={true}
              data={[
                'ITUNES',
                'STEAM',
                'GOOGLE PLAY',
                'SEPHORA',
                'AMERICAN EXPRESS',
                'VANILLA',
                'WALMART',
                'VISA',
                'EBAY',
                'AMAZON',
                'NORDSTROM',
                'NIKE',
                'FOOTLOCKER',
              ]}
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
              defaultButtonText={'ITUNES'}
              buttonTextStyle={{
                textAlign: 'left',
                fontSize: 13,
                paddingLeft: 10,
                color:'#333333',
                fontFamily:'Nunito-Regular'
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15, fontFamily:'Nunito-Regular'}}
              buttonStyle={{
                backgroundColor: '#ffffff',
                borderWidth: 1.5,
                borderColor: '#F1F1F1',
                borderRadius: 4,
                height: 46,
                width: '80%',
                paddingRight: 10,
                paddingVertical: 10,
                alignSelf: 'center',
                margin: 7,
              }}
              dropdownStyle={{
                borderRadius: 10,
              }}
            />

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
              defaultButtonText={'Card Country'}
              buttonTextStyle={{
                textAlign: 'left',
                fontSize: 13,
                paddingLeft: 10,
                color:'#333333',
                fontFamily:'Nunito-Regular'
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15, fontFamily:'Nunito-Regular'}}
              buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 1.5,
                borderColor: '#F1F1F1',
                borderRadius: 4,
                height: 46,
                width: '80%',
                paddingRight: 10,
                paddingVertical: 10,
                alignSelf: 'center',
                margin: 7,
              }}
              dropdownStyle={{
                borderRadius: 10,
              }}
            />

            <SelectDropdown
              data={cardTypes}
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
                fontSize: 13,
                paddingLeft: 10,
                color:'#333333',
                fontFamily:'Nunito-Regular'
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15, fontFamily:'Nunito-Regular'}}
              buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 1.5,
                borderColor: '#F1F1F1',
                borderRadius: 4,
                height: 46,
                width: '80%',
                paddingRight: 10,
                paddingVertical: 10,
                alignSelf: 'center',
                margin: 7,
              }}
              dropdownStyle={{
                borderRadius: 10,
              }}
            />

            <TextInput
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 4,
                borderColor: '#F1F1F1',
                borderWidth: 1.5,
                width: '80%',
                height: 50,
                margin: 7,
                paddingLeft: 30,
                fontFamily:'Nunito-Regular'
              }}
              underlineColorAndroid="transparent"
              placeholder="Card Value"
              placeholderTextColor="#333333"
              textAlign={'left'}
              numberOfLines={2}
              multiline={true}
            />
          </View>

          <View style={{alignSelf: 'center', marginTop: 50}}>
            <MyText
              style={{
                textAlign: 'center',
                fontSize: 11,
                color: 'black',
              }}>
              Naira Value (330/5)
            </MyText>
            <MyText
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 5,
              }}>
              N33,000
            </MyText>
          </View>

          <View style={{marginTop: 110}}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('CardDetails');
              }}
              style={{
                backgroundColor: '#d65d0e',
                width: '80%',
                alignSelf: 'center',
                height: 36,
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <MyText
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                SWITCH
              </MyText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 50}}></View>
    </ScrollView>

      </View>
  );
};

export default index;

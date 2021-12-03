import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  Button,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import styles from './Style';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

const giftCards = ({activeButton, bitcoin, giftCards}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState('Select');
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

  const cardTypes = [
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
  ];

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      <View style={styles.giftCardBodyPatOne}>
        <ScrollView style={{marginTop: 5}}>
          <View style={[styles.partOneButtons]}>
            <MyText
              style={[styles.partOneButton, styles.JoinLeft, {...giftCards}]}
              onPress={() => {
                activeButton('giftCards');
              }}>
              Giftcards
            </MyText>

            <MyText
              style={[styles.partOneButton, styles.JoinRight, {...bitcoin}]}
              onPress={() => {
                activeButton('bitcoin');
              }}>
              Bitcoin
            </MyText>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              // textAlignVertical: 'top',
              marginLeft: 28,

              borderRadius: 4,
              width: '85%',

              marginTop: 20,
              marginBottom: 15,

              // paddingTop:20,
            }}>
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
              defaultButtonText={'Select Card'}
              buttonTextStyle={{
                textAlign: 'left',
                fontSize: 14,
                fontWeight: '400',
                fontFamily:'Nunito-Regular'
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15, fontFamily:'Nunito-Regular'}}
              buttonStyle={{
                backgroundColor: 'white',
                width: '100%',
                paddingRight: 10,
                paddingVertical: 10,
                height: 45,
                borderWidth: 1.5,
                borderColor: '#F1F1F1',
              }}
              dropdownStyle={{
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              // textAlignVertical: 'top',
              marginLeft: 28,

              borderRadius: 4,
              width: '85%',

              marginBottom: 15,
            }}>
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
                fontSize: 14,
                fontWeight: '400',
                fontFamily:'Nunito-Regular'
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15, fontFamily:'Nunito-Regular'}}
              buttonStyle={{
                backgroundColor: 'white',
                width: '100%',
                paddingRight: 10,
                paddingVertical: 10,
                height: 45,
              }}
              dropdownStyle={{
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              // textAlignVertical: 'top',
              borderRadius: 4,
              marginLeft: 28,

              width: '85%',

              marginBottom: 15,
              // paddingTop:20,
            }}>
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
                fontSize: 14,
                fontWeight: '400',
                fontFamily:'Nunito-Regular'
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15, fontFamily:'Nunito-Regular'}}
              buttonStyle={{
                backgroundColor: 'white',
                width: '100%',
                paddingRight: 10,
                paddingVertical: 10,
                height: 45,
              }}
              dropdownStyle={{
                borderRadius: 10,
              }}
            />
          </View>

          <TextInput
            style={{
              backgroundColor: 'white',
              // textAlignVertical: 'top',
              borderRadius: 4,
              marginLeft: 28,
              color: 'black',
              height: 45,
              width: '85%',
              fontSize: 14,
              fontWeight: '400',

              marginBottom: 25,

              // paddingTop:20,
              paddingLeft: 19,
              fontFamily:'Nunito-Regular'
            }}
            underlineColorAndroid="transparent"
            placeholder="Enter Account in USD"
            placeholderTextColor="black"
            textAlign={'left'}
            numberOfLines={2}
            multiline={true}
          />
          <View style={styles.checkrateButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.checkrateButton}>
              <MyText style={{color: 'white', fontSize: 13}}>CHECK RATE</MyText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {
        600 < height ? (
          <View style={[styles.giftCardsBodyPartTwo,]}>
            <MyText style={{marginTop: 23, fontSize: 10}}>Estimate rate</MyText>
            <MyText
              style={{
                fontSize: 20,
                color: 'black',
                marginTop: 10,
                fontWeight: '600',
              }}>
              N3,303,330
            </MyText>
          </View>
        ) 
        : (
          !isKeyboardVisible && (
            <View style={styles.giftCardsBodyPartTwo}>
            <MyText style={{marginTop: 23, fontSize: 10}}>Estimate rate</MyText>
            <MyText
              style={{
                fontSize: 20,
                color: 'black',
                marginTop: 10,
                fontWeight: '600',
              }}>
              N3,303,330
            </MyText>
          </View>
          )
        )
        
      } 
    </>
  );
};
export default giftCards;

import React from 'react';
import {View, Text, Dimensions, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../../components/ModeratePageCard/Header';
import Style from '../CardDetails/Style';

const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{height: height, width: width, backgroundColor: '#d65d0e'}}>
        <Header
          style={{marginTop: 10}}
          navigation={navigation}
          Heading={'Switch Giftcard'}
          style={{marginTop: 0}}
        />
        <View
          style={{
            marginTop: 10,
            height: height - 60,
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
            <TextInput
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 4,
                borderColor: 'lightgray',
                borderWidth: 0.8,
                width: '80%',
                height: 46,
                margin: 7,
                paddingLeft: 30,
              }}
              underlineColorAndroid="transparent"
              placeholder="ITunes"
              placeholderTextColor="#676767"
              textAlign={'left'}
              numberOfLines={2}
              multiline={true}
            />

            <SelectDropdown
              data={[0, 1]}
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
                fontSize: 13,
                paddingLeft: 10,
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15}}
              buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 0.8,
                borderColor: 'lightgray',
                borderRadius: 4,
                height: 46,
                width: '80%',
                paddingRight: 10,
                paddingVertical: 10,
                alignSelf: 'center',
                margin: 7,
              }}
            />

            <SelectDropdown
              data={[0, 1]}
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
              }}
              rowStyle={{backgroundColor: 'white', width: '100%'}}
              rowTextStyle={{fontSize: 15}}
              buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 0.8,
                borderColor: 'lightgray',
                borderRadius: 4,
                height: 46,
                width: '80%',
                paddingRight: 10,
                paddingVertical: 10,
                alignSelf: 'center',
                margin: 7,
              }}
            />

            <TextInput
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 4,
                borderColor: 'lightgray',
                borderWidth: 0.5,
                width: '80%',
                height: 50,
                margin: 7,
                paddingLeft: 30,
              }}
              underlineColorAndroid="transparent"
              placeholder="Card Value"
              placeholderTextColor="#676767"
              textAlign={'left'}
              numberOfLines={2}
              multiline={true}
            />
          </View>

          <View style={{alignSelf: 'center', marginTop: 50}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 11,
                color: 'black',
              }}>
              Naira Value (330/5)
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 5,
              }}>
              N33,000
            </Text>
          </View>

          <View style={{marginTop: 110}}>
              <TouchableOpacity
                style={{
                    backgroundColor: '#d65d0e',
                    width: '80%',
                    alignSelf: 'center',
                    height: 36,
                    borderRadius: 4,
                    justifyContent: 'center'
                }}
              >
                  <Text style={{
                      color: 'white',
                      textAlign: 'center'
                  }}>SWITCH</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

import React, { Fragment } from 'react';
import {View, Text, Dimensions, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../components/ModeratePageCard/Header';
import Navbar from '../../components/Navbars/Navbar';
// import Style from '../CardDetails/Style';

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
    <Fragment>
    <View style={{height: height, width: width, backgroundColor: '#1bb76d'}}>
      <ScrollView>
        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'Upload Giftcard'}
        />
        <View
          style={{
            marginTop: 10,
            height: height,
            width: width,
            backgroundColor: '#ffffff',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
          }}>
          <Image
            source={require('../../../Assets/CARDS/itunes.png')}
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
                borderColor: '#F1F1F1',
                borderWidth: 0.8,
                width: '80%',
                height: 46,
                margin: 7,
                paddingLeft: 30,
                color: 'black',
                fontSize: 12,
              }}
              underlineColorAndroid="transparent"
              placeholder="ITUNES"
              placeholderTextColor="#676767"
              textAlign={'left'}
              // numberOfLines={2}
              // multiline={true}
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
                    source={require('../../../Assets/ICONS/dropdwo.png')}
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
                borderColor: '#F1F1F1',
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
                    source={require('../../../Assets/ICONS/dropdwo.png')}
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
                borderColor: '#F1F1F1',
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
                borderColor: '#F1F1F1',
                borderWidth: 0.5,
                width: '80%',
                height: 50,
                margin: 7,
                paddingLeft: 30,
                color: 'black',
                fontSize: 12,
              }}
              underlineColorAndroid="transparent"
              placeholder="Card Value"
              placeholderTextColor="#676767"
              textAlign={'left'}
              numberOfLines={2}
              // multiline={true}
            />

            <TextInput
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 4,
                borderColor: '#F1F1F1',
                borderWidth: 0.5,
                width: '80%',
                height: 50,
                margin: 7,
                paddingLeft: 30,
                color: 'black',
                fontSize: 12,
              }}
              underlineColorAndroid="transparent"
              placeholder="Card Code (Optional)"
              placeholderTextColor="#676767"
              textAlign={'left'}
              numberOfLines={2}
              // multiline={true}
            />
          </View>

          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              marginVertical: 10,
              width: '80%',
              alignSelf: 'center',
            }}>
            <View
                  style={{
                    backgroundColor: 'white',
                    margin: 2,
                    width: '32%',
                    height: width - 300,
                  }}>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute',
                      zIndex: 1,
                      margin: 1,}}>

                    <View
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 20,
                        backgroundColor: 'black',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../../../Assets/ICONS/close2.jpeg')}
                        style={{
                          width: 10,
                          height: 10,
                          alignSelf: 'center',
                        }}
                      />
                    </View>
                    </TouchableOpacity>

                  <Image
                    source={require('../../../Assets/IMG_3151.jpg')}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
            <View style={{margin: 2, width: '32%', height: width - 300}}>
              {/* Upload Button */}
              <TouchableOpacity
              activeOpacity={0.9}
                style={[
                  {
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 50},
                    shadowOpacity: 1,
                    shadowRadius: 5,
                    elevation: 5,
                  },
                  {
                    backgroundColor: '#fefefe',
                    width: 42,
                    height: 42,
                    borderRadius: 50,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: '400',
                    color: '#1bb76d',
                    alignSelf: 'center',
                    marginTop: -7
                  }}>
                  +
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#1bb76d',
                  fontSize: 10,
                  fontWeight: '500',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Upload Image
              </Text>
            </View>
          </View>

          <View
            style={{
              alignContent: 'center',
              marginTop: 12,
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../../Assets/ICONS/info_icon.png')}
              style={{
                marginRight: 5,
                width: 15,
                height: 15,
              }}
            />
            <Text style={{fontSize: 8, paddingTop: 1}}>
              Only One card is allowed per upload
            </Text>
          </View>

          <View style={{marginTop: 30}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#1bb76d',
                width: '80%',
                alignSelf: 'center',
                height: 36,
                borderRadius: 4,
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate('ItunesGiftCardScreen');
              }}
              >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} activePage={'trade'} backgroundColor={'green'}/>
      <View style={{marginBottom: 44}}></View>
    </View>
      </Fragment>
  );
};

export default index;

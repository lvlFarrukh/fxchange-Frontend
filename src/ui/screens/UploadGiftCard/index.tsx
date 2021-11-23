import React, {Fragment} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../components/DefaultTextComponent/MyText';
import Header from '../../components/ModeratePageCard/Header';
import Navbar from '../../components/Navbars/Navbar';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const index = ({navigation}) => {
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
  console.log(height)
  return (
    <Fragment>
      <View
        style={{
          height: "100%",
          width: width,
          backgroundColor: '#1bb76d',
        }}>
        <StatusBar translucent backgroundColor="transparent" />

        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'Upload Giftcard'}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 10,
              height: 600 < height ? height + StatusBar.currentHeight : '100%' ,
              width: width,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 35,
              borderTopLeftRadius: 35,
            }}>
            <Image
              source={require('../../../Assets/CARDS/itunes.png')}
              style={{
                width: wp(15),
                height: wp(15),
                alignSelf: 'center',
                marginTop: 35,
              }}
            />

            <View style={{marginTop: 16}}>
              <TextInput
                style={{
                  backgroundColor: '#F1F1F1',
                  alignSelf: 'center',
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 1.5,
                  width: '80%',
                  height: 46,
                  margin: 7,
                  paddingLeft: 30,
                  color: 'black',
                  fontSize: 12,
                  fontFamily:'Nunito-Regular'
                }}
                underlineColorAndroid="transparent"
                placeholder="ITUNES"
                placeholderTextColor="#333333"
                textAlign={'left'}
                editable={false}
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
                defaultButtonText={'Card Country'}
                buttonTextStyle={{
                  textAlign: 'left',
                  fontSize: 13,
                  paddingLeft: 10,
                  color: '#333333',
                  fontFamily:'Nunito-Regular'
                }}
                rowStyle={{backgroundColor: 'white', width: '100%', fontFamily:'Nunito-Regular'}}
                rowTextStyle={{fontSize: 15}}
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
                  color: '#333333',
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
              />

              <SelectDropdown
                data={[]}
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
                defaultButtonText={'Starting Code'}
                buttonTextStyle={{
                  textAlign: 'left',
                  fontSize: 13,
                  paddingLeft: 10,
                  color: '#333333',
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
                  color: 'black',
                  fontSize: 12,
                  fontFamily:'Nunito-Regular'
                }}
                underlineColorAndroid="transparent"
                placeholder="Card Value"
                placeholderTextColor="#333333"
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
                  borderWidth: 1.5,
                  width: '80%',
                  height: 50,
                  margin: 7,
                  paddingLeft: 30,
                  color: 'black',
                  fontSize: 12,
                  fontFamily:'Nunito-Regular'
                }}
                underlineColorAndroid="transparent"
                placeholder="Card Code (Optional)"
                placeholderTextColor="#333333"
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
                  // width: '32%',
                  // height: width - 300,
                  width: wp(20),
                  height: wp(15),
                }}>
                <ImageBackground
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../Assets/IMG_3151.jpg')}>
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
                </ImageBackground>
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
                      width: 35,
                      height: 35,
                      borderRadius: 50,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    },
                  ]}>
                  <MyText
                    style={{
                      fontSize: 25,
                      fontWeight: '600',
                      color: '#1bb76d',
                      alignSelf: 'center',
                      // marginTop: -7
                    }}>
                    +
                  </MyText>
                </TouchableOpacity>
                <MyText
                  style={{
                    color: '#1bb76d',
                    fontSize: 10,
                    fontWeight: '500',
                    alignSelf: 'center',
                    marginTop: 5,
                  }}>
                  Upload Image
                </MyText>
              </View>

              <View
                style={{
                  // alignContent: 'center',
                  flexDirection: 'row',
                  // alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../Assets/ICONS/info_icon.png')}
                  style={{
                    marginRight: 5,
                    width: 15,
                    height: 15,
                    marginLeft: -10,
                  }}
                />
                <MyText style={{fontSize: 8}}>
                  Only one{' '}
                  <MyText
                    style={{fontWeight: '700', fontFamily: 'Nunito-Regular'}}>
                    ITUNES
                  </MyText>{' '}
                  card {'\n'}image is allowed in this{'\n'}section
                </MyText>
              </View>
            </View>

            <View style={{marginTop: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1bb76d',
                  width: '80%',
                  alignSelf: 'center',
                  marginBottom: 20,
                  height: 36,
                  borderRadius: 4,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('ItunesGiftCardScreen');
                }}>
                <MyText
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  SUBMIT
                </MyText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* <Navbar
          navigation={navigation}
          activePage={'trade'}
          backgroundColor={'green'}
        /> */}
      </View>
    </Fragment>
  );
};

export default index;

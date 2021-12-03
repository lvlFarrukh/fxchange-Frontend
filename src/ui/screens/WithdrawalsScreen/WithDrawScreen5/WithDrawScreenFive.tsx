import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react';
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
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
  Platform,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Navbar from '../../../components/Navbars/Navbar';
import styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');

const WithDrawScreenFive = ({navigation}) => {
  console.log('with drawel screen');

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
    <Fragment>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerUpperArea}>
              <TouchableOpacity
                onPress={() => {
                  // navigation.goBack();
                  navigation.navigate('Setting')
                }}>
                <Image
                  source={require('../../../../Assets/ICONS/arrow=white.png')}
                  style={{
                    width: 25,
                    height: 15,
                    marginTop: 6,
                    //marginRight: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainBody}>
            <View style={styles.headerHeadingContainer}>
              <MyText style={styles.headerHeading2}>H</MyText>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: '100%'}}>
              <View style={styles.mainBodyContent}>
                <MyText style={{fontSize: 10, color: '#8e8c8d'}}>
                  PROFILE
                </MyText>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    height: 45,
                    marginVertical: 13,
                    color: 'black',
                    paddingLeft: 10,
                    fontFamily: 'Nunito-Regular',
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Full Name"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    // textAlignVertical: 'top',
                    borderRadius: 3,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    height: 45,
                    marginVertical: 5,
                    color: 'black',
                    paddingLeft: 10,
                    fontFamily: 'Nunito-Regular',
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Phone Number"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    // textAlignVertical: 'top',
                    borderRadius: 3,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    height: 45,
                    marginVertical: 13,
                    color: 'black',
                    paddingLeft: 10,
                    fontFamily: 'Nunito-Regular',
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Email Address"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />
                {/* <View style={styles.updatePassword}>
                <TouchableOpacity style={styles.updatePasswordButton}>
                  <MyText style={{color: 'white', fontSize: 15}}>UPDATE</MyText>
                </TouchableOpacity>
              </View> */}
              </View>
              <View style={styles.mainBodyContent}>
                <MyText style={{fontSize: 10, color: '#8e8c8d'}}>
                  BANK DETAILS
                </MyText>

                {/* <TextInput
                  style={{
                    backgroundColor: 'white',
                    // textAlignVertical: 'top',
                    borderRadius: 3,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    height: 45,
                    marginVertical: 13,
                    color: 'black',
                    paddingLeft: 10,
                    fontFamily:'Nunito-Regular'
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Select Bank"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                /> */}

                <SelectDropdown
                  data={[
                    'Access Bank',
                    'Eco Bank',
                    'Heritage Bank',
                    'First Bank of Nigeria (FBN)',
                    'Polaris Bank',
                    'Keystone Bank',
                    'Kuda',
                    'Jaiz Bank',
                    'Sterling Bank',
                    'Union Bank of Nigeria',
                    'United Bank for Africa (UBA)',
                    'Wema Bank',
                    'Zenith Bank',
                    'Fidelity Bank',
                    'Stanbic IBTC',
                    'Standard Chartered Bank Nigeria',
                    'Providus Bank',
                    'First City Monument Bank (FCMB)',
                    'Guarantee Trust Bank (GTB)',
                    'V bank',
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
                  defaultButtonText={'Select Bank'}
                  buttonTextStyle={{
                    textAlign: 'left',
                    fontSize: 14,
                    fontFamily: 'Nunito-Regular',
                    color: 'black',
                  }}
                  rowStyle={{backgroundColor: 'white', width: '100%'}}
                  rowTextStyle={{
                    // fontSize: RFValue(12),
                    fontFamily: 'Nunito-Regular',
                    color: 'black',
                  }}
                  buttonStyle={{
                    backgroundColor: 'white',
                    borderWidth: 1.5,
                    borderColor: '#f1f1f1',
                    borderRadius: 4,
                    height: 45,
                    width: '100%',
                    paddingRight: -10,
                    paddingVertical: 10,
                    alignSelf: 'center',
                    marginTop: 20,
                    marginVertical: 5,
                  }}
                  dropdownStyle={{
                    borderRadius: 10,
                  }}
                />

                <TextInput
                  style={{
                    backgroundColor: 'white',
                    // textAlignVertical: 'top',
                    borderRadius: 3,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    height: 45,
                    marginVertical: 5,
                    color: 'black',
                    paddingLeft: 10,
                    fontFamily: 'Nunito-Regular',
                    marginTop: 12,
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Account Number"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />

                <TextInput
                  style={{
                    backgroundColor: 'white',
                    // textAlignVertical: 'top',
                    borderRadius: 3,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    height: 45,
                    marginVertical: 12,
                    color: 'black',
                    paddingLeft: 10,
                    fontFamily: 'Nunito-Regular',
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Name on Account"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />

                {/* <TextInput
                style={{
                  backgroundColor: 'white',
                  // textAlignVertical: 'top',
                  borderRadius: 3,
                  borderColor: '#F1F1F1',
                  borderWidth: 1.5,
                  width: '92%',
                  height: 45,
                  marginVertical: 13,
                  color: 'black',
                  paddingLeft: 10,
                }}
                underlineColorAndroid="transparent"
                placeholder="Account Number"
                placeholderTextColor="#333333"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              />
              <TextInput
                style={{
                  backgroundColor: 'white',
                  // textAlignVertical: 'top',
                  borderRadius: 3,
                  borderColor: '#F1F1F1',
                  borderWidth: 1.5,
                  width: '92%',
                  height: 45,
                  marginVertical: 13,
                    color: 'black',
                  paddingLeft: 10,
                }}
                underlineColorAndroid="transparent"
                placeholder="Name on Account"
                placeholderTextColor="#333333"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              /> */}
                <View style={styles.updatePassword}>
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('AdminWithdrawalHome')}
                    style={styles.updatePasswordButton}>
                    <MyText style={{color: 'white', fontSize: 13}}>
                      UPDATE
                    </MyText>
                  </TouchableOpacity>
                </View>
              </View>
              {height < 680 ? (
                isKeyboardVisible ? (
                  <View style={{height: 350}}></View>
                ) : (
                  <View style={{height: 150}}></View>
                )
              ) : (
                isKeyboardVisible && (
                  <View
                    style={{
                      height: 400,
                    }}></View>
                )
              )}

              <View></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default WithDrawScreenFive;

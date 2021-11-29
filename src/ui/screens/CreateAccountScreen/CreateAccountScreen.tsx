import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import Header from '../../components/ModeratePageCard/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('screen');

const CreateAccountScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, height: height , width: width }}>
      <SafeAreaView style={{flex: 1, height: height, width: width , backgroundColor: '#1bb76d' }}>
          <View style={{ height: height*0.25 }}>
            <Header navigation={navigation} />
            <View style={{ alignSelf: 'center' }}>
              <Image
                source={require('../../../Assets/fejoraLogo-white.png')}
                style={styles.image}
              />
            </View>
          </View>
        <ScrollView >

          <View
            style={[
              styles.whiteCardBg,
              { height: height*0.75 },
            ]}>
            <View>
              <MyText style={[styles.Heading]}>CREATE AN ACCOUNT</MyText>

              <View style={styles.BottomRowContainer}>
                <View></View>
                <MyText style={{ fontSize: RFValue(10), color: '#000' }}>
                  Click Here to
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate('SignInScreen');
                    }}>
                    <Text style={{ color: '#66b486', fontFamily:'Nunito-Regular' }}> LOGIN</Text>
                  </TouchableNativeFeedback>
                </MyText>
              </View>
            </View>

              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Full Name'}
                placeholderTextColor={'#333333'}></TextInput>

              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Email Address'}
                placeholderTextColor={'#333333'}></TextInput>

              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Phone Number'}
                placeholderTextColor={'#333333'}></TextInput>

              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Password'}
                placeholderTextColor={'#333333'}></TextInput>

              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Repeat Password'}
                placeholderTextColor={'#333333'}></TextInput>

              <View>
                <TouchableOpacity
                activeOpacity={0.9}
                  style={{alignItems: 'center'}}
                  
                >
                  <MyText style={styles.GreenButton}>CREATE ACCOUNT</MyText>
                </TouchableOpacity>
              </View>

            {/* <View style={styles.lastViewStyle}>
                                <MyText style={{ fontSize: 12, }}>Having any troubles?
                                    <TouchableNativeFeedback>
                                        <MyText style={{ color: '#d5431c' }}>contact us</MyText>
                                    </TouchableNativeFeedback>
                                </MyText>
                            </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 50,
    marginTop: 25,
  },
  whiteCardBg: {
    //flex: 75,
    //height: '75%',
    backgroundColor: '#fafafa',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: width,
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  Heading: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(13),
    color: '#333333',
  },
  TextInputStyle: {
    backgroundColor: '#fafafa',
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: '#F1F1F1',
    paddingLeft: 10,
    color: 'black',
    height: hp(7),
    marginBottom: 10,
    fontSize: RFValue(11),
    fontFamily:'Nunito-Regular'
  },
  GreenButton: {
    // alignSelf:'center',
    // backgroundColor:'#1bb76d',
    // width:'100%'
    borderWidth: 1,
    borderColor: '#1bb76d',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 9,
    fontSize: RFValue(12),
    // fontWeight: '700',
    color: '#fafafa',
    backgroundColor: '#1bb76d',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 50
  },
  BottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 10,
  },
  lastViewStyle: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});
export default CreateAccountScreen;

import React, {useContext, useEffect, useMemo, useState} from 'react';
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
import {TouchableHighlight} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/ModeratePageCard/Header';

const {width, height} = Dimensions.get('window');

const SignInScreen = ({navigation}) => {

  return (
    <View style={{flex: 1 , height:height,width:width, backgroundColor: '#fafafa',}}>
      <ScrollView>
          <SafeAreaView style={{flex: 1, height: height, backgroundColor: '#1bb76d'}}>
            <View style={{flex: 25}}>
              <Header navigation={navigation} />
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../Assets/whiteLogo.png')}
                  style={styles().image}
                />
              </View>
            </View>
            <View
              style={[
                styles().whiteCardBg,
                {flex: 75},
              ]}>
              <Text style={[styles().Heading]}>
                LOGIN TO YOUR ACCOUNT
              </Text>

              <TextInput
                style={styles().TextInputStyle}
                placeholder={'Email or Phone'}
                placeholderTextColor={'#333333'}> 
            </TextInput>

              <TextInput
                style={styles().TextInputStyle}
                placeholder={'Password'}
                placeholderTextColor={'#333333'}
                //onChangeText={text => setTitle(text)}
                //value={Title}
              ></TextInput>

              <View>
                <TouchableOpacity
                activeOpacity={0.9}
                  style={{alignItems: 'center'}}
                  onPress={() => {
                    navigation.navigate('DashBoardScreen');
                  }}>
                  <Text style={styles().GreenButton}>
                    LOGIN
                  </Text>
                </TouchableOpacity>

                <View style={styles().BottomRowContainer}>
                  <View>
                    <Text style={{fontSize: 10}}>
                      Don't have an account?
                      <TouchableNativeFeedback
                        onPress={() => {
                          navigation.navigate('CreateAccountScreen');
                        }}>
                        <Text style={{color: '#66b486'}}> SIGNUP</Text>
                      </TouchableNativeFeedback>
                    </Text>
                  </View>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate('ForgetPasswordScreen');
                    }}>
                    <Text style={{fontSize: 10, color: '#2f568f'}}>
                      Forget Password?
                    </Text>
                  </TouchableNativeFeedback>
                </View>
              </View>

              <View style={styles().lastViewStyle}>
                <Text style={{fontSize: 12}}>
                  Having any troubles?
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate('WithdrawalsScreenTwo');
                    }}>
                    <Text style={{color: '#d5431c'}}>contact us</Text>
                  </TouchableNativeFeedback>
                </Text>
              </View>
            </View>
          </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    image: {
      width: 150,
      height: 50,
      marginTop: 22,
    },
    whiteCardBg: {
      //flex: 75,
      //height: '75%',
      marginTop: '8%',
      backgroundColor: '#fafafa',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      width: width,
      alignSelf: 'flex-end',
      justifyContent: 'space-evenly',
      padding: 30,
    },
    Heading: {
      fontWeight: '700',
      alignSelf: 'center',
      fontSize: 13,
      color: '#343434',
    //   marginBottom: 5,
    },
    TextInputStyle: {
        height: 46,
      backgroundColor: '#Fafafa',
      borderWidth: 1.5,
      borderRadius: 3,
      paddingLeft: 10,
      color: 'black',
    //   marginTop: 5,
      borderColor: '#F1F1F1',
      fontSize: 12, 
    },
    GreenButton: {
      // alignSelf:'center',
      // backgroundColor:'#1bb76d',
      // width:'100%'
      height: 36,
      borderWidth: 1,
      borderColor: '#1bb76d',
      borderRadius: 3,
      paddingHorizontal: 10,
    //   paddingVertical: 15,
      fontSize: 12.5,
      paddingTop: 10,
    //   fontWeight: '700',
      color: '#fafafa',
      backgroundColor: '#1bb76d',
      alignSelf: 'center',
      textAlign: 'center',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 50},
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 5,
      //marginTop: 20,
      //marginBottom: 10
    },
    BottomRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    lastViewStyle: {
      marginTop: 50,
      marginBottom: 10,
      alignSelf: 'center',
    }
  });
export default SignInScreen;

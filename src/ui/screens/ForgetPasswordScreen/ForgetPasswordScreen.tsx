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

const {width, height} = Dimensions.get('screen');

const ForgetPasswordScreen = ({navigation}) => {
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
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'rgb(10, 138, 64)'}}>
          <SafeAreaView style={{flex: 1}}>
            <View style={{height: (height * 27) / 100}}>
              <Header navigation={navigation} />
              <View style={{alignSelf: 'center'}}>
                <Image
                  source={require('../../../Assets/whiteLogo.png')}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={[styles.whiteCardBg, {height: (height * 75) / 100}]}>
              <Text style={[styles.Heading]}>FORGET PASSWORD?</Text>

              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: -15,
                  fontSize: 12,
                  color: '#333333',
                }}>
                A link will be sent to your email address
              </Text>

              <TextInput
                style={styles.TextInputStyle}
                placeholder={'Email or Phone'}
                placeholderTextColor={'#333333'}></TextInput>

              <View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{alignItems: 'center'}}
                  onPress={() => {
                    navigation.navigate('ModeratorScreen');
                  }}>
                  <Text style={styles.GreenButton}>SEND</Text>
                </TouchableOpacity>
              </View>

              <View style={{height: '50%'}}></View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 50,
    marginTop: 18,
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
    paddingTop: 5,
  },
  Heading: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 13,
    color: '#343434',
    marginTop: -6,
  },
  TextInputStyle: {
    height: 46,
    backgroundColor: '#fafafa',
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#F1F1F1',
    paddingLeft: 10,
    color: 'black',
    fontSize: 12,
    marginTop: -5,
  },
  GreenButton: {
    // alignSelf:'center',
    // backgroundColor:'#0a8a40',
    // width:'100%'
    marginTop: -5,
    borderWidth: 1,
    borderColor: '#1bb76d',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 13,
    // fontWeight: '700',
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
    marginTop: 20,
    alignSelf: 'center',
  },
});
export default ForgetPasswordScreen;

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
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
} from 'react-native';
import Navbar from '../../../components/Navbars/Navbar';
import styles from './Style';

const {width, height} = Dimensions.get('screen');

const WithDrawScreenFour = ({navigation}) => {
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
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#1bb76d" />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <SafeAreaView
            style={{
              backgroundColor: '#1bb76d',
              flex: isKeyboardVisible ? 0.6 : 0.9,
            }}>
            <View style={[styles.header, {height: '10%'}]}>
              <View style={styles.headerUpperArea}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={require('../../../../Assets/ICONS/arrow=white.png')}
                    style={{
                      width: 30,
                      height: 20,
                      marginTop: 6,
                      marginRight: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.mainBody, {height: '90%'}]}>
              <View style={styles.mainBodyContent}>
                <View style={{paddingHorizontal: 10}}>
                  <View
                    style={{
                      backgroundColor: '#062529',
                      borderRadius: 100,
                      height: 45,
                      width: 45,
                      alignContent: 'center',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: -45, //35+20 => 60/2=30 & 20 to cover margin top of mainBody
                      marginBottom: 10,
                    }}>
                    <Text style={styles.headerHeading2}>H</Text>
                  </View>
                  <Text style={{fontSize: 11, color: '#a4a2a3'}}>
                    CHANGE PASSWORD
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      borderColor: '#F1F1F1',
                      borderWidth: 1.5,
                      width: '100%',
                      color: 'black',
                      marginVertical: 15,
                      paddingLeft: 10,
                      height: 48,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="Current Passowrd"
                    placeholderTextColor="#333333"
                    textAlign={'left'}
                    numberOfLines={2}
                    multiline={true}
                  />
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      borderColor: '#F1F1F1',
                      borderWidth: 1.5,
                      width: '100%',
                      color: 'black',
                      marginBottom: 15,
                      paddingLeft: 10,
                      height: 48,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="New Password"
                    placeholderTextColor="#333333"
                    textAlign={'left'}
                    numberOfLines={2}
                    multiline={true}
                  />
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      borderColor: '#F1F1F1',
                      borderWidth: 1.5,
                      width: '100%',
                      color: 'black',
                      marginBottom: 15,
                      paddingLeft: 10,
                      height: 48,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="Repeat New Paswword"
                    placeholderTextColor="#333333"
                    textAlign={'left'}
                    numberOfLines={2}
                    multiline={true}
                  />
                </View>

                <View style={[{}]}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.updatePasswordButton}>
                    <Text style={{color: 'white', fontSize: 15}}>UPDATE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
      <Navbar
        navigation={navigation}
        activePage={'more'}
        backgroundColor={'green'}
      />
    </KeyboardAvoidingView>
  );
};

export default WithDrawScreenFour;

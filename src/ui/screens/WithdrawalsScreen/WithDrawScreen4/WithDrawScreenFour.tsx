import React, { useContext, useEffect, useMemo, useState } from 'react';
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
import styles from './Style';

const { width, height } = Dimensions.get('screen');

const WithDrawScreenFour = ({ navigation }) => {
  console.log('with drawel screen');

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (

    <KeyboardAvoidingView style={{ flex: 1 , backgroundColor:'#fff'}}>
      <StatusBar backgroundColor="#0a8a40"/>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{flex:1}}> 
          <SafeAreaView
            style={{ backgroundColor: '#0a8a40', flex:isKeyboardVisible? 0.6 :0.9 }}
          >
            <View style={[styles.header , {height:'10%'}]}>
              <View style={styles.headerUpperArea}>
                <TouchableOpacity
                onPress={()=>{navigation.goBack()}}
                >
                  <Image
                    source={require('../../../../Assets/ICONS/arrow=white.png')}
                    style={{ width: 30, height: 20, marginTop: 6, marginRight: 50 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.mainBody , {height:'90%'}]}>
              <View style={styles.mainBodyContent}>

                <View style={{ paddingHorizontal: 10 }}>
                  <View style={{
                    backgroundColor: '#062529', borderRadius: 100, height: 60, width: 62, alignContent: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -50, //35+20 => 60/2=30 & 20 to cover margin top of mainBody
                    marginBottom: 10
                  }}>
                    <Text style={styles.headerHeading2}>H</Text>
                  </View>
                  <Text style={{ fontSize: 14 }}>CHANGE PASSWORD</Text>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      borderColor: 'rgba(0,0,0,0.2)',
                      borderWidth: 1,
                      width: '100%',
                      marginVertical: 13,
                      paddingLeft: 10,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="Current Passowrd"
                    placeholderTextColor="#676767"
                    textAlign={'left'}
                    numberOfLines={2}
                    multiline={true}
                  />
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      borderColor: 'rgba(0,0,0,0.2)',
                      borderWidth: 1,
                      width: '100%',
                      marginBottom: 13,
                      paddingLeft: 10,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="New Password"
                    placeholderTextColor="#676767"
                    textAlign={'left'}
                    numberOfLines={2}
                    multiline={true}
                  />
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      borderColor: 'rgba(0,0,0,0.2)',
                      borderWidth: 1,
                      width: '100%',
                      marginBottom: 13,
                      paddingLeft: 10,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="Repeat New Paswword"
                    placeholderTextColor="#676767"
                    textAlign={'left'}
                    numberOfLines={2}
                    multiline={true}
                  />
                </View>

                <View style={[{}]}>
                  <TouchableOpacity style={styles.updatePasswordButton}>
                    <Text style={{ color: 'white', fontSize: 15 }}>UPDATE</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

          </SafeAreaView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default WithDrawScreenFour;

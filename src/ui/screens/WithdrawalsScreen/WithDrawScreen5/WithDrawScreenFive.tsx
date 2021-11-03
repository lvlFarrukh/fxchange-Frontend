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
  Platform,
} from 'react-native';
import styles from './Style';

const {width, height} = Dimensions.get('screen');

const WithDrawScreenFive = ({navigation}) => {
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
    <KeyboardAvoidingView style={{ flex: 1 , backgroundColor:'#fff' }}
    //behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      
    <StatusBar hidden/>
    <ScrollView contentContainerStyle={{flex:isKeyboardVisible? 0 :1}} >
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
              onPress={()=>{
                navigation.goBack()
              }}
              >
                <Image
                  source={require('../../../../Assets/ICONS/arrow=white.png')}
                  style={{width: 30, height: 20, marginTop: 6, marginRight: 50}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerHeadingContainer}>
            <Text style={styles.headerHeading2}>H</Text>
          </View>
          <View style={styles.mainBody}>
            <View style={styles.mainBodyContent}>
              <Text style={{fontSize: 14}}>PROFILe</Text>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  // textAlignVertical: 'top',
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.3,
                  width: '92%',

                  marginVertical: 13,

                  // paddingTop:20,
                  paddingLeft: 10,
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
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.3,
                  width: '92%',

                  marginBottom: 13,

                  // paddingTop:20,
                  paddingLeft: 10,
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
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.3,
                  width: '92%',

                  marginBottom: 13,

                  // paddingTop:20,
                  paddingLeft: 10,
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
                  <Text style={{color: 'white', fontSize: 15}}>UPDATE</Text>
                </TouchableOpacity>
              </View> */}
            </View>
            <View style={styles.mainBodyContent}>
              <Text style={{fontSize: 14}}>BANK DETAILS</Text>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  // textAlignVertical: 'top',
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.3,
                  width: '92%',

                  marginVertical: 13,

                  // paddingTop:20,
                  paddingLeft: 10,
                }}
                underlineColorAndroid="transparent"
                placeholder="Select Bank"
                placeholderTextColor="#333333"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              />
              <TextInput
                style={{
                  backgroundColor: 'white',
                  // textAlignVertical: 'top',
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.3,
                  width: '92%',

                  marginBottom: 13,

                  // paddingTop:20,
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
                  borderRadius: 4,
                  borderColor: '#F1F1F1',
                  borderWidth: 0.3,
                  width: '92%',

                  marginBottom: 13,

                  // paddingTop:20,
                  paddingLeft: 10,
                }}
                underlineColorAndroid="transparent"
                placeholder="Name on Account"
                placeholderTextColor="#333333"
                textAlign={'left'}
                numberOfLines={2}
                multiline={true}
              />
              <View style={styles.updatePassword}>
                <TouchableOpacity style={styles.updatePasswordButton}>
                  <Text style={{color: 'white', fontSize: 15}}>UPDATE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WithDrawScreenFive;

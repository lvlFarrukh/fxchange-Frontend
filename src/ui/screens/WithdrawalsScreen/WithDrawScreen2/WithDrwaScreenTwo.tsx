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
  StatusBar,
  Keyboard,
} from 'react-native';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Navbar from '../../../components/Navbars/Navbar';
import styles from './Style';
const {width, height} = Dimensions.get('screen');
const WithdrawalsScreenTwo = ({navigation}) => {
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
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <StatusBar translucent backgroundColor="#1bb76d" />

        <View style={styles.header}>
        
          <View style={styles.headerUpperArea}>
            <TouchableOpacity
              style={{alignSelf: 'center', marginLeft: 5}}
              activeOpacity={0.9}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../../../Assets/ICONS/arrow.png')}
                style={{
                  height: 15,
                  width: 25,
                }}
              />
            </TouchableOpacity>

            <MyText
              style={[
                {
                  color: '#088b3f',
                  fontSize: 18,
                  alignSelf: 'center',
                  marginLeft: -40,
                  marginTop: -5,
                },
              ]}>
              Contact Support
            </MyText>
            <View></View>
          </View>
          <MyText style={{textAlign: 'center', color: '#adabac', fontSize: 10}}>
            Please fill the form below we will be happy to assist you
          </MyText>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Enter Your Message"
              placeholderTextColor="#333333"
              numberOfLines={7}
              multiline={true}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity style={styles.sendButton}>
              <MyText style={{color: 'white', fontSize: 12, }}>SEND</MyText>
            </TouchableOpacity>
          </View>
        </View>

      {
          !isKeyboardVisible && (
            <View style={styles.mainBody}>
            <Image
              source={require('../../../../Assets/fejoraLogo-white.png')}
              style={{height: 55, resizeMode: 'contain', marginTop: 50, marginBottom: 30}}
            />
            <View style={styles.mainBodyContent}>
              <TouchableOpacity activeOpacity={0.9} style={styles.mainBodyButtonStyle}>
                <View style={{marginBottom: 8}}>
                  <Image
                    source={require('../../../../Assets/ICONS/iggg.png')}
                    style={{width: 29, height: 29}}
                  />
                </View>
                <MyText style={{color: '#666666', fontSize: 11.5, fontWeight: '600',paddingBottom: 3}}>
                Fejora
                </MyText>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9} style={styles.mainBodyButtonStyle}>
                <View>
                  <Image
                    source={require('../../../../Assets/ICONS/website-logo-png.png')}
                    style={{width: 18, height: 18, marginLeft: 6}}
                  />
                </View>
                <MyText style={{color: '#666666',fontSize: 7, fontWeight: '600', marginLeft: 4}}>
                  www.Fejora.com
                </MyText>
              </TouchableOpacity>
            </View>
          </View>
          ) 
        }
        
      </ScrollView>
    </SafeAreaView>
  );
};
export default WithdrawalsScreenTwo;

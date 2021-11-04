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
import Header from '../../../components/ModeratePageCard/Header';
import styles from './Style';

const { width, height } = Dimensions.get('window');

const WithDrawScreenFour = ({ navigation }) => {
  console.log('with drawel screen');

  return (
    <View style={{ flex: 1, height: height, width: width, backgroundColor: '#fafafa' }}>
      <SafeAreaView
        style={{
          backgroundColor: '#1bb76d',
          flex: 1, height: height, width: width,
        }}>
       
          <View style={{ height: '15%' }}>
            <Header navigation={navigation} style={{ marginTop: 40 }} Heading={""} />
          </View>

          <View style={[styles.mainBody, { height:'85%' }]}>
            <View style={styles.mainBodyContent}>
              <View style={{ paddingHorizontal: 10 }}>
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
                <Text style={{ fontSize: 11, color: '#a4a2a3' }}>CHANGE PASSWORD</Text>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    borderColor: 'rgba(0,0,0,0.2)',
                    borderWidth: 1,
                    width: '100%',
                    marginVertical: 13,
                    paddingLeft: 10,
                    height: 48,
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
                    height: 48
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
                    height: 48
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Repeat New Paswword"
                  placeholderTextColor="#676767"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />
              </View>

              <View style={[{marginBottom:20}]}>
                <TouchableOpacity style={styles.updatePasswordButton}>
                  <Text style={{ color: 'white', fontSize: 15 }}>UPDATE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
       
      </SafeAreaView>
    </View>
  );
};

export default WithDrawScreenFour;

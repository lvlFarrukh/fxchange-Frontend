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
import Navbar from '../../../components/Navbars/Navbar';
import Header from '../../../components/ModeratePageCard/Header';
import styles from './Style';
import MyText from '../../../components/DefaultTextComponent/MyText';

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
          <StatusBar translucent backgroundColor='#1bb76d' />
       
          <View style={{ height: 70 }}>
            <Header navigation={navigation} style={{ marginTop: 25 }} Heading={""} />
          </View>
          {/* check this StatusBar.currentHeight bar if it's missing some space in the bottom */}
          <View style={[styles.mainBody, { height: height-70+StatusBar.currentHeight}]}> 
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
                  <MyText style={styles.headerHeading2}>H</MyText>
                </View>
                <MyText style={{ fontSize: 11, color: '#a4a2a3' }}>CHANGE PASSWORD</MyText>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    borderColor: '#F1F1F1',
                    borderWidth: 1.5,
                    width: '100%',
                    marginVertical: 13,
                    paddingLeft: 10,
                    height: 48,
                    color: 'black'
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Current Password"
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
                    marginBottom: 13,
                    paddingLeft: 10,
                    height: 48
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
                    marginBottom: 13,
                    paddingLeft: 10,
                    height: 48
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Repeat New Paswword"
                  placeholderTextColor="#333333"
                  textAlign={'left'}
                  numberOfLines={2}
                  multiline={true}
                />
              </View>

              <View style={[{marginBottom:20}]}>
                <TouchableOpacity style={styles.updatePasswordButton}>
                  <MyText style={{ color: 'white', fontSize: 15 }}>UPDATE</MyText>
                </TouchableOpacity>
              </View>
            </View>
          <Navbar
            navigation={navigation}
            activePage={'more'}
            backgroundColor={'green'}
          />
          </View>
      </SafeAreaView>
    </View>
  );
};

export default WithDrawScreenFour;

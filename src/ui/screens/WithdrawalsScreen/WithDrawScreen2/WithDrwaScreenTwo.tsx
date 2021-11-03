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
} from 'react-native';
import styles from './Style';
const {width, height} = Dimensions.get('screen');
const WithdrawalsScreenTwo = ({navigation}) => {
  console.log('with drawel screen');
  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={styles.header}>
        
          <View style={styles.headerUpperArea}>
            <TouchableOpacity
              style={{alignSelf: 'center', marginLeft: 5}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../../../Assets/ICONS/arrow=white.png')}
                style={{
                  height: 15,
                  width: 25,
                }}
              />
            </TouchableOpacity>

            <Text
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
            </Text>
            <View></View>
          </View>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 10}}>
            Please fill the form below we will be happy to assist you
          </Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Enter Your Message"
              placeholderTextColor="#333333"
              numberOfLines={6}
              multiline={true}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity style={styles.sendButton}>
              <Text style={{color: 'white', fontSize: 12, }}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainBody}>
          <Image
            source={require('../../../../Assets/whiteLogo.png')}
            style={{height: 55, resizeMode: 'contain', marginTop: 50, marginBottom: 30}}
          />
          <View style={styles.mainBodyContent}>
            <TouchableOpacity style={styles.mainBodyButtonStyle}>
              <View style={{marginBottom: 8}}>
                <Image
                  source={require('../../../../Assets/ICONS/iggg.png')}
                  style={{width: 29, height: 29}}
                />
              </View>
              <Text style={{color: '#666666', fontSize: 11.5, fontWeight: '600',paddingBottom: 3}}>
                fxchange
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainBodyButtonStyle}>
              <View>
                <Image
                  source={require('../../../../Assets/ICONS/website-logo-png.png')}
                  style={{width: 18, height: 18, marginLeft: 6}}
                />
              </View>
              <Text style={{color: '#666666',fontSize: 7, fontWeight: '600', marginLeft: 4}}>
                www.fxchange.com
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WithdrawalsScreenTwo;

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
} from 'react-native';
import styles from './Style';
const {width, height} = Dimensions.get('screen');
const WithdrawalsScreenTwo = ({navigation}) => {
  console.log('with drawel screen');
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <View style={styles.header}>
          <View style={styles.headerUpperArea}>
            <Image
              source={require('../../../../Assets/ICONS/arrow=white.png')}
              style={{width: 35, height: 25, marginRight: 18}}
            />
            <Text style={{fontSize: 25, fontWeight: '600', color: '#3f8b41'}}>
              Contact Support
            </Text>
          </View>
          <Text style={{textAlign: 'center', color: '#adabac'}}>
            Please fill the form below we will be happy to assist you
          </Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Enter Your Message"
              placeholderTextColor="#7c7c7c"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity style={styles.sendButton}>
              <Text style={{color: 'white', fontSize: 15}}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainBody}>
          <Image
            source={require('../../../../Assets/whiteLogo.png')}
            style={{width: 250, height: 50, marginTop: 50, marginBottom: 55}}
          />
          <View style={styles.mainBodyContent}>
            <TouchableOpacity style={styles.mainBodyButtonStyle}>
            <View style={{marginBottom:10}}>
                <Image
                  source={require('../../../../Assets/ICONS/iggg.png')}
                  style={{width: 40, height: 40,marginBottom:2}}
                />
            </View>
              <Text style={{color: 'black',fontSize:15,fontWeight:"600"}}>fxChange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainBodyButtonStyle}>
                <View>
              <Image
                source={require('../../../../Assets/ICONS/website-logo-png.png')}
                style={{width: 30, height: 25}}
              />
              </View>
              <Text style={{color: 'black',marginLeft:5}}>www.fxchange.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default WithdrawalsScreenTwo;

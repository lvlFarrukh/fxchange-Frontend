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
} from 'react-native';
import styles from './Style';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('screen');

const WithdrawalsScreen = ({ navigation }) => {
  console.log('with drawel screen');

  return (

    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#0a8a40'
      }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.headerHeading}>H</Text>
          <Text style={styles.headerText}>Henry</Text>
        </View>

        <View style={styles.mainBody}>
          {/* style={styles.mainBodyContent} */}
          <View>
          <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 14, marginLeft: 10}}>PROFILE</Text>
            <TouchableOpacity 
              onPress={() => {
                  navigation.navigate('WithdrawalsScreenFive')
              }}
            >
              <View style={styles.mainBodyCardContent}>
                <Text
                  style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                  My Account
                </Text>
                <Icon
                name={'arrow-forward-ios'}
                size={16}
                color={'#000000'}
                style={{ marginTop: 10, marginLeft: 10 }}></Icon>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => {
                navigation.navigate('WithDrawScreenFour')
              }}  
            >
              <View style={styles.mainBodyCardContent}>
                <Text
                  style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                  Change Password
                </Text>
                <Icon
                name={'arrow-forward-ios'}
                size={16}
                color={'#000000'}
                style={{ marginTop: 10, marginLeft: 10 }}></Icon>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              //styles.mainBodyContent,
              {
                marginTop: '10%',
                //marginBottom: '30%'
              },
            ]}
          >
            <Text style={{ fontSize: 14, marginLeft: 10 }}>MORE</Text>
            {/* <View style={styles.mainBodyCards}> */}
            <View style={styles.mainBodyCardContent}>
              <Text
                style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                Contact Support
              </Text>
              <Icon
              name={'arrow-forward-ios'}
              size={16}
              color={'#000000'}
              style={{ marginTop: 10, marginLeft: 10 }}></Icon>
            </View>
            {/* </View> */}
            {/* <View style={styles.mainBodyCards}> */}
            <View style={styles.mainBodyCardContent}>
              <Text
                style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                Terms Of Service
              </Text>
              <Icon
              name={'arrow-forward-ios'}
              size={16}
              color={'#000000'}
              style={{ marginTop: 10, marginLeft: 10 }}></Icon>
            </View>
            {/* </View> */}
          </View>
          </View>
          <View style={styles.mainBodyBottomItems}>
            <Image
              source={require('../../../../Assets/greenLogo.png')}
              style={{ width: 140, height: 40 }}
            />
            <Text style={{ color: '#4d4d4d' }}>Version 1.0</Text>
            <View style={{width:"100%",marginVertical:20}}>
            <Button

              title="LOGOUT"
              color="#d53b1d"
              // onPress={() => alert('hellot this is button')}
            />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default WithdrawalsScreen;

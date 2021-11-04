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
import Navbar from '../../../components/Navbars/Navbar';
import MyText from '../../../components/DefaultTextComponent/MyText';

const { width, height } = Dimensions.get('screen');

const WithdrawalsScreen = ({ navigation }) => {
  console.log('with drawel screen');

  return (

    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d'
      }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.header}>
          <MyText style={styles.headerHeading}>H</MyText>
          <MyText style={styles.headerText}>Henry</MyText>
        </View>

        <View style={styles.mainBody}>
          {/* style={styles.mainBodyContent} */}
          <View>
          <View style={{ marginTop: 20 }}>
              <MyText style={{ fontSize: 14, marginLeft: 10}}>PROFILE</MyText>
            <TouchableOpacity 
            activeOpacity={0.9}
              onPress={() => {
                  navigation.navigate('WithdrawalsScreenFive')
              }}
            >
              <View style={styles.mainBodyCardContent}>
                <MyText
                  style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                  My Account
                </MyText>
                <Icon
                name={'arrow-forward-ios'}
                size={16}
                color={'#000000'}
                style={{ marginTop: 10, marginLeft: 10 }}></Icon>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
            activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('WithDrawScreenFour')
              }}  
            >
              <View style={styles.mainBodyCardContent}>
                <MyText
                  style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                  Change Password
                </MyText>
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
            <MyText style={{ fontSize: 14, marginLeft: 10 }}>MORE</MyText>
            {/* <View style={styles.mainBodyCards}> */}
            <View style={styles.mainBodyCardContent}>
              <MyText
                style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                Contact Support
              </MyText>
              <Icon
              name={'arrow-forward-ios'}
              size={16}
              color={'#000000'}
              style={{ marginTop: 10, marginLeft: 10 }}></Icon>
            </View>
            {/* </View> */}
            {/* <View style={styles.mainBodyCards}> */}
            <View style={styles.mainBodyCardContent}>
              <MyText
                style={{ color: '#4d4d4d', fontSize: 15, fontWeight: '600' }}>
                Terms Of Service
              </MyText>
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
            <MyText style={{ color: '#4d4d4d' }}>Version 1.0</MyText>
            <View style={{width:"100%",marginVertical:20}}>
            <Button

              title="LOGOUT"
              color="#d53b1d"
              onPress={() => {}}
            />
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} activePage={'more'} backgroundColor={'green'}/>

    </SafeAreaView>

  );
};

export default WithdrawalsScreen;

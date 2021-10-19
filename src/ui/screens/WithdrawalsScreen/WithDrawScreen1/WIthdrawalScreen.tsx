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

const WithdrawalsScreen = ({navigation}) => {
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
          <Text style={styles.headerHeading}>H</Text>
          <Text style={styles.headerText}>Henry</Text>
        </View>

        <View style={styles.mainBody}>
          <View style={styles.mainBodyContent}>
            <Text style={{fontSize: 14}}>PROFILE</Text>
            <View style={styles.mainBodyCards}>
              <View style={styles.mainBodyCardContent}>
                <Text
                  style={{color: '#4d4d4d', fontSize: 15, fontWeight: '600'}}>
                  My Account
                </Text>
                <Image
                  source={require('../../../Assets/ICONS/un-arrow.png')}
                  style={styles.iconStyle}
                />
              </View>
            </View>
            <View style={styles.mainBodyCards}>
              <View style={styles.mainBodyCardContent}>
                <Text
                  style={{color: '#4d4d4d', fontSize: 15, fontWeight: '600'}}>
                  Change Password
                </Text>
                <Image
                  source={require('../../../Assets/ICONS/un-arrow.png')}
                  style={styles.iconStyle}
                />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.mainBodyContent,
              {marginTop: '10%', marginBottom: '30%'},
            ]}>
            <Text style={{fontSize: 14}}>MORE</Text>
            <View style={styles.mainBodyCards}>
              <View style={styles.mainBodyCardContent}>
                <Text
                  style={{color: '#4d4d4d', fontSize: 15, fontWeight: '600'}}>
                  Contact Support
                </Text>
                <Image
                  source={require('../../../Assets/ICONS/un-arrow.png')}
                  style={styles.iconStyle}
                />
              </View>
            </View>
            <View style={styles.mainBodyCards}>
              <View style={styles.mainBodyCardContent}>
                <Text
                  style={{color: '#4d4d4d', fontSize: 15, fontWeight: '600'}}>
                  Terms Of Service
                </Text>
                <Image
                  source={require('../../../Assets/ICONS/un-arrow.png')}
                  style={styles.iconStyle}
                />
              </View>
            </View>
          </View>
          <View style={styles.mainBodyBottomItems}>
            <Image
              source={require('../../../Assets/greenLogo.png')}
              style={{width: 150, height: 50}}
            />
            <Text style={{color: '#4d4d4d'}}>Version 1.0</Text>
            <View style={{width:"80%",marginTop:"5%",height:"40%"}}>
              <Button
              
                title="LOGOUT"
                color="#d53b1d"
                onPress={() => alert('hellot this is button')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default WithdrawalsScreen;

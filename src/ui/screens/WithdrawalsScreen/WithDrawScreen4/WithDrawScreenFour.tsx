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

const { width, height } = Dimensions.get('screen');

const WithDrawScreenFour = ({ navigation }) => {
  console.log('with drawel screen');

  return (

    <View
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <SafeAreaView
      style={{backgroundColor: '#0a8a40',flex:1}}
      >
          <View style={styles.header}>
            <View style={styles.headerUpperArea}>
              <TouchableOpacity>
                <Image
                  source={require('../../../../Assets/ICONS/arrow=white.png')}
                  style={{ width: 30, height: 20, marginTop: 6, marginRight: 50 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.mainBody}>
          {/* <View style={styles.headerHeadingContainer}> */}
            <Text style={styles.headerHeading2}>H</Text>
          {/* </View> */}
            <View style={styles.mainBodyContent}>
              <View>
              <Text style={{ fontSize: 14 }}>CHANGE PASSWORD</Text>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  // textAlignVertical: 'top',
                  borderRadius: 4,
                  borderColor: 'black',
                  borderWidth: 0.3,
                  width: '92%',

                  marginVertical: 13,

                  // paddingTop:20,
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
                  // textAlignVertical: 'top',
                  borderRadius: 4,
                  borderColor: 'black',
                  borderWidth: 0.3,
                  width: '92%',

                  marginBottom: 13,

                  // paddingTop:20,
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
                  // textAlignVertical: 'top',
                  borderRadius: 4,
                  borderColor: 'black',
                  borderWidth: 0.3,
                  width: '92%',

                  marginBottom: 13,

                  // paddingTop:20,
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
              <View style={styles.updatePassword}>
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

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
const Bitcoin = ({activeButton, bitcoin, giftCards}) => {
  return (
    <>
      <View style={styles.mainBodyPartOne}>
        <View style={[styles.partOneButtons]}>
          <Text
            style={[
              styles.partOneButton,
              styles.JoinLeft,
              {...giftCards},
              {marginRight: 20},
            ]}
            onPress={() => {
              activeButton('giftCards');
            }}>
            Giftcards
          </Text>

          <Text
            style={[styles.partOneButton, styles.JoinRight, {...bitcoin}]}
            onPress={() => {
              activeButton('bitcoin');
            }}>
            Bitcoin
          </Text>
        </View>
        <TextInput
          style={{
            backgroundColor: 'white',
            // textAlignVertical: 'top',
            borderRadius: 4,
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginVertical: 20,

            // paddingTop:20,
            paddingLeft: 25,
          }}
          underlineColorAndroid="transparent"
          placeholder="Enter Account in USD"
          placeholderTextColor="black"
          textAlign={'left'}
          numberOfLines={2}
          multiline={true}
        />
        <View style={styles.checkrateButtonContainer}>
          <TouchableOpacity style={styles.checkrateButton}>
            <Text style={{color: 'white', fontSize: 15}}>CHECK RATE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainBodyPartTwo}>
        <Text style={{marginTop: 30}}>Estimate rate</Text>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            marginTop: 10,
            fontWeight: '400',
          }}>
          N3,303,330
        </Text>
      </View>
    </>
  );
};
export default Bitcoin;

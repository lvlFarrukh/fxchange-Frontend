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
  Keyboard,
} from 'react-native';
import MyText from '../../../components/DefaultTextComponent/MyText';
import styles from './Style';
const {width, height} = Dimensions.get('screen');
const Bitcoin = ({activeButton, bitcoin, giftCards}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <>
      <View style={[styles.mainBodyPartOne, {paddingTop: 5}]}>
        <View style={[styles.partOneButtons]}>
          <MyText
            style={[styles.partOneButton, styles.JoinLeft, {...giftCards}]}
            onPress={() => {
              activeButton('giftCards');
            }}>
            Giftcards
          </MyText>

          <MyText
            style={[styles.partOneButton, styles.JoinRight, {...bitcoin}]}
            onPress={() => {
              activeButton('bitcoin');
            }}>
            Bitcoin
          </MyText>
        </View>

        <TextInput
          style={{
            backgroundColor: 'white',
            // textAlignVertical: 'top',
            borderRadius: 4,
            width: '83%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginVertical: 20,
            height: 55,
            // paddingTop:20,
            paddingLeft: 25,
            color: 'black',
          }}
          underlineColorAndroid="transparent"
          placeholder="Enter Account in USD"
          placeholderTextColor="black"
          textAlign={'left'}
          numberOfLines={2}
          multiline={true}
        />
        <View style={styles.checkrateButtonContainer}>
          <TouchableOpacity activeOpacity={0.9} style={styles.checkrateButton}>
            <MyText style={{color: 'white', fontSize: 15}}>CHECK RATE</MyText>
          </TouchableOpacity>
        </View>
      </View>
      {600 < height ? (
        <View style={[styles.mainBodyPartTwo,]}>
          <MyText style={{marginTop: 30}}>Estimate rate</MyText>
          <MyText
            style={{
              fontSize: 30,
              color: 'black',
              marginTop: 10,
              fontWeight: '400',
            }}>
            N3,303,330
          </MyText>
        </View>
      ) : (
        !isKeyboardVisible && (
          <View style={styles.mainBodyPartTwo}>
            <MyText style={{marginTop: 30}}>Estimate rate</MyText>
            <MyText
              style={{
                fontSize: 30,
                color: 'black',
                marginTop: 10,
                fontWeight: '400',
              }}>
              N3,303,330
            </MyText>
          </View>
        )
      )}
    </>
  );
};
export default Bitcoin;

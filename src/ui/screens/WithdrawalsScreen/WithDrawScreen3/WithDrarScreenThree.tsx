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
const btnSetected: any = {
  backgroundColor: '#0a8a40',
  color: 'white',
  fontWeight: 'bold',
  //padding: '3%',
};
const WithdrawalsScreenThree = ({navigation}) => {
  const [pendingBtn, setpendingBtn] = useState(btnSetected);
  const [ongoingBtn, setOngoing] = useState({});
  const activeButton = (buttonType: string) => {
    if (buttonType === 'pending') {
      setpendingBtn(btnSetected);
      setOngoing({});
    }
    if (buttonType === 'ongoing') {
      setpendingBtn({});
      setOngoing(btnSetected);
    }
  };
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
            <TouchableOpacity>
              <Image
                source={require('../../../../Assets/ICONS/arrow=white.png')}
                style={{width: 30, height: 20, marginTop: 6, marginRight: 40}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                fontWeight: '400',
                color: 'white',
                marginLeft: 40,
              }}>
              Our Rates
            </Text>
          </View>
        </View>
        <View style={styles.mainBodyPartOne}>
          <View style={[styles.partOneButtons]}>
            <Text
              style={[
                styles.partOneButton,
                styles.JoinLeft,
                {...pendingBtn},
                {marginRight: 20},
              ]}
              onPress={() => {
                activeButton('pending');
              }}>
              Giftcards
            </Text>

            <Text
              style={[styles.partOneButton, styles.JoinRight, {...ongoingBtn}]}
              onPress={() => {
                activeButton('ongoing');
              }}>
              Bitcoin
            </Text>
          </View>
          <TextInput
            style={{
              backgroundColor: 'white',
              // textAlignVertical: 'top',
              borderRadius:4,
              width: '90%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginVertical: 20,
            
              // paddingTop:20,
              paddingLeft:25
            }}
            underlineColorAndroid="transparent"
            placeholder="Enter Account in USD"
            placeholderTextColor="black"
            
            textAlign={"left"}
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
          <Text style={{marginTop:30}}>
            Estimate rate
          </Text>
          <Text style={{fontSize:30,color:"black",marginTop:10,fontWeight:"400"}}>
            N3,303,330
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default WithdrawalsScreenThree;

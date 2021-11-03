
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
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Style';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#1bb76d',
  color: 'white',
  fontWeight: 'bold',
  zIndex: 5,
  //padding: '3%',
};
const WithDrawScreenSix = ({navigation}) => {
  const [pending, setPending] = useState(btnSetected);
  const [declined, setDeclined] = useState({});
  const [screen, setScreen] = useState(0);
  console.log('with drawel screen');
  const activeButton = (buttonType: string) => {
    if (buttonType === 'pendingButton') {
      setPending(btnSetected);
      setScreen(0);
      setDeclined({});
    }
    if (buttonType === 'declinedButton') {
      setPending({});
      setDeclined(btnSetected);
      setScreen(1);
    }
  };

  return (
    
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d',
      }}>
        
      <View style={styles.header}>
        <View style={styles.headerUpperArea}>
          <TouchableOpacity
          activeOpacity={0.9}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../../../Assets/ICONS/arrow=white.png')}
              style={{width: 25, height: 20, marginTop: 6}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: 'white',
              marginLeft: 50,
            }}>
            Withdrawls
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
            paddingHorizontal: 10
          }}>
          <View style={{marginRight: 84}}>
            <View style={{marginBottom: 10}}>
              <Text style={{color: 'white', fontSize: 11}}>Wallet Balance</Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 35}}>N50,000</Text>
            </View>
          </View>
          <View
            style={{borderLeftWidth: 0.5, borderColor: 'white', height: 65}}>
            <View style={{marginLeft: 10, marginTop: 4}}>
              <Text style={{color: 'white', fontSize: 11}}>Min Withdrawls</Text>
              <Text style={{color: 'white', fontSize: 11}}>N5,000</Text>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderColor: 'white',
                  marginVertical: 4,
                }}></View>
              <Text style={{color: 'white', fontSize: 11}}>fee:N50</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerHeadingContainer}>
        <TextInput
          style={styles.headerHeading2}
          underlineColorAndroid="transparent"
          placeholder="Amount"
          placeholderTextColor="black"
          textAlign={'left'}
        />
      </View>
      <View style={styles.mainBody}>
        {/* style={styles.mainBodyContent} */}

        <View style={styles.mainBodyCards}>
          <View style={styles.mainBodyCardContent1}>
            <Text style={{fontSize: 13, fontWeight: '400'}}>BankDetails</Text>
            <View style={styles.viewItems}>
              <Text style={styles.smBlueText}>Edit</Text>

              <Image
                source={require('../../../../Assets/ICONS/arrow=right.png')}
                style={styles.arrowIcon}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '80%',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 12}}>Account Name:</Text>
            <Text style={{fontSize: 12, marginLeft: 10}}>
              FxChangeMarketPlace
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '80%',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 12}}>Account No:</Text>
            <Text style={{fontSize: 12, marginLeft: 10}}>3789393</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '80%',
            }}>
            <Text style={{fontSize: 12}}>Bank Name:</Text>
            <Text style={{fontSize: 12, marginLeft: 10}}>Access Bank PLC</Text>
          </View>
        </View>

        <TextInput
          style={styles.changePasswordButton}
          underlineColorAndroid="transparent"
          placeholder="Current Password"
          placeholderTextColor="black"
          textAlign={'left'}
        />
        <TouchableOpacity
        activeOpacity={0.9}
          style={[
            styles.changePasswordButton,
            {backgroundColor: 'green', paddingVertical: 13, borderRadius: 3},
          ]}>
          <Text style={[{textAlign: 'center', color: 'white'}]}>
            WithDraw(1500)
          </Text>
        </TouchableOpacity>
        <View style={styles.bodyBottom}>
          <View style={[styles.partOneButtons]}>
            <Text
              style={[
                styles.partOneButton,
                styles.JoinLeft,
                {...pending},
                {marginRight: 20},
              ]}
              onPress={() => {
                activeButton('pendingButton');
              }}>
              Pending
            </Text>

            <Text
              style={[styles.partOneButton, styles.JoinRight, {...declined}]}
              onPress={() => {
                activeButton('declinedButton');
              }}>
              Declined
            </Text>
          </View>
          <View style={styles.lowerCard}>
            <View style={styles.upperCardPortion}>
             
                <View>
                  <Text style={{fontSize:16,color:"#6683e3"}}>Fxchange Marketplace</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Text style={{color: '#9e9e9e',marginRight:5,fontSize:12}}>47247829479</Text>
                  <Text style={{color: '#9e9e9e',marginRight:5,fontSize:12}}>|</Text>

                  <Text style={{color: '#9e9e9e',fontSize:12}}>Access Bak PLC</Text>
                </View>
             

              
            </View>
            <View style={styles.hr}></View>
            <View style={styles.lowerPortion}>

                <View>
                    <Text style={[styles.smFontSize, , {color: 'gray'}]}>
                        Amount
                    </Text>
                    <Text style={styles.mdFontBlackColor}>
                    N33,000
                    </Text>
                </View>

                <View>
                    <Text style={[styles.smFontSize, {color: 'gray'}]}>
                        Dec 10 2021,1:30PM
                    </Text>
                    <Text style={[styles.smFontSize, {textAlign: 'right', color: 'red'}]}>
                        PENDING
                    </Text>
                </View>

            </View>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
    
  );
};

export default WithDrawScreenSix;

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
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Navbar from '../../../components/Navbars/Navbar';
import styles from './Style';

const { width, height } = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#1bb76d',
  color: 'white',
  fontWeight: 'bold',
  zIndex: 5,
  //padding: '3%',
};
const WithDrawScreenSix = ({ navigation }) => {
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
    <View style={{
      height: height,
      width: width,
      flex: 1,
      backgroundColor: '#fafafa',
    }}>
       <StatusBar translucent backgroundColor='#1bb76d' />
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
          backgroundColor: '#1bb76d',
        }}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerUpperArea}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  source={require('../../../../Assets/ICONS/arrow=white.png')}
                  style={{ width: 25, height: 20, marginTop: 6 }}
                />
              </TouchableOpacity>
              <MyText
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: 'white',
                  marginLeft: 50,
                }}>
                Withdrawls
              </MyText>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 40,
                paddingHorizontal: 10
              }}>
              <View style={{ marginRight: 84 }}>
                <View style={{ marginBottom: 10 }}>
                  <MyText style={{ color: 'white', fontSize: 11 }}>Wallet Balance</MyText>
                </View>
                <View>
                  <MyText style={{ color: 'white', fontSize: 35 }}>N50,000</MyText>
                </View>
              </View>
              <View
                style={{ borderLeftWidth: 0.5, borderColor: 'white', height: 65 }}>
                <View style={{ marginLeft: 10, marginTop: 4 }}>
                  <MyText style={{ color: 'white', fontSize: 11 }}>Min Withdrawls</MyText>
                  <MyText style={{ color: 'white', fontSize: 11 }}>N5,000</MyText>
                  <View
                    style={{
                      borderTopWidth: 0.5,
                      borderColor: 'white',
                      marginVertical: 4,
                    }}></View>
                  <MyText style={{ color: 'white', fontSize: 11 }}>fee:N50</MyText>
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
                <MyText style={{ fontSize: 13, fontWeight: '400' }}>BankDetails</MyText>
                <View style={styles.viewItems}>
                  <MyText style={styles.smBlueText}>Edit</MyText>

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
                <MyText style={{ fontSize: 12 }}>Account Name:</MyText>
                <MyText style={{ fontSize: 12, marginLeft: 10 }}>
                  FxChangeMarketPlace
                </MyText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  width: '80%',
                  marginBottom: 5,
                }}>
                <MyText style={{ fontSize: 12 }}>Account No:</MyText>
                <MyText style={{ fontSize: 12, marginLeft: 10 }}>3789393</MyText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  width: '80%',
                }}>
                <MyText style={{ fontSize: 12 }}>Bank Name:</MyText>
                <MyText style={{ fontSize: 12, marginLeft: 10 }}>Access Bank PLC</MyText>
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
              style={[
                styles.changePasswordButton,
                { backgroundColor: '#1bb76d', paddingVertical: 13, borderRadius: 3 },
              ]}>
              <MyText style={[{ textAlign: 'center', color: 'white' }]}>
                WithDraw(1500)
              </MyText>
            </TouchableOpacity>
            <View style={styles.bodyBottom}>
              <View style={[styles.partOneButtons]}>
                <MyText
                  style={[
                    styles.partOneButton,
                    styles.JoinLeft,
                    { ...pending },
                    { marginRight: 20 },
                  ]}
                  onPress={() => {
                    activeButton('pendingButton');
                  }}>
                  Pending
                </MyText>

                <MyText
                  style={[styles.partOneButton, styles.JoinRight, { ...declined }]}
                  onPress={() => {
                    activeButton('declinedButton');
                  }}>
                  Declined
                </MyText>
              </View>
              <View style={styles.lowerCard}>
                <View style={styles.upperCardPortion}>

                  <View>
                    <MyText style={{ fontSize: 16, color: "#6683e3" }}>Fxchange Marketplace</MyText>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <MyText style={{ color: '#9e9e9e', marginRight: 5, fontSize: 12 }}>47247829479</MyText>
                    <MyText style={{ color: '#9e9e9e', marginRight: 5, fontSize: 12 }}>|</MyText>

                    <MyText style={{ color: '#9e9e9e', fontSize: 12 }}>Access Bak PLC</MyText>
                  </View>



                </View>
                <View style={styles.hr}></View>
                <View style={styles.lowerPortion}>

                  <View>
                    <MyText style={[styles.smFontSize, , { color: 'gray' }]}>
                      Amount
                    </MyText>
                    <MyText style={styles.mdFontBlackColor}>
                      N33,000
                    </MyText>
                  </View>

                  <View>
                    <MyText style={[styles.smFontSize, { color: 'gray' }]}>
                      Dec 10 2021,1:30PM
                    </MyText>
                    <MyText style={[styles.smFontSize, { textAlign: 'right', color: 'red' }]}>
                      PENDING
                    </MyText>
                  </View>

                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <Navbar navigation={navigation} activePage={'home'} backgroundColor={undefined} />
      </SafeAreaView>
    </View>

  );
};

export default WithDrawScreenSix;
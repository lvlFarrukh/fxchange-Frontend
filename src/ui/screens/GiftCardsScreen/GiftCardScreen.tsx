import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/ModeratePageCard/Header';
import Navbar from '../../components/Navbars/Navbar';

const {width, height} = Dimensions.get('screen');

const GiftCardScreen = ({navigation}) => {
  const [headerText, setheaderText] = useState('Select Giftcard');

  const iconNames: any = [
    require('../../../Assets/CARDS/amazon.png'),
    require('../../../Assets/CARDS/itunes.png'),
    require('../../../Assets/CARDS/Googleplay.png'),
    require('../../../Assets/CARDS/steam.png'),
    require('../../../Assets/CARDS/ebay.png'),
    require('../../../Assets/CARDS/visa.png'),
    require('../../../Assets/CARDS/americanexpress.png'),
    require('../../../Assets/CARDS/nordstrom.png'),
  ];

  const imageNames: any = [
    '../../../Assets/CARDS/amazon.png',
    '../../../Assets/CARDS/itunes.png',
    '../../../Assets/CARDS/Googleplay.png',
    '../../../Assets/CARDS/steam.png',
    '../../../Assets/CARDS/ebay.png',
    '../../../Assets/CARDS/visa.png',
    '../../../Assets/CARDS/americanexpress.png',
    '../../../Assets/CARDS/nordstrom.png',
  ];

  const changeHeaderText = (ImageIndex: number) => {
    let name: string =
      imageNames[ImageIndex].split('/')[
        imageNames[ImageIndex].split('/').length - 1
      ].split('.')[0];
        name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
        // setheaderText(`${name} GiftCards`)
        if (name === "Itunes") {
            navigation.navigate('ItunesGiftCardScreen', {
                headerTitle: `${name} GiftCards`,
            });
        }
  
  };
    return (
        <View style={{ height: height, width: width, flex: 1 }}>
             <StatusBar translucent backgroundColor='transparent' />
            {/* <StatusBar hidden /> */}
            <SafeAreaView style={{ flex: 1, height: height, width: width, backgroundColor: '#1bb76d' }}>
                <View style={{ height: '10%' }}>
                    <Header navigation={navigation} style={{ marginTop: 5 }} Heading={headerText} />
                </View>
                <ScrollView style={{
                    backgroundColor: '#ecedf1',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                    <View style={[styles().whiteCardBg, {}]}>
                        {

                            iconNames.map((item: any, index: number) => {
                                
                                return (
                                    <TouchableOpacity
                                    onPress={() => changeHeaderText(index)}
                                    key = {index}
                                        style={{
                                            backgroundColor: '#fff',
                                            width: (width - 60) / 2,
                                            alignItems: 'center',
                                            borderRadius: 30,
                                            marginTop: 10,
                                            height:(width - 60) / 2,
                                            alignContent:'center',
                                            justifyContent:'center'
                                        }}
                                    >
                                        {/* {console.log(item)} */}
                                        {/* <Image source={require(`../../../Assets/CARDS/${item}.png`)} style={styles().image} /> */}
                                        <Image key={index} source={item} style={styles().image} />
                                    </TouchableOpacity>
                                )
                            })
                        }

                        {/* <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    width: (width - 60) / 2,
                                    alignItems:'center',
                                    borderRadius:30,
                                    marginTop:10
                                }}
                            >
                                <Image source={require('../../../Assets/CARDS/amazon.png')} style={styles().image} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    width: (width - 60) / 2,
                                    alignItems:'center',
                                    borderRadius:30,
                                    marginTop:10
                                }}
                            >
                                <Image source={require('../../../Assets/CARDS/amazon.png')} style={styles().image} />
                            </TouchableOpacity> */}
          </View>
        </ScrollView>
        {/* <Navbar navigation={navigation} activePage={'home'} backgroundColor={undefined}/> */}
      </SafeAreaView>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    image: {
      width: 75,
      height: 75,
      marginVertical: 20,
    },
    whiteCardBg: {
      //flex: 75,
      //height: '75%',
      backgroundColor: '#ecedf1',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      width: width,
      padding: 20,
      //paddingTop: 30,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    Heading: {
      fontWeight: '700',
      alignSelf: 'center',
      fontSize: 15,
      color: '#343434',
    },
    TextInputStyle: {
      backgroundColor: '#fafafa',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#949494',
      paddingLeft: 10,
      color: '#000',
    fontFamily:'Nunito-Regular'
    },
    GreenButton: {
        // alignSelf:'center',
        // backgroundColor:'#1bb76d',
        // width:'100%'
        borderWidth: 1,
        borderColor: '#1bb76d',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontSize: 15,
        fontWeight: '700',
        color: '#fafafa',
        backgroundColor: '#1bb76d',
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 50, },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        //marginTop: 20,
        //marginBottom: 10

    },
    BottomRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
  });
export default GiftCardScreen;

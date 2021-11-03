import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('screen');

const LandingScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../Assets/landingPageBg.jpg')}
      style={{height: height, width: width, flex: 1}}
      imageStyle={{}}>
      <StatusBar translucent backgroundColor="transparent" />
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
        <View style={styles.LogoNTextContainer}>
          <Image
            source={require('../../../Assets/whiteLogo.png')}
            style={styles.image}
          />
          <Text style={styles.text}>A better way to Trade </Text>
          <Text style={styles.text}>GiftCards</Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 'auto',
            height: 120,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#fff',
                height: 105,
                width: 140,
                marginTop: -28,
                borderRadius: 38,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 5,
                justifyContent: 'space-evenly',
              }}>
              <ImageBackground
                source={require('../../../Assets/ITunes.png')}
                style={{height: 50, width: 50}}></ImageBackground>
              <Text>ITunes</Text>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: 105,
                width: 140,
                marginTop: -28,
                borderRadius: 38,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 5,
                justifyContent: 'space-evenly',
              }}>
              <ImageBackground
                source={require('../../../Assets/Gplay.png')}
                style={{height: 50, width: 50}}></ImageBackground>
              <Text>Google Play</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 'auto',
              paddingHorizontal: 30,
              marginBottom: 10,
            }}>
            <TouchableOpacity
             activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}>
              <Text style={{color: 'green', alignSelf: 'center', fontSize: 12}}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
             activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('CreateAccountScreen'); // TestScreenContaing all screens
              }}>
              <Text style={{color: 'green', alignSelf: 'center', fontSize: 12}}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 50,
  },
  LogoNTextContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
  },
});
export default LandingScreen;

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
import MyText from '../../components/DefaultTextComponent/MyText';

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
            source={require('../../../Assets/fejoraLogo-white.png')}
            style={styles.image}
          />
          <MyText style={styles.text}>A better way to Trade </MyText>
          <MyText style={styles.text}>GiftCards</MyText>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 'auto',
            height: 120,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingHorizontal: 25
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#fff',
                height: 105,
                width: 143,
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
              <MyText style={{fontSize: 12.5, fontWeight: '400'}}>ITUNES</MyText>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: 105,
                width: 143,
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
              <MyText style={{fontSize: 12.5, fontWeight: '400'}}>GOOGLE PLAY</MyText>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 'auto',
              // paddingHorizontal: 25,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}>
              <MyText style={{color: '#1bb76d', fontSize: 12}}>Sign In</MyText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateAccountScreen'); // TestScreenContaing all screens
              }}>
              <MyText style={{color: '#1bb76d', fontSize: 12}}>
                Create Account
              </MyText>
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
    marginLeft: 5,
    marginBottom: 8
  },
  LogoNTextContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
  },
});
export default LandingScreen;

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, StatusBar } from 'react-native';


const { width, height } = Dimensions.get('screen')

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LandingScreen')
            // navigation.replace('AdminWithdrawalHome')
            // navigation.replace('AdminUserHome')
            // navigation.replace('Setting')
        }, 1500);
    }, [])

    return (
        <View style={{ height: height, width: width, flex: 1, justifyContent: 'center', backgroundColor: '#1bb76d' }}>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../../../Assets/fejoraLogo-white.png')} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width/2.2,
        // height: height/6,
        resizeMode: 'contain',
        marginBottom: 8,
    }
})
export default SplashScreen;

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen')

const SignInScreen = ({ navigation }) => {



    return (
        <View style={{ height: height, width: width, flex: 1, justifyContent: 'center', backgroundColor: 'rgb(10, 138, 64)' }}>
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../../Assets/whiteLogo.png')} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 50,
        marginBottom: 8,
    }
})
export default SignInScreen;

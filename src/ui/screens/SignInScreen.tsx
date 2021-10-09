import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen')

const SignInScreen = ({ navigation }) => {



    return (
        <View style={{ height: height, width: width, flex: 1, backgroundColor: 'rgb(10, 138, 64)' }}>
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../../Assets/whiteLogo.png')} style={styles.image} />
            </View>

            <View style={[styles.whiteCardBg]}>
                <Text style={[styles.Heading]}>LOGIN TO YOUR ACCOUNT</Text>
                <TouchableOpacity
                onPress={()=>{
                    navigation.replace('ModeratorScreen')
                }}
                >
                    <Text>
                        navigate to main page
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 50,
        marginBottom: 8,
    },
    whiteCardBg: {
        backgroundColor: '#fff',
        borderRadius: 40
    },
    Heading: {
        fontWeight: 'bold',
        alignSelf: "center"
    }
})
export default SignInScreen;

import React from 'react'
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const { width, height } = Dimensions.get('screen')

const LandingScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../Assets/landingPageBg.jpg')}
            style={{ height: height, width: width, flex: 1 }}
            imageStyle={{ color: 'rgba(10, 138, 64,0.5)' }}
        >
            <SafeAreaView style={{height: height, width: width, flex: 1 ,backgroundColor:'rgba(0,0,0,0.1)'}}>
                <View style={styles.LogoNTextContainer}>
            <Image source={require('../../Assets/whiteLogo.png')} style={styles.image} />
            <Text style={styles.text}>A better way to Trade </Text>
            <Text style={styles.text}>GiftCards</Text>

                </View>

            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 50,
       
    },
    LogoNTextContainer : {
        marginTop: 50,
        marginLeft : 40
    },
    text : {
        color:'#fff',
        fontSize:15,
        marginLeft : 5
    }
})
export default LandingScreen;
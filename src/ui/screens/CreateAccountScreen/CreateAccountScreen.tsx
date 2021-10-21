import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Platform, ScrollView, TouchableNativeFeedback, Keyboard, StatusBar } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/ModeratePageCard/Header';


const { width, height } = Dimensions.get('screen')

const CreateAccountScreen = ({ navigation }) => {

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <StatusBar hidden/>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'rgb(10, 138, 64)' }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ height: isKeyboardVisible ? '10%' : '25%' }}>
                            <Header navigation={navigation} />
                            <View style={{ alignSelf: 'center', }}>
                                <Image source={require('../../../Assets/whiteLogo.png')} style={styles.image} />
                            </View>
                        </View>
                        <View style={[styles.whiteCardBg, { height: isKeyboardVisible ? '95%' : '75%' }]}>
                            <View>
                                <Text style={[styles.Heading]}>CREATE AN ACCOUNT</Text>

                                <View style={styles.BottomRowContainer}>
                                    <View></View>
                                    <Text style={{fontSize: 11, color:"#000" }}>Click Here to
                                    <TouchableNativeFeedback
                                        onPress={() => {
                                            navigation.navigate('SignInScreen')
                                        }}
                                    >
                                        <Text style={{color: '#66b486'  }}> LOGIN</Text>
                                    </TouchableNativeFeedback>
                                    </Text>
                                </View>
                            </View>

                            <TextInput
                                style={styles.TextInputStyle}
                                placeholder={'Username'}
                                placeholderTextColor={'#949494'}
                            >
                            </TextInput>

                            <TextInput
                                style={styles.TextInputStyle}
                                placeholder={'Email Address'}
                                placeholderTextColor={'#949494'}
                            >
                            </TextInput>

                            <TextInput
                                style={styles.TextInputStyle}
                                placeholder={'Phone Number'}
                                placeholderTextColor={'#949494'}
                            >
                            </TextInput>

                            <TextInput
                                style={styles.TextInputStyle}
                                placeholder={'Password'}
                                placeholderTextColor={'#949494'}
                            >
                            </TextInput>

                            <TextInput
                                style={styles.TextInputStyle}
                                placeholder={'Repeat Password'}
                                placeholderTextColor={'#949494'}
                            >
                            </TextInput>

                            <View>

                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => {
                                        navigation.navigate('ModeratorScreen')
                                    }}
                                >
                                    <Text
                                        style={styles.GreenButton}
                                    >
                                        CREATE ACCOUNT
                                    </Text>
                                </TouchableOpacity>

                            </View>

                            {/* <View style={styles.lastViewStyle}>
                                <Text style={{ fontSize: 12, }}>Having any troubles?
                                    <TouchableNativeFeedback>
                                        <Text style={{ color: '#d5431c' }}>contact us</Text>
                                    </TouchableNativeFeedback>
                                </Text>
                            </View> */}

                        </View>
                    </SafeAreaView>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 50,
        marginTop: 18
    },
    whiteCardBg: {
        //flex: 75,
        //height: '75%',
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: width,
        alignSelf: "flex-end",
        justifyContent: 'space-evenly',
        padding: 30
    },
    Heading: {
        fontWeight: '700',
        alignSelf: "center",
        fontSize: 15,
        color: '#343434'
    },
    TextInputStyle: {
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#949494',
        paddingLeft: 10,
        color:'#000'

    },
    GreenButton: {
        // alignSelf:'center',
        // backgroundColor:'#0a8a40',
        // width:'100%'
        borderWidth: 1,
        borderColor: '#0a8a40',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontSize: 15,
        fontWeight: '700',
        color: '#fafafa',
        backgroundColor: '#0a8a40',
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 50, }, 
        shadowOpacity: 0.25, 
        shadowRadius: 5, 
        elevation: 5,  
        //marginBottom: 10

    },
    BottomRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10
    },
    lastViewStyle: {
        marginTop: 20,
        alignSelf: "center",
    }
})
export default CreateAccountScreen;

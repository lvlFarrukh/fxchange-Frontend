import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Platform, ScrollView, TouchableNativeFeedback, Keyboard, StatusBar } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/ModeratePageCard/Header';


const { width, height } = Dimensions.get('screen')

const SellBitcoinScreen1 = ({ navigation }) => {

    return (
        <View style={{ height: height, width: width, flex: 1 }}>
            <StatusBar hidden />
            <SafeAreaView style={{ flex: 1, height: height, width: width, backgroundColor: '#d65d0e' }}>
                <View style={{ height: '8%', justifyContent: 'center' }}>
                    <Header navigation={navigation} Heading={'Sell Bitcoin'} />
                </View>

                <View style={[styles.whiteCardBg, { height: '92%' }]}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingBottom: 20, marginTop: 10 }}>
                        <View>
                            <Text style={{ fontSize: 10 }}>
                                Wallet Addresss
                            </Text >
                            <Text style={{ fontSize: 10 }}>
                                1BnG5DHDVF67gCDHFKFKFGSGXCgCfb
                            </Text>
                        </View>
                        <Image style={{ height: 100, width: 100 }} source={require('../../../Assets/IMG_3151.jpg')} />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 10, alignSelf: "center" }}>
                            Estimated Rate (570/$)
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', alignSelf: 'center', marginTop: 10 }}>
                            N3,500,000
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
                            <Text style={{ padding: 12 }}>Amount Sent in USD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
                            <Text style={{ padding: 12 }}>Amount Sent in BTC</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', borderRadius: 4, marginTop: 10 }}>
                        <Text style={{ padding: 12 }}>Transaction id (optional)</Text>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <ImageBackground
                            source={require('../../../Assets/IMG_3151.jpg')}
                            style={styles.cardImage}
                            resizeMode={'contain'}
                        >
                            <TouchableOpacity>
                                <Image style={styles.closeIcon} source={require('../../../Assets/ICONS/close.png')} />
                            </TouchableOpacity>

                            <View
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.8)',
                                    flexDirection: 'row',
                                    marginTop: 'auto',
                                    justifyContent: 'space-between',
                                    padding: 5
                                }}
                            >
                                <View>
                                    <Text style={{ color: '#fff', fontWeight: '400', fontSize: 12 }}>Itunes</Text>
                                    <Text style={{ color: '#fff', fontSize: 8 }}>$800 (264,000)</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#fff', fontWeight: '400', fontSize: 12 }}>Physical</Text>
                                    <Text style={{ color: '#fff', fontSize: 8, alignSelf: 'flex-end' }}>360/$</Text>
                                </View>
                            </View>


                        </ImageBackground>

                        <ImageBackground
                            source={require('../../../Assets/IMG_3151.jpg')}
                            style={styles.cardImage}
                            resizeMode={'contain'}
                        >
                            <TouchableOpacity>
                                <Image style={styles.closeIcon} source={require('../../../Assets/ICONS/close.png')} />
                            </TouchableOpacity>

                            <View
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.8)',
                                    flexDirection: 'row',
                                    marginTop: 'auto',
                                    justifyContent: 'space-between',
                                    padding: 5
                                }}
                            >
                                <View>
                                    <Text style={{ color: '#fff', fontWeight: '400', fontSize: 12 }}>Itunes</Text>
                                    <Text style={{ color: '#fff', fontSize: 8 }}>$800 (264,000)</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#fff', fontWeight: '400', fontSize: 12 }}>Physical</Text>
                                    <Text style={{ color: '#fff', fontSize: 8, alignSelf: 'flex-end' }}>360/$</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <TouchableOpacity
                        style={styles.roundButton1}>
                        <Text style={{ fontSize: 40, color: '#0a8a40' }}>+</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#0a8a40',alignSelf:"center" }}>Add Attachment</Text>

                    <TouchableOpacity style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <Text style={{
                            alignSelf: 'center', backgroundColor: '#d65d0e', width: '100%', textAlign: "center",
                            padding: 10,
                            color: '#fff',
                            borderRadius: 5
                        }}>START TRADE</Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 20,
        height: 20,
    },
    roundButton1: {
        width: 60,
        height: 60,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 50, },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,

    },
    image: {
        width: 160,
        height: 55,
        alignSelf: 'center',
        marginTop: 20
    },
    tickImage: {
        width: 35,
        height: 35,
        alignSelf: 'center',
        marginTop: 30
    },
    whiteCardBg: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: width,
        padding: 20,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    bodyHeader: {
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        paddingBottom: 15
    },
    cardImage: {
        width: 155,
        height: 120,
        marginTop: 20
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
        borderRadius: 5,
        borderColor: '#949494',
        paddingLeft: 10,
        color: '#000'

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
        //marginTop: 20,
        //marginBottom: 10

    },
    BottomRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
})
export default SellBitcoinScreen1;

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Platform, ScrollView, TouchableNativeFeedback, Keyboard, StatusBar } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/ModeratePageCard/Header';


const { width, height } = Dimensions.get('screen')

const TradeSuccesfullScreen2 = ({ navigation }) => {

    return (
        <View style={{ height: height, width: width, flex: 1 }}>
            {/* <StatusBar hidden /> */}
            <SafeAreaView style={{ flex: 1, height: height, width: width, backgroundColor: '#d65d0e' }}>
                <View style={{ height: '8%', justifyContent: 'center' }}>
                    <Text style={{ color: "#fff", alignSelf: 'center' }}>Trade Sucessful</Text>
                </View>

                <View style={[styles.whiteCardBg, { height: '92%' }]}>
                    <Image source={require('../../../Assets/greenLogo.png')} style={styles.image} />
                    <Image source={require('../../../Assets/ICONS/green-check.png')} style={styles.tickImage} />
                    <View style={{justifyContent:'space-between',flex:1}}>
                        <View>
                        <Text style={{ alignSelf: "center", fontSize: 15, fontWeight: '600', letterSpacing: 1 }}>You trade has been submitted</Text>
                            <Text style={{ alignSelf: "center", fontSize: 11, fontWeight: '400', marginTop: 3 }}>TRADE ID: #G4558668900</Text>
                        </View>
                        <View style={{ paddingHorizontal: 30 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 20 }}>
                                <View>
                                    <Text style={{ fontSize: 12}}>WALLET</Text>
                                    <Text style={{  fontSize: 12 }}>1BnG5fDHDVF6gCDHKFKDBXCg6cfb</Text>
                                </View>
                                <View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 20 }}>
                                <View>
                                    <Text style={{ fontSize: 12 }}>AMOUNT SENT</Text>
                                    <Text style={{ fontWeight: '500' }}>$1000(0.023)</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12 }}>TRANSACTION VALUE</Text>
                                    <Text style={{ fontWeight: '500', alignSelf: 'flex-end' }}>N330,000</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 20 }}>
                                <View>
                                    <Text style={{ fontSize: 12 }}>ESTIMATED TIME</Text>
                                    <Text style={{ fontWeight: '500' }}>20-35mins</Text>
                                </View>
                                <View>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 12 }}>STATUS</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontWeight: '500', fontSize: 15, color: '#d65d0e' }}>Pending</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center' }}>NOTE:</Text>
                            <Text style={{ textAlign: 'center' }}>
                                <Text>Your transaction will be treated with the actual</Text>
                                <Text>BITCOIN amount we recieve</Text>
                            </Text>
                        </View>

                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <Text style={{
                                alignSelf: 'center', backgroundColor: '#d65d0e', width: '100%', textAlign: "center",
                                padding: 10,
                                color: '#fff',
                                borderRadius: 5
                            }}>HOME</Text>
                        </TouchableOpacity>

                    </View>

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
export default TradeSuccesfullScreen2;

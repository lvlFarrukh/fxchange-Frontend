import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


const { width, height } = Dimensions.get('screen')

const DashBoardScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ height: height, width: width, flex: 1, backgroundColor: '#0a8a40' }}>
            <View style={[styles.header, {}]}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: 5 }}>
                    <Text style={{ color: '#fff' }}>Hi, Amanda</Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 10, color: '#fff' }}>Wallet Balance</Text>
                    <Text style={{ fontSize: 30, color: '#fff' }}>N50,000</Text>
                    <Text></Text>
                    <Text style={{ fontSize: 12, color: '#fff' }}>WITHDRAW FUNDS |  TRANSACTION HISTORY</Text>
                </View>
            </View>



            <View style={[styles.body, {}]}>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        //alignSelf: "center", 
                        backgroundColor: '#264389',
                        height: 70,
                        marginTop: -35,
                        marginHorizontal: 30,
                        borderRadius: 15,
                        paddingHorizontal: 10
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../Assets/ICONS/giftcard.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5 }}>Sell Giftcard</Text>
                    </View>
                    <Icon
                        name={'arrow-forward-outline'}
                        size={30}
                        color={'#fff'}
                        style={{}}></Icon>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        //alignSelf: "center", 
                        backgroundColor: '#d65d0e',
                        height: 70,
                        marginTop: 20,
                        marginHorizontal: 30,
                        borderRadius: 15,
                        paddingHorizontal: 10
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../Assets/ICONS/Bitcoin.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5 }}>Sell Bitcoin</Text>
                    </View>
                    <Icon
                        name={'arrow-forward-outline'}
                        size={30}
                        color={'#fff'}
                        style={{}}></Icon>
                </TouchableOpacity>

                <View
                    style={{
                        backgroundColor: '#fff',
                        height: 80,
                        marginTop: 30,
                        marginHorizontal: 30,
                        borderRadius: 15,
                        paddingHorizontal: 10,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 50, },
                        shadowOpacity: 1,
                        shadowRadius: 5,
                        elevation: 8,
                        padding: 5
                    }}
                >
                    <Text style={{ marginVertical: 5, fontWeight: '400', fontSize: 15 }}>Top Rates</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontWeight: '400' }}>ITunes</Text>
                            <Text style={{ fontSize: 10 }}>N33,000</Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: '400' }}>ITunes</Text>
                            <Text style={{ fontSize: 10 }}>N33,000</Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: '400' }}>ITunes</Text>
                            <Text style={{ fontSize: 10 }}>N33,000</Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: '400' }}>ITunes</Text>
                            <Text style={{ fontSize: 10 }}>N33,000</Text>
                        </View>
                    </View>
                </View>

                <Text style={{
                    marginLeft: 50,
                    marginTop: 30,
                    fontWeight: '600',
                    fontSize: 15
                }}>News & Updates</Text>

                <View style={{paddingHorizontal:40}}>
                    <ImageBackground
                        source={require('../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg')}
                        style={styles.cardImage}
                    >
                    </ImageBackground>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 45,
        width: 45
    },
    header: {
        flex: 0.25,
        backgroundColor: '0a8a40',
    },
    body: {
        flex: 0.75,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    cardImage: {
        width: '100%',
        height: 120,
        marginTop: 20,
        backgroundColor: '#dfe2f5',
        alignSelf: 'center',
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
})
export default DashBoardScreen;

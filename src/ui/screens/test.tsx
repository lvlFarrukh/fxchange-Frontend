import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('screen')

const Test = ({ navigation }) => {

    //navigation.navigate('ModeratorScreen') //faruukh bhais
    //navigation.navigate('TransactionHistoryScreen') //anas
    //navigation.navigate('CreateAccountScreen') // hassans
    //navigation.navigate('WithdrawalsScreenThree') // imran bhaiis
    return (
        <View style={{ height: height, width: width, flex: 1, justifyContent: 'center', backgroundColor: 'rgb(10, 138, 64)' }}>
             <StatusBar translucent backgroundColor='transparent' />
            <SafeAreaView>
            {/* <StatusBar hidden /> */}

            <ScrollView>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('CreateAccountScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>CreateAccountScreen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('TransactionHistoryScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>TransactionHistoryScreen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('CardDetails')
                    }}
                >
                    <Text style={{ padding: 10 }}>CardDetails</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>WithdrawalsScreen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreenTwo')
                    }}
                >
                    <Text style={{ padding: 10 }}>WithdrawalsScreenTwo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreenThree')
                    }}
                >
                    <Text style={{ padding: 10 }}>WithdrawalsScreenThree</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithDrawScreenFour')
                    }}
                >
                    <Text style={{ padding: 10 }}>WithDrawScreenFour</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreenFive')
                    }}
                >
                    <Text style={{ padding: 10 }}>WithdrawalsScreenFive</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithDrawScreenSix')
                    }}
                >
                    <Text style={{ padding: 10 }}>WithDrawScreenSix</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('ModeratorScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>ModeratorScreen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('DashBoardScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>DashBoardScreen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('GiftCardScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>GiftCardScreen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('SwitchGiftCard')
                    }}
                >
                    <Text style={{ padding: 10 }}>ModeratorScreen (Switch Giftcard)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('BitcoinCardDetailPending')
                    }}
                >
                    <Text style={{ padding: 10 }}>ModeratorScreen (BitcoinCardDetailPending)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('ItunesGiftCardScreen')
                    }}
                >
                    <Text style={{ padding: 10 }}>ItunesGiftCardScreen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('BitcoinCardDetailDecline')
                    }}
                >
                    <Text style={{ padding: 10 }}>ModeratorScreen (BitcoinCardDetailDecline)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('TradeSuccessfull')
                    }}
                >
                    <Text style={{ padding: 10 }}>TradeSuccessfull</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('TradeSuccesfullScreen2')
                    }}
                >
                    <Text style={{ padding: 10 }}>TradeSuccesfullScreen2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('SellBitcoinScreen1')
                    }}
                >
                    <Text style={{ padding: 10 }}>SellBitcoinScreen1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('BitcoinCardDetailComplete')
                    }}
                >
                    <Text style={{ padding: 10 }}>ModeratorScreen (BitcoinCardDetailComplete)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('UploadGiftCard')
                    }}
                >
                    <Text style={{ padding: 10 }}>dashboard (UploadGiftCard)</Text>
                </TouchableOpacity>


                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('SellBitcoin')
                    }}
                >
                    <Text style={{ padding: 10 }}>dashboard (SellBitcoin)</Text>
                </TouchableOpacity>
            </ScrollView>
            </SafeAreaView>
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
export default Test;

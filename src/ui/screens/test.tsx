import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../components/DefaultTextComponent/MyText';


const { width, height } = Dimensions.get('screen')

const Test = ({ navigation }) => {

    //navigation.navigate('ModeratorScreen') //faruukh bhais
    //navigation.navigate('TransactionHistoryScreen') //anas
    //navigation.navigate('CreateAccountScreen') // hassans
    //navigation.navigate('WithdrawalsScreenThree') // imran bhaiis
    return (
        <View style={{ height: height, width: width, flex: 1, justifyContent: 'center', backgroundColor: '#1bb76d' }}>
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
                    <MyText style={{ padding: 10 }}>CreateAccountScreen</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('TransactionHistoryScreen')
                    }}
                >
                    <MyText style={{ padding: 10 }}>TransactionHistoryScreen</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('CardDetails')
                    }}
                >
                    <MyText style={{ padding: 10 }}>CardDetails</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreen')
                    }}
                >
                    <MyText style={{ padding: 10 }}>WithdrawalsScreen</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreenTwo')
                    }}
                >
                    <MyText style={{ padding: 10 }}>WithdrawalsScreenTwo</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreenThree')
                    }}
                >
                    <MyText style={{ padding: 10 }}>WithdrawalsScreenThree</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithDrawScreenFour')
                    }}
                >
                    <MyText style={{ padding: 10 }}>WithDrawScreenFour</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithdrawalsScreenFive')
                    }}
                >
                    <MyText style={{ padding: 10 }}>WithdrawalsScreenFive</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('WithDrawScreenSix')
                    }}
                >
                    <MyText style={{ padding: 10 }}>WithDrawScreenSix</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('ModeratorScreen')
                    }}
                >
                    <MyText style={{ padding: 10 }}>ModeratorScreen</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('DashBoardScreen')
                    }}
                >
                    <MyText style={{ padding: 10 }}>DashBoardScreen</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('GiftCardScreen')
                    }}
                >
                    <MyText style={{ padding: 10 }}>GiftCardScreen</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('SwitchGiftCard')
                    }}
                >
                    <MyText style={{ padding: 10 }}>ModeratorScreen (Switch Giftcard)</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('BitcoinCardDetailPending')
                    }}
                >
                    <MyText style={{ padding: 10 }}>ModeratorScreen (BitcoinCardDetailPending)</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('ItunesGiftCardScreen')
                    }}
                >
                    <MyText style={{ padding: 10 }}>ItunesGiftCardScreen</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('BitcoinCardDetailDecline')
                    }}
                >
                    <MyText style={{ padding: 10 }}>ModeratorScreen (BitcoinCardDetailDecline)</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('TradeSuccessfull')
                    }}
                >
                    <MyText style={{ padding: 10 }}>TradeSuccessfull</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('TradeSuccesfullScreen2')
                    }}
                >
                    <MyText style={{ padding: 10 }}>TradeSuccesfullScreen2</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('SellBitcoinScreen1')
                    }}
                >
                    <MyText style={{ padding: 10 }}>SellBitcoinScreen1</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('BitcoinCardDetailComplete')
                    }}
                >
                    <MyText style={{ padding: 10 }}>ModeratorScreen (BitcoinCardDetailComplete)</MyText>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('UploadGiftCard')
                    }}
                >
                    <MyText style={{ padding: 10 }}>dashboard (UploadGiftCard)</MyText>
                </TouchableOpacity>


                <TouchableOpacity
                activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('SellBitcoin')
                    }}
                >
                    <MyText style={{ padding: 10 }}>dashboard (SellBitcoin)</MyText>
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

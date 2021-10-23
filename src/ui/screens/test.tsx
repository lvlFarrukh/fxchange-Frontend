import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, StatusBar } from 'react-native';


const { width, height } = Dimensions.get('screen')

const Test = ({ navigation }) => {

    //navigation.navigate('ModeratorScreen') //faruukh bhais
    //navigation.navigate('TransactionHistoryScreen') //anas
    //navigation.navigate('CreateAccountScreen') // hassans
    //navigation.navigate('WithdrawalsScreenThree') // imran bhaiis
    return (
        <View style={{ height: height, width: width, flex: 1,justifyContent: 'center', backgroundColor: 'rgb(10, 138, 64)' }}>
            <StatusBar hidden />

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('CreateAccountScreen')
                }}
            >
                <Text style={{ padding: 10 }}>CreateAccountScreen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('TransactionHistoryScreen')
                }}
            >
                <Text style={{ padding: 10 }}>TransactionHistoryScreen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('CardDetails')
                }}
            >
                <Text style={{ padding: 10 }}>CardDetails</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WithdrawalsScreenTwo')
                }}
            >
                <Text style={{ padding: 10 }}>WithdrawalsScreenTwo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WithdrawalsScreen')
                }}
            >
                <Text style={{ padding: 10 }}>WithdrawalsScreen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('WithdrawalsScreenThree')
                }}
            >
                <Text style={{ padding: 10 }}>WithdrawalsScreenThree</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ModeratorScreen')
                }}
            >
                <Text style={{ padding: 10 }}>ModeratorScreen</Text>
            </TouchableOpacity>
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

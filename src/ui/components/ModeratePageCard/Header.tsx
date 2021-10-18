import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen')

const Header = ({ navigation }) => {


    return (
        <View style={{ backgroundColor: 'rgb(10, 138, 64)', flexDirection: 'row',height:50 }}>

        <TouchableOpacity 
        style={{alignSelf:"center" ,marginLeft:20,}}
        onPress={()=>{navigation.goBack()}}
        >
            <Image source={require('../../../Assets/ICONS/arrow=white.png')} style={styles.image} />
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({
    image : {
        height:20,
        width:25,
        
    }
})
export default Header;

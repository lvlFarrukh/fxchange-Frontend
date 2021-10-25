import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen')

interface Props {
    navigation?: any
    Heading?: any
    style?: any
    TextColor? : any
 }

const Header : React.FC<Props> = (props) => {
   const navigation=props.navigation
   const Heading=props.Heading
   const style=props.style
   const TextColor=props.TextColor

    return (
        <View style={[styles.container , style]}>

            <TouchableOpacity
                style={{ alignSelf: "center", marginLeft: 20, }}
                onPress={() => { navigation.goBack() }}
            >
                <Image source={require('../../../Assets/ICONS/arrow=white.png')} style={styles.image} />
            </TouchableOpacity>

            <Text style={[{color:"#fafafa",fontSize:18  ,alignSelf:'center', marginLeft: -20,marginTop:-5} , TextColor]}>
            {Heading}
            </Text>

            <View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 15,
        width: 25,

    },
    container : {
        backgroundColor: 'transparent', flexDirection: 'row', height: 50,justifyContent:"space-between"
    }
})
export default Header;

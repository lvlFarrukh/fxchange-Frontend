import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';

interface Props {
    props?: any
    style?: any
    onPress? :any
 }

const MyText : React.FC<Props> = (props) => {
    return (
         <MyText style={[props.style,{fontFamily:'Nunito-Regular'}]} onPress={props.onPress}>{props.children}</MyText>
    )
 }
 export default MyText;

import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Style';

const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
    const navigateBack = () => {
        console.log('WORKING')
        navigation.goBack(null)
    }
  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <View style={styles.header}>
        <TouchableOpacity style={{marginLeft : 15}}
          onPress={()=> navigateBack()}
        >
          <Image source={require('../../../../Assets/ICONS/arrow=white.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerHeading}>ITUNES - #FGRAC23287843</Text>
        <Text></Text>
      </View>
      <View style={styles.mainBody}>
        <View style={[styles.headerButtons]}>
          <Text style={[styles.headerButtom]}>Opened by Thomas</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

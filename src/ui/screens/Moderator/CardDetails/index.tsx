import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
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
        <Image source={require('../../../../Assets/ICONS/arrow=white.png')} style={styles.backArrow} onPress={()=>navigateBack()}/>
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

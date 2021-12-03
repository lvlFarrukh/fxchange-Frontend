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
} from 'react-native';
import MyText from '../DefaultTextComponent/MyText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('screen');

interface Props {
  navigation?: any;
  Heading?: any;
  style?: any;
  TextColor?: any;
  arrowIconStyle?: any;
  isSearchIconStyle?: any;
  // isSearchModal?: any;
  handleSearchModal?: any;
  backArrowRoute?: any;
}

const Header: React.FC<Props> = props => {
  const navigation = props.navigation;
  const Heading = props.Heading;
  const style = props.style;
  const TextColor = props.TextColor;
  const arrowIconStyle = props.arrowIconStyle;
  const isSearchIconStyle = props.isSearchIconStyle;
  // const isSearchModal = props.isSearchModal;
  const handleSearchModal = props.handleSearchModal;
  const backArrowRoute = props.backArrowRoute;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginLeft: 20,
          padding: 10,
          paddingLeft: -10,
        }}
        onPress={() => {
          backArrowRoute ?
          navigation.navigate(backArrowRoute)
          :
          navigation.goBack();
        }}>
        <Image
          source={require('../../../Assets/ICONS/arrow=white.png')}
          style={[styles.image, arrowIconStyle]}
        />
      </TouchableOpacity>

      <MyText
        style={[
          {
            color: '#fafafa',
            fontSize: 18,
            alignSelf: 'center',
            marginLeft: -40,
            marginTop: -5,
          },
          TextColor,
        ]}>
        {Heading}
      </MyText>

      <View>

        {
          isSearchIconStyle && (
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginLeft: -55,
                padding: 10,
                marginRight: 15,
              }}
              onPress={handleSearchModal}>
              <Image
                source={require('../../../Assets/ICONS/Search_Icon.png')}
                style={{
                  resizeMode: 'contain',
                  height: wp(6),
                  width: wp(6)
                }}
              />
            </TouchableOpacity>
          )
        }
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 15,
    width: 25,
  },
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
  },
});
export default Header;

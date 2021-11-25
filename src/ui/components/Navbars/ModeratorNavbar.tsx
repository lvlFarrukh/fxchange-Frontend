import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ModeratorNavbar = ({navigation, activePage, backgroundColor}) => {
  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          paddingVertical: 15,
        //   backgroundColor: '#1bb76d',
        }}>
        <TouchableOpacity onPress={() => { navigation.navigate('AdminWithdrawalHome');}}>
          {/* {activePage === 'home' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/home-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/home.png')}
            />
          )} */}

          {activePage === 'withdrawals' ? (
            <Text style={{fontSize: RFValue(15), fontWeight: '400', color: '#0a8a40'}}>Withdrawals</Text>
          ) : (
            <Text style={{fontSize: RFValue(15), fontWeight: '400'}}>Withdrawals</Text>
          )}

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ModeratorScreen');
          }}>
            {activePage === 'trade' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/trade-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/trade.png')}
            />
          )}

          {/* {activePage === 'trade' ? (
            <Text style={{fontSize: RFValue(15), fontWeight: '400', color: '#0a8a40'}}>Trade</Text>
          ) : (
            <Text style={{fontSize: RFValue(15), fontWeight: '400'}}>Trade</Text>
          )} */}

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AdminUserHome');
          }}>
           {/* {activePage === 'rates' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/rate-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/rate.png')}
            />
          )} */}

          {activePage === 'user' ? (
            <Text style={{fontSize: RFValue(15), fontWeight: '400', color: '#0a8a40'}}>User</Text>
          ) : (
            <Text style={{fontSize: RFValue(15), fontWeight: '400'}}>User</Text>
          )}

        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          {activePage === 'more' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/more-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/more.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ModeratorNavbar;

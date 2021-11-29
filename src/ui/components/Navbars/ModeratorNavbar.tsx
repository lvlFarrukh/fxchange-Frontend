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
          {activePage === 'withdrawals' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/withdrawals-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/withdrawals.png')}
            />
          )}

          {/* {activePage === 'withdrawals' ? (
            <MyText style={{fontSize: RFValue(15), fontWeight: '400', color: '#0a8a40'}}>Withdrawals</MyText>
          ) : (
            <MyText style={{fontSize: RFValue(15), fontWeight: '400'}}>Withdrawals</MyText>
          )} */}

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
            <MyText style={{fontSize: RFValue(15), fontWeight: '400', color: '#0a8a40'}}>Trade</MyText>
          ) : (
            <MyText style={{fontSize: RFValue(15), fontWeight: '400'}}>Trade</MyText>
          )} */}

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AdminUserHome');
          }}>
           {activePage === 'user' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/users-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/users.png')}
            />
          )}

          {/* {activePage === 'user' ? (
            <MyText style={{fontSize: RFValue(15), fontWeight: '400', color: '#0a8a40'}}>User</MyText>
          ) : (
            <MyText style={{fontSize: RFValue(15), fontWeight: '400'}}>User</MyText>
          )} */}

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

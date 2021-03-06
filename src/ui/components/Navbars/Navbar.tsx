import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Navbar = ({navigation, activePage, backgroundColor}) => {
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
        <TouchableOpacity onPress={() => { navigation.navigate('DashBoardScreen');}}>
          {activePage === 'home' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/home-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/home.png')}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Trades');
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
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WithdrawalsScreenThree');
          }}>
           {activePage === 'rates' ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/rate-hover.png')}
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../Assets/ICONS/rate.png')}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('WithdrawalsScreen');
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

export default Navbar;

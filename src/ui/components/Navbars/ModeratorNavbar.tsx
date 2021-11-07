import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <TouchableOpacity 
          // onPress={() => { navigation.navigate('ModeratorScreen');}}
        >
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
            navigation.navigate('SignInScreen');
          }}>
            <Icon
                name={'log-out-outline'}
                size={28}
                color={activePage === 'logout' ? '#0a8a40' : 'black'}
                style={{fontWeight: '700'}}></Icon>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ModeratorNavbar;

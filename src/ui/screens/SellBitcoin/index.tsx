import React, {useState} from 'react';
import {View, Text, Dimensions, Image, TextInput, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Header from '../../components/ModeratePageCard/Header';
import Style from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
  const [isProcessModalVisible, setProcessModalVisible] = useState(false);
  const [isDelineModalVisible, setdelineModalVisible] = useState(false);

  const toggleDeclineModal = () => {
    setdelineModalVisible(!isDelineModalVisible);
  };

  const toggleProcessModal = () => {
    setProcessModalVisible(!isProcessModalVisible);
  };

  return (
    <View style={{height: height, width: width, backgroundColor: '#d65d0e'}}>
      <StatusBar translucent backgroundColor='transparent' />
      <ScrollView>
        <Header
          style={{marginTop: 35}}
          navigation={navigation}
          Heading={'Sell Bitcoin'}
          //style={{marginTop: 0}}
        />
        <View
          style={{
            marginTop: 10,
            height: height-60,
            width: width,
            backgroundColor: '#ffffff',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            paddingHorizontal: '10%',
          }}>
          <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 12}}>
            <TextInput
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 4,
                borderColor: '#F1F1F1',
                borderWidth: 0.8,
                width: '48%',
                height: 46,
                // margin: 7,
                paddingLeft: 15,
                color: 'black',
                fontSize: 12,
              }}
              underlineColorAndroid="transparent"
              placeholder="Enter amount in USD"
              placeholderTextColor="#676767"
              textAlign={'left'}
              // numberOfLines={2}
              // multiline={true}
            />
            <Text style={{margin: 10}}>=</Text>
            <View style={{marginTop: -4}}>
              <Text style={{fontSize: 8.2, color: 'gray'}}>
                Estimated Rate (570/$)
              </Text>
              <Text style={{fontSize: 18}}>N3500,000</Text>
            </View>
          </View>

          {/* hr */}
          <View style={Style.hr}></View>

          <View
            style={[{marginBottom: 6, marginTop: 12, flexDirection: 'row'}]}>
            <Image
              source={require('../../../Assets/ICONS/barCode.png')}
              style={{
                width: 110,
                height: 110,
                // alignSelf: 'center',
              }}
            />
            <View style={{marginLeft: 10, marginTop: 5}}>
              <Text style={[{color: 'gray', fontSize: 9, marginBottom: 5}]}>
                Wallet Address
              </Text>
              <Text style={[{color: 'black', fontSize: 11, marginBottom: 2}]}>
                23kjhsdfk1kjjkdfskf1kjkhjkkdkjl
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  width: 80,
                  borderRadius: 3,
                  borderWidth: 1.5,
                  borderColor: '#e08445',
                }}>
                <Text
                  style={{
                    color: '#e08445',
                    fontSize: 10,
                    textAlign: 'center',
                    paddingBottom: 2,
                    paddingTop: 1,
                  }}>
                  Copy Address
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 25, paddingRight: 22}}>

            <Image 
                source={require('../../../Assets/ICONS/info_icon.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight:10,
                  marginTop: 2,
              }}
            />

            <Text style={{fontSize: 10,}}>Send your bitcoin to the above wallet then click the button below to process your transaction </Text>
          </View>

          <View style={{marginTop: 85}}>
              <TouchableOpacity
                style={{
                    backgroundColor: '#d65d0e',
                    width: '100%',
                    alignSelf: 'center',
                    height: 30,
                    borderRadius: 4,
                    justifyContent: 'center'
                }}
                onPress={() => {
                  navigation.navigate('SellBitcoinScreen1')
                }}
              >
                  <Text style={{
                      color: 'white',
                      textAlign: 'center'
                  }}>CONTINUE</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

import React from 'react';
import {View, Text, Dimensions, Image, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './Style';

const {width, height} = Dimensions.get('screen');

const index = ({navigation}) => {
  const navigateBack = () => {
    console.log('WORKING');
    navigation.goBack(null);
  };
  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <StatusBar hidden />
      <View style={Style.header}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => navigateBack()}>
          <Image
            source={require('../../../../Assets/ICONS/arrow=white.png')}
            style={Style.backArrow}
          />
        </TouchableOpacity>
        <Text style={Style.headerHeading}>ITUNES - #FGRAC23287843</Text>
        <Text></Text>
      </View>
      <View style={Style.mainBody}>
        <View style={[Style.headerButtons]}>
          <Text style={[Style.headerButtom]}>Opened by Thomas</Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 12,
            borderRadius: 10,
            paddingTop: 8,
            paddingBottom: 5,
            paddingLeft: 18,
            paddingRight: 18,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                source={require('../../../../Assets/CARDS/itunes.png')}
                style={Style.titleImage}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 5,
                  alignSelf: 'center',
                  paddingBottom: 6,
                }}>
                Itunes
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: 22,
                  height: 22,
                  borderRadius: 20,
                  alignSelf: 'center',
                  position: 'relative',
                  left: 34,
                  zIndex: 1
                }}  
                
              >
                <Image
                  source={require('../../../../Assets/ICONS/zoom.png')}
                  style={{
                    width: 11,
                    height: 11,
                    alignSelf: 'center',
                    marginTop: 5,
                  }}
                />
              </View>
              <Image
                source={require('../../../../Assets/IMG_3151.jpg')}
                style={{width: 48, height: 40}}
              />
            </View>
          </View>
          {/* hr */}
          <View style={Style.hr}></View>

          <View style={Style.lowerPortion}>

                <View>
                    <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                        Amount (120/5)
                    </Text>
                    <Text style={Style.mdFontBlackColor}>
                        ${'50 (N16,000)'}
                    </Text>
                </View>

                <View>
                    <Text style={[{color: 'gray', fontSize: 12}]}>
                        {'Dec 10, 2021 1:20pm'}
                    </Text>
                    <Text style={[{textAlign: 'right', color: 'red', fontSize: 13}]}>
                        {'DECLINED'}
                    </Text>
                </View>

            </View>

            {/* hr */}
          <View style={Style.hr}></View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

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
import {TouchableHighlight} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/ModeratePageCard/Header';

const {width, height} = Dimensions.get('screen');

const TradeSuccessfull = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{height: height, width: width, flex: 1}}>
        {/* <StatusBar hidden /> */}
        <SafeAreaView
          style={{
            flex: 1,
            height: height,
            width: width,
            backgroundColor: '#1bb76d',
          }}>
          <View style={{height: '8%', justifyContent: 'center'}}>
            <Text style={{fontSize:18 ,color: '#fff', alignSelf: 'center'}}>
              Trade Sucessful
            </Text>
          </View>

          <View style={[styles.whiteCardBg, {height: '92%'}]}>
            <Image
              source={require('../../../Assets/greenLogo.png')}
              style={styles.image}
            />
            <Image
              source={require('../../../Assets/ICONS/green-check.png')}
              style={styles.tickImage}
            />
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    fontWeight: '600',
                    letterSpacing: 1,
                    color: '#333',
                  }}>
                  You trade has been submitted
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 11,
                    fontWeight: '400',
                    marginTop: 3,
                    color: '#656565',
                  }}>
                  TRADE ID: #G4558668900
                </Text>
              </View>
              <View style={{paddingHorizontal: 30, marginTop: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    paddingTop: 20,
                    paddingBottom: 15,
                  }}>
                  <View>
                    <Text style={{fontSize: 11}}>CARD</Text>
                    <Text style={{fontWeight: '500', fontSize: 15}}>
                      Itunes
                    </Text>
                  </View>
                  <View style={{marginRight: 12}}>
                    <Text style={{fontSize: 11}}>CARD CURRENCY</Text>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>
                      US Dollars
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    paddingVertical: 15,
                  }}>
                  <View>
                    <Text style={{fontSize: 11}}>CARD VALUE</Text>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>$1000</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>TRANSACTION VALUE</Text>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>
                      N330,000
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    paddingVertical: 15,
                  }}>
                  <View>
                    <Text style={{fontSize: 12}}>ESTIMATED TIME</Text>
                    <Text style={{fontWeight: '500'}}>20-35mins</Text>
                  </View>
                  <View style={{marginRight: 43}}>
                    <Text style={{fontSize: 12}}>STATUS</Text>
                    <Text
                      style={{
                        alignSelf: 'flex-end',
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#d65d0e',
                      }}>
                      Pending
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{marginTop: 20, marginBottom: 50, flexDirection:'column'}}>
                <Text
                  style={{textAlign: 'center', fontSize: 10, color: '#343434'}}>
                  NOTE:
                </Text>
                <Text style={{textAlign: 'center',}}>
                  <Text style={{fontSize: 10, color: '#343434'}}>
                    if you uploaded a Giftcard on the wrong section it will be {"\n"}
                  </Text>
                  <Text style={{fontSize: 10, color: '#343434'}}>
                    transferednand treated at the current rate {"\n"}
                  </Text>
                  <Text style={{fontSize: 10, color: '#343434'}}>
                    of the appropriate section {"\n"}
                  </Text>
                </Text>
              </View>

              <TouchableOpacity activeOpacity={0.9} style={{marginTop: 10}}
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#1bb76d',
                    width: '100%',
                    textAlign: 'center',
                    padding: 10,
                    color: '#fff',
                    borderRadius: 5,
                  }}>
                  HOME
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 20,
    height: 20,
  },
  image: {
    width: 160,
    height: 55,
    alignSelf: 'center',
    marginTop: 10,
  },
  tickImage: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 18,
    marginBottom: 5,
  },
  whiteCardBg: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: width,
    padding: 20,
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  bodyHeader: {
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    paddingBottom: 15,
  },
  cardImage: {
    width: 155,
    height: 120,
    marginTop: 20,
  },
  Heading: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 15,
    color: '#343434',
  },
  TextInputStyle: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#949494',
    paddingLeft: 10,
    color: '#000',
  },
  GreenButton: {
    // alignSelf:'center',
    // backgroundColor:'#1bb76d',
    // width:'100%'
    borderWidth: 1,
    borderColor: '#1bb76d',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 15,
    fontWeight: '700',
    color: '#fafafa',
    backgroundColor: '#1bb76d',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 50},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    //marginTop: 20,
    //marginBottom: 10
  },
  BottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
export default TradeSuccessfull;

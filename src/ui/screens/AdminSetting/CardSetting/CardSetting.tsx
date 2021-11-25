import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../../../components/ModeratePageCard/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyText from '../../../components/DefaultTextComponent/MyText';
import CardModal from '../Modals/CardModal';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const CardSetting = ({navigation}) => {
    const [isCardModal, setisCardModal] = useState(false);

    const handleChangeCardModal = () => {
        setisCardModal(!isCardModal)
    }
  return (
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d',
      }}>
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <StatusBar backgroundColor="#343434" />
        {/* <View style={styles.header}>
        <MyText style={styles.headerHeading}>Trades</MyText>
      </View> */}
        <View
          style={{height: height, width: width, backgroundColor: '#343434'}}>
          <Header
            style={{marginTop: 0, marginLeft: 10, backgroundColor: '#343434'}}
            navigation={navigation}
            Heading={'Card Setting'}
          />

          <View style={{
              alignSelf: 'center',
              marginBottom: 20,
              width: width,
              height: height - 100,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              position: 'absolute',
              zIndex: 1,
              top: 50
          }}>
            
            <ScrollView
                style={{
                paddingTop: hp(3),
                paddingHorizontal: wp(7),
                height: '100%',
                }}
            >
                
                <View
                    style={{
                        flexDirection: "column",
                        marginVertical: 5
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity style={{
                            width: wp(25),
                            height: wp(25),
                            borderWidth: 1,
                            borderRadius: 15,
                            borderColor: '#f1f1f1',
                            padding: 8
                        }}>
                            <Image 
                                source={require('../../../../Assets/CARDS/itunes.png')}
                                style={{width: "100%", height: '100%'}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={handleChangeCardModal}
                        style={{
                            width: wp(25),
                            height: wp(25),
                            borderWidth: 1,
                            borderRadius: 15,
                            borderColor: '#f1f1f1',
                            padding: 8
                        }}>
                            <Image 
                                source={require('../../../../Assets/CARDS/Googleplay.png')}
                                style={{width: "100%", height: '100%'}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: wp(25),
                            height: wp(25),
                            borderWidth: 1,
                            borderRadius: 15,
                            borderColor: '#f1f1f1',
                            padding: 16,
                            backgroundColor: '#f1f1f1'
                        }}>
                            <Image 
                                source={require('../../../../Assets/CARDS/amazon.png')}
                                style={{width: "100%", height: '100%'}}
                            />
                            <MyText style={{
                                color: "#d52c19",
                                fontSize: RFValue(10),
                                alignSelf: 'center',
                                marginTop: -2
                            }}>DISABLED</MyText>
                        </TouchableOpacity>
                        
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            marginVertical: 15
                        }}
                    >
                        <TouchableOpacity style={{
                            width: wp(25),
                            height: wp(25),
                            borderWidth: 1,
                            borderRadius: 15,
                            borderColor: '#f1f1f1',
                            padding: 8,
                            justifyContent: 'center'
                        }}
                            onPress={() => {
                                navigation.navigate('AddCard');
                            }}
                        >
                            
                            <MyText style={{
                                fontSize: RFValue(50),
                                alignSelf: 'center',
                                marginTop: -10

                            }}>+</MyText>
                            <MyText style={{
                                fontSize: RFValue(10),
                                alignSelf: 'center',
                                marginTop: -10
                            }}>Add Card</MyText>
                        </TouchableOpacity>

                    </View>



                </View>

            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      <CardModal isOpen={isCardModal} handleChange={handleChangeCardModal} data={undefined}  />

    </View>
  );
};

export default CardSetting;

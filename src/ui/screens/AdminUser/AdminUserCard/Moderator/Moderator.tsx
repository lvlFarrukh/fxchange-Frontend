import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyText from '../../../../components/DefaultTextComponent/MyText';
import Style from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  title: string;
  amount: string;
  date: string;
  type: string;
  isEditRole: () => void;
  isBanUser: () => void;
  isDelete: () => void;
  navigation: any,
  isStatistics: any,
}

const Banned: React.FC<Props> = props => {
 
  return (
      <View style={Style.mainBody}>
        {/* Upper portion */}
        <View style={Style.upperCardPortion}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <MyText
                style={{
                  color: '#333333',
                  fontSize: RFValue(16),
                  fontWeight: '600',
                }}>
                Jthomas
              </MyText>

              <MyText
                style={{
                  color: '#676767',
                  fontSize: RFValue(12),
                  marginTop: -2,
                }}>
                justinthom@mail.com
              </MyText>
            </View>
          </View>

          <View style={{marginTop: 5}}>
            <MyText
              style={{
                color: '#333333',
                fontSize: RFValue(11),
                fontWeight: '600',
                textAlign: 'right',
              }}>
              08138138138
            </MyText>

            <MyText
              style={{
                color: '#676767',
                fontSize: RFValue(8),
                marginTop: 5,
                textAlign: 'right',
              }}>
              DEC 10, 2021 1:30PM
            </MyText>
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            justifyContent: 'space-between',
            paddingHorizontal: 6,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: -wp(0.5)}}>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#f1f1f1',
                width: wp(22),
                justifyContent: 'center',
                borderRadius: 20,
                height: hp(3.2),
              }}>
              <MyText style={{fontSize: RFValue(13), paddingLeft: 8}}>
                N5,000
              </MyText>
            </View>

            <View
              style={{
                backgroundColor: '#d25d10',
                width: wp(22),
                paddingLeft: wp(5),
                borderRadius: 20,
                marginLeft: -wp(5),
                zIndex: -1,
                height: hp(2.9),
                justifyContent: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}>
              <MyText
                style={{
                  fontSize: RFValue(12),
                  paddingLeft: 8,
                  color: '#ffffff',
                  marginBottom: 2,
                }}>
                Update
              </MyText>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 2,
            }}>
            <View
              style={{
                height: wp(1.7),
                width: wp(1.7),
                backgroundColor: '#18b86e',
                borderRadius: 10,
                marginTop: wp(1),
              }}></View>
            <MyText
              style={{
                fontSize: RFValue(9),
                paddingLeft: 4,
                textAlign: 'right',
              }}>
              Active Now
            </MyText>
          </View>
        </View> */}

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#f1f1f1',
            marginVertical: 5,
            marginHorizontal: hp(1),
          }}></View>

          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>

        <View style={{paddingHorizontal: 6, flexDirection: 'row', marginLeft: -wp(0.5)}}>

          <TouchableOpacity
          onPress={props.isStatistics}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#f1f1f1',
              width: wp(16),
              paddingVertical: 3,
              borderRadius: 15,
              justifyContent: 'center',
              borderWidth: 1,
              height: hp(3.2),
              marginRight: 5 
            }}>
            <MyText style={{fontSize: RFValue(9), textAlign: 'center'}}>
              View Stats
            </MyText>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#f1f1f1',
              width: wp(17),
              paddingVertical: 3,
              borderRadius: 15,
              justifyContent: 'center',
              borderWidth: 1,
              height: hp(3.2),
              marginRight: 5 
            }}
            onPress={props.isEditRole}
          >
            <MyText style={{fontSize: RFValue(9), textAlign: 'center',}}>
              Edit Role
            </MyText>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#f1f1f1',
              width: wp(17),
              paddingVertical: 3,
              borderRadius: 15,
              justifyContent: 'center',
              borderWidth: 1,
              height: hp(3.2),
            }}
            onPress={props.isBanUser}
          >
            <MyText style={{fontSize: RFValue(9), textAlign: 'center', color: '#da7229'}}>
              Ban
            </MyText>
          </TouchableOpacity>

        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
              borderColor: '#f1f1f1',
              width: wp(18),
              paddingVertical: 3,
              borderRadius: 15,
              justifyContent: 'center',
              borderWidth: 1,
              backgroundColor: "#f02922",
              height: hp(3.2),
            }}
          onPress={props.isDelete}
          >
            <MyText style={{fontSize: RFValue(9), textAlign: 'center', color: 'white'}}>
              Delete
            </MyText>
          </TouchableOpacity>
          </View>
      </View>
  );
};

export default Banned;

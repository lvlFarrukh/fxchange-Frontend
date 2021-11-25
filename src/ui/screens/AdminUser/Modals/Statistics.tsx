import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

interface Props {
  isOpen: boolean;
  handleChange: () => void;
  action: () => void;
}

const Statistics: React.FC<Props> = props => {
  return (
    <Modal isVisible={props.isOpen}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          backgroundColor: '#ffffff',
          borderRadius: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: hp(1),
            marginBottom: hp(1.5),
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={props.handleChange}
            style={{marginLeft: -40}}>
            {/* <MyText style={{fontSize: 30, fontWeight: '500', color: '#979797'}}>
              x
            </MyText> */}

            <Image
              style={{height: wp(5), width: wp(5)}}
              source={require('../../../../Assets/ICONS/cross.png')}
            />
          </TouchableOpacity>

          <MyText
            style={{
              fontSize: RFValue(22),
              fontWeight: '500',
              marginLeft: 20,
              paddingTop: 2,
            }}>
            Statistics
          </MyText>
          <MyText></MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 2,
          }}></View>

        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Total Trades
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  200
                </MyText>
              </View>
              <View style={{marginRight: 50}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Completed Trades
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  150 ($400)
                </MyText>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1.5,
                borderColor: '#F1F1F1',
                marginTop: hp(3),
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Declined Trades
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  50 ($100)
                </MyText>
              </View>
              <View style={{marginRight: 50}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Trades in Progress
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  15 ($5000)
                </MyText>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: hp(12),
            }}>
            <View
              style={{
                height: wp(2.2),
                width: wp(2.2),
                backgroundColor: '#18b86e',
                borderRadius: 10,
                marginTop: wp(1),
              }}></View>
            <MyText
              style={{
                fontSize: RFValue(10),
                paddingLeft: 4,
                textAlign: 'right',
              }}>
              Active Now
            </MyText>
          </View>

          <View
            style={{
              alignSelf: 'center',
              width: wp(40),
              justifyContent: 'center',
              height: wp(9),
              marginTop: 18,
              borderRadius: 20,
              borderColor: '#f2f2f2',
              shadowColor: '#000',
              backgroundColor: '#ffffff',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
              marginBottom: hp(6),
            }}>
            <MyText
              style={{
                textAlign: 'center',
                color: '#3434340',
                fontSize: RFValue(15),
              }}>
              Jthomas
            </MyText>
          </View>
        </View>

        {/* <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.action}
          style={{alignSelf: 'center', marginTop: 60}}>
          <MyText
            style={{
              color: '#ee2c23',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            UNBAN
          </MyText>
        </TouchableOpacity>
        <View
          style={[
            {borderTopWidth: 1.5, borderColor: '#F1F1F1', marginBottom: 20},
            {width: wp(40), alignSelf: 'center'},
          ]}></View> */}
      </View>
    </Modal>
  );
};

export default Statistics;

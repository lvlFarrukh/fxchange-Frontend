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
            marginVertical: hp(1)
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={props.handleChange}
            style={{marginLeft: -40}}>
            {/* <MyText style={{fontSize: 30, fontWeight: '500', color: '#979797'}}>
              x
            </MyText> */}
            <Image style={{height: wp(5), width: wp(5)}} source={require('../../../../Assets/ICONS/cross.png')} />

          </TouchableOpacity>

          <MyText
            style={{
              fontSize: RFValue(22),
              fontWeight: '500',
              marginLeft: 20,
              paddingTop: 2,
            }}>
            Site Stats
          </MyText>
          <MyText></MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 2,
          }}></View>

        <View style={{marginBottom: hp(5)}}> 
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <View style={{width: wp(35)}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Total Trades
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  20,000
                </MyText>
              </View>

              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Completed Trades
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  19,000 ($40)
                </MyText>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1.5,
                borderColor: '#F1F1F1',
                marginTop: 15,
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{width: wp(35)}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Declined Trades
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  50 ($10)
                </MyText>
              </View>
              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Trades in Progress
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  10,605 ($30)
                </MyText>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1.5,
                borderColor: '#F1F1F1',
                marginTop: 15,
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View style={{width: wp(35)}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Total User
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  500,000
                </MyText>
              </View>
              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Active User
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  480,000
                </MyText>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1.5,
                borderColor: '#F1F1F1',
                marginTop: 15,
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View style={{width: wp(35)}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Online User
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  7,000
                </MyText>
              </View>
              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Banned Users
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  19,005
                </MyText>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1.5,
                borderColor: '#F1F1F1',
                marginTop: 15,
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View style={{width: wp(35)}}>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Wallet Balance
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  N7,000,000
                </MyText>
              </View>
              <View>
                <MyText style={{fontSize: RFValue(9), color: '#343434'}}>
                  Total Amount Withdrawn
                </MyText>
                <MyText
                  style={{
                    fontSize: RFValue(18),
                    color: '#353535',
                    fontWeight: '600',
                  }}>
                  N19,000,005
                </MyText>
              </View>
            </View>
            
          </View>
        </View>
      
      </View>
    </Modal>
  );
};

export default Statistics;

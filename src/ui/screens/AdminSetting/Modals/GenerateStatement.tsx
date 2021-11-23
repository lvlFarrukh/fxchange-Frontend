import React, { useState } from 'react';
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
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

interface Props {
    isOpen: boolean,
    handleChange: () => void
}

const GenerateStatement: React.FC<Props> = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

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
            marginLeft: 12  
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
              onPress={props.handleChange}
            style={{marginLeft: -30}}>
            <MyText style={{fontSize: 30, fontWeight: '500', color: '#979797'}}>
              x
            </MyText>
          </TouchableOpacity>

          <MyText
            style={{
              fontSize: RFValue(22),
              fontWeight: '500',
              paddingTop: 2,
            }}>
            Generate Statement
          </MyText>
          <MyText></MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 10,
          }}></View>

        <View style={{height: hp(12),marginTop: 15}}>
          
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={showDatePicker}
              style={{
                flex: 0.4,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: '#ffffff',
                alignItems: 'center',
                paddingVertical: 12,
                // paddingHorizontal:10,
                //width: 130,
                //paddingLeft: 10,
                borderRadius: 3,
                borderWidth: 1.5,
                borderColor: '#f1f1f1',
                // height: 100
              }}>
              <MyText
                style={{
                  fontSize: RFValue(14),
                  // marginLeft: -wp(15)
                }}>
                Start Date
              </MyText>

              <Icons style={{marginLeft: wp(30)}} name={'ios-calendar-sharp'} size={15} color={'#fa5100'} />
            </TouchableOpacity>

        </View>

        <View style={{height: hp(12),marginTop: -hp(3.5), marginBottom: hp(10)}}>
          
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={showDatePicker}
              style={{
                flex: 0.4,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: '#ffffff',
                alignItems: 'center',
                paddingVertical: 12,
                // paddingHorizontal:10,
                //width: 130,
                //paddingLeft: 10,
                borderRadius: 3,
                borderWidth: 1,
                borderColor: '#f1f1f1',
                height: 100
              }}>
              <MyText
                style={{
                  fontSize: RFValue(14),
                  // marginLeft: -wp(15)
                }}>
                End Date
              </MyText>

              <Icons style={{marginLeft: wp(31)}} name={'ios-calendar-sharp'} size={15} color={'#fa5100'} />
            </TouchableOpacity>

        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handleChange}
          style={{alignSelf: 'center', marginTop: 0}}>
          <MyText
            style={{
              color: '#0c883f',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            GENERATE
          </MyText>
        </TouchableOpacity>
        <View
          style={[
            {borderTopWidth: 1.5, borderColor: '#F1F1F1', marginBottom: 20},
            {width: wp(40), alignSelf: 'center'},
          ]}></View>
      </View>
    </Modal>
  );
};

export default GenerateStatement;

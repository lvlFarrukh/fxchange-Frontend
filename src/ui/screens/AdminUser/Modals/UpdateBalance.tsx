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
import SelectDropdown from 'react-native-select-dropdown';
import MyText from '../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

interface Props {
  isOpen: boolean;
  handleChange: () => void;
  action: () => void;
}

const UpdateBalance: React.FC<Props> = props => {
  const [isIncrease, setisIncrease] = useState(false)
  const [isDecrease, setisDecrease] = useState(false)

  const selectIncreaseAndDecrease = (action) => {
    if ( action === 'inc') {
      setisIncrease(true)
      setisDecrease(false)
    }
    else if ( action === 'dec' ) {
      setisDecrease(true)
      setisIncrease(false)
    }
  }

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
            marginTop: hp(1)
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={props.handleChange}
            style={{marginLeft: -20}}>
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
            Update Balance
          </MyText>
          <MyText></MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 10,
          }}></View>
        <MyText
          style={{
            fontSize: RFValue(14),
            color: '#4c4c4c',
            textAlign: 'right',
            marginBottom: 10,
            marginTop: 5,
          }}>
          Balance: N500,000
        </MyText>

        <View>
          <TextInput
            style={{
              height: 46,
              backgroundColor: '#dbd9da',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#F1F1F1',
              paddingLeft: 20,
              color: '#000',
              fontSize: 12,
              marginBottom: 15,
              fontFamily: 'Nunito-Regular',
            }}
            editable={false}
            placeholder={'Jthomas'}
            placeholderTextColor={'#343434'}></TextInput>

          <TextInput
            style={{
              height: 46,
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#F1F1F1',
              paddingLeft: 20,
              color: '#000',
              fontSize: 12,
              marginBottom: 15,
              fontFamily: 'Nunito-Regular',
            }}
            placeholder={'Amount'}
            placeholderTextColor={'#343434'}></TextInput>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
            onPress={() => selectIncreaseAndDecrease('inc')}
              style={[{
                width: wp(9),
                height: wp(6),
                borderWidth: 1,
                borderColor: '#f1f1f1',
                borderRadius: 5,
                marginRight: 8,
                justifyContent: 'center'

              },
              ]}>
                <View
                  style={[{
                    width: "90%",
                    height: "90%",
                    backgroundColor: 'lightgray',
                    borderRadius: 4,
                    alignSelf: 'center'
                  },
                  isIncrease ? {backgroundColor: 'lightgray'} : {backgroundColor: "#ffffff"}
                
                ]}
                >
                  
                </View>
              </TouchableOpacity>
            <MyText>Increase</MyText>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => selectIncreaseAndDecrease('dec')}
              style={[{
                width: wp(9),
                height: wp(6),
                borderWidth: 1,
                borderColor: '#f1f1f1',
                borderRadius: 5,
                marginRight: 8,
                justifyContent: 'center'
              }, 
              ]}>
                <View
                  style={
                    [{
                      width: "90%",
                      height: "90%",
                      backgroundColor: 'lightgray',
                      borderRadius: 4,
                      alignSelf: 'center',
                    },
                    isDecrease ? {backgroundColor: 'lightgray'} : {backgroundColor: "#ffffff"}
                  ]}
                >
                  
                </View>
              </TouchableOpacity>
            <MyText>Decrease</MyText>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.handleChange}
          style={{alignSelf: 'center', marginTop:wp(20)}}>
          <MyText
            style={{
              color: '#0c883f',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            UPDATE
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

export default UpdateBalance;

import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import MyText from '../../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

interface Props {
  isOpen: boolean;
  handleChange: () => void;
  acceptModalHandleChange: ()=> void;
  declineModalHandleChange: ()=> void;
}

const DeclineModal: React.FC<Props> = props => {
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
              fontSize: 22,
              fontWeight: '500',
              marginLeft: 20,
              paddingTop: 2,
            }}>
            Withdrawal
          </MyText>
          <MyText></MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 10,
          }}></View>
        <View style={{marginTop: 5, marginBottom: -10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MyText style={{fontSize: 9}}>Username</MyText>
            <MyText style={{fontSize: 8, marginTop: -3}}>
              Processed by Thomas
            </MyText>
          </View>

          <MyText style={{fontSize: 12, fontWeight: '500', marginBottom: 16}}>
            Jthomas
          </MyText>
          <MyText style={{fontSize: 9}}>Account Name</MyText>
          <MyText style={{fontSize: 15, fontWeight: '500'}}>
            Fxchange Marketplace
          </MyText>
        </View>
        <View
          style={{
            borderTopWidth: 1.5,
            borderColor: '#F1F1F1',
            marginTop: 10,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <MyText style={{fontSize: 9}}>Account Number</MyText>
            <MyText style={{fontSize: 15, fontWeight: '500'}}>
              0034556765
            </MyText>
          </View>
          <View>
            <MyText style={{fontSize: 9}}>Bank Name</MyText>
            <MyText style={{fontSize: 15, fontWeight: '500'}}>
              AccessBank PLC
            </MyText>
          </View>
        </View>

        <View
          style={[
            {borderTopWidth: 1.5, borderColor: '#F1F1F1', marginTop: 10},
            {marginTop: 10},
          ]}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <MyText style={{fontSize: 9}}>Amount</MyText>
            <MyText style={{color: 'green', fontSize: 15, fontWeight: '500'}}>
              N300,000
            </MyText>
          </View>
          <View style={{marginRight: 7}}>
            <MyText style={{fontSize: 9}}>Date</MyText>
            <MyText style={{fontSize: 10}}>DEC 10,20201 1:30PM</MyText>
          </View>
        </View>

        <View style={{paddingVertical: 25}}></View>
        {/* <TouchableOpacity
          activeOpacity={0.9}
          style={{alignSelf: 'center'}}
          onPress={props.acceptModalHandleChange}
        >
          <MyText
            style={{
              color: 'green',
              fontSize: 12,
              fontWeight: '600',
            //   paddingBottom: 5,
            }}>
            MARK AS PAID
          </MyText>
        </TouchableOpacity> */}

        <View
          style={[
            {borderTopWidth: 1.5, borderColor: '#F1F1F1', marginTop: 5},
            {width: width / 2, alignSelf: 'center'},
          ]}></View>
        <TouchableOpacity
          activeOpacity={0.9}
          // onPress={props.declineModalHandleChange}
          style={{alignSelf: 'center', marginTop: 5}}>
          <MyText
            style={{
              color: '#ef2a21',
              fontSize: 14,
              fontWeight: '600',
              paddingBottom: 5,
            }}>
            DECLINED
          </MyText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DeclineModal;

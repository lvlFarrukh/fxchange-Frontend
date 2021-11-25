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

const BanUser: React.FC<Props> = props => {
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
            marginBottom: hp(1)
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
            Ban Reason
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
          <MyText style={{fontSize: RFValue(8), color: "#4c4c4c", textAlign: 'right'}}>Banned by Jesse</MyText>

          <View>
            <MyText style={{fontSize: RFValue(9), color: "#343434", marginTop: hp(3)}}>Reason</MyText>

            <MyText style={{fontSize: RFValue(14)}}>Sharing contact details</MyText>
          </View>

          <View>
            <View
              style={{
                borderTopWidth: 1.5,
                borderColor: '#F1F1F1',
                marginTop: hp(10),
              }}></View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
              <View>
                <MyText style={{fontSize: RFValue(9), color: "#343434"}}>Ban Date</MyText>
                <MyText  style={{fontSize: RFValue(12), color: "#343434"}}>DEC 10, 2021 1:30PM</MyText>
              </View>
              <View>
                <MyText style={{fontSize: RFValue(9), color: "#343434"}}>Date ban will be lifted</MyText>
                <MyText  style={{fontSize: RFValue(12), color: "#343434"}}>DEC 10, 2021 1:30PM</MyText>
              </View>
            </View>
          </View>
        </View>

        
        <TouchableOpacity
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
          ]}></View>
      </View>
    </Modal>
  );
};

export default BanUser;

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Style from './Style';

interface Props {
  title: string;
  amount: string;
  date: string;
  type: string;
  handleChange: ()=> void;
}

const AdminWithdrawalCard: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.handleChange}
    >
      <View style={Style.mainBody}>
        {/* Upper portion */}
        <View style={Style.upperCardPortion}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 6}}>
              <MyText style={{color: '#333333', fontSize: RFValue(15)}}>{props.title}</MyText>

              <MyText style={{color: '#676767', fontSize: RFValue(15)}}>{props.amount}</MyText>

              <MyText style={{color: '#8c8a8b', fontSize: RFValue(9), marginTop: 8}}>{props.date}</MyText>
            </View>
          </View>

          <View style={Style.viewItems}>
            <MyText
              style={Style.smBlueText}
              // onPress={reDirecttoCardDetail}
            >
              View
            </MyText>

            <Image
              source={require('../../../../Assets/ICONS/arrow=right.png')}
              style={Style.arrowIcon}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AdminWithdrawalCard;

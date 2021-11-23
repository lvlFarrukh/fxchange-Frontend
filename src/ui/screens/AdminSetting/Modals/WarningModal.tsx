import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import MyText from '../../../components/DefaultTextComponent/MyText';
const {width, height} = Dimensions.get('screen');

interface Props {
  type: string;
  text: string;
  isOpen: boolean;
  onPressAction: () => void;
  handleChange: () => void;
}

const AcceptModal: React.FC<Props> = props => {
  return (
    <Modal
      //style={{ backgroundColor:'#fafafa' , height:height/2}}
      isVisible={props.isOpen}
      //coverScreen={true}
      // swipeDirection='down'
      // onSwipeComplete={toggleModal}
      // swipeThreshold={50}
    >
      <View
        style={{
          width: width - 100,
          height: width - 125,
          borderRadius: 50,
          alignSelf: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: width - 100,
            height: width - 145,
            marginTop: 20,
            borderRadius: 40,
            alignSelf: 'center',
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}>
          <View>
            <MyText
              style={{
                textAlign: 'center',
                fontSize: 18,
                margin: 5,
                fontWeight: '500',
                color: props.type === "ACCEPT" ? '#098b41' : '#e32b23',
              }}>
              {props.type}
            </MyText>

            {/* hr */}
            <View
              style={[
                {
                  borderTopWidth: 1.5,
                  borderColor: '#F1F1F1',
                  marginTop: 10,
                  marginBottom: 10,
                },
                {marginTop: 0},
              ]}></View>
          </View>

          <View>
            <MyText
              style={{
                color: 'black',
                fontSize: 15,
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              {props.text}
            </MyText>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                //   toggleDeclineModal();
                //   navigation.navigate('BitcoinCardDetailDecline');
              }}>
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: '500',
                  color: props.type === "ACCEPT" ? '#098b41' : '#e32b23',
                }}>
                YES {props.type}
              </MyText>
            </TouchableOpacity>
            {/* hr */}
            <View
              style={[
                {
                  borderTopWidth: 1.5,
                  borderColor: '#F1F1F1',
                  marginTop: 10,
                  marginBottom: 10,
                },
                {marginTop: 6},
              ]}></View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{marginBottom: 8, marginTop: -4}}
              onPress={props.handleChange}
            >
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                }}>
                Cancel
              </MyText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AcceptModal;

const styles = StyleSheet.create({});

import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import timon from '../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg';
import IMG from '../../../Assets/IMG_3151.jpg';
import MyText from '../DefaultTextComponent/MyText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');

const index = ({image, isPreviewImgVisible, togglePreviewImgModal}) => {
  const imgs: any = [timon, IMG];
  return (
    <Modal
      //style={{ backgroundColor:'#fafafa' , height:height/2}}
      isVisible={isPreviewImgVisible}
      //coverScreen={true}
      // swipeDirection='down'
      // onSwipeComplete={toggleModal}
      // swipeThreshold={50}
    >
      <View
        style={{
          width: width - 50,
          height: height / 2.45,
          alignSelf: 'center',
          borderRadius: 6,
          backgroundColor: '#000000',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: wp(3)
          }}>
          <View></View>
          <View>
            <MyText
              style={{
                color: 'white',
                fontSize: 13,
                textAlign: 'center',
                marginTop: 10,
                marginLeft: wp(7)
                // marginBottom: '4%',
              }}>
              PREVIEW
            </MyText>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={() => togglePreviewImgModal()}>
              <View
                style={{
                  
                  borderRadius: 20,
                  backgroundColor: 'black',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../Assets/ICONS/close2.jpeg')}
                  style={{
                    width: wp(8),
                    height: wp(8),
                    alignSelf: 'center',
                    marginTop: -hp(5)
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          style={{alignSelf: 'center', height: height / 3.1, width: width - 60}}
          source={imgs[image]}
        />
      </View>
    </Modal>
  );
};

export default index;

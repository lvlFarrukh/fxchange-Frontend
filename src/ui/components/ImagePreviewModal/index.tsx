import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import timon from '../../../Assets/timon-klauser-3MAmj1ZKSZA-unsplash.c2e88811.jpg'
import IMG from '../../../Assets/IMG_3151.jpg'

const {width, height} = Dimensions.get('screen');

const index = ({image, isPreviewImgVisible, togglePreviewImgModal}) => {
  const imgs: any = [timon, IMG]
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
          height: height / 2.5,
          alignSelf: 'center',
          borderRadius: 6,
          backgroundColor: '#000000',
        }}>
            <View style={{alignSelf: 'flex-end'}}>
                <TouchableOpacity onPress={() => togglePreviewImgModal()}>
                  
                  <View style={{width: 20,
                          height: 20, borderRadius: 20, backgroundColor: 'black', justifyContent: 'center'}}>
                    <Image
                      source={require('../../../Assets/ICONS/close2.jpeg')}
                      style={{
                          width: 15,
                          height: 15,
                          alignSelf: 'center'
                      }}
                    />
                  </View>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{color: 'white', fontSize: 13, textAlign:'center', marginBottom: '4%'}}>PREVIEW</Text>
            </View>
            
            <Image 
            style={{alignSelf: 'center', height: height/3.1, width: width - 60}}
                source={imgs[image]}
            />

      </View>
    </Modal>
  );
};

export default index;

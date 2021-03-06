import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Button,
  Alert,
  FlatList,
  StatusBar,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Style';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/ModeratePageCard/Header';
import Modal from 'react-native-modal';
import MyText from '../../components/DefaultTextComponent/MyText';
import Navbar from '../../components/Navbars/Navbar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('screen');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Itunes',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: '$50',
    value: '+'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Amazon',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: '$50',
    value: '+'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bitcoin',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: '$50',
    value: '+'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d12',
    title: 'Withdrawal completed',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: 'N15,000',
    value: '-'
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={[styles.item]}>
    {/* <StatusBar hidden /> */}
    <TouchableOpacity activeOpacity={0.9} 
      onPress={onPress}
    >

    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <MyText style={[styles.title, textColor]}>{item.title}</MyText>
        <MyText style={[styles.date, textColor]}>{item.date}</MyText>
      </View>

      <View>

        <View style={{ flexDirection: 'row' }}>

          <View>
            <MyText style={[styles.amount, item.value === "-" && {fontFamily:'Nunito-Regular', color: '#dc2f05', fontSize: 13}]}>{item.value + ' ' + item.amount}</MyText>
            <MyText style={[styles.totalAmount, textColor, {fontFamily:'Nunito-Regular'}]}>
              {item.value === "+" && 'total: ' + item.total}
            </MyText>
          </View>

            <Icon
              name={'arrow-forward-ios'}
              size={16}
              color={'#000000'}
              style={{ marginTop: 10, marginLeft: 10 }}></Icon>
        </View>

      </View>
    </View>

    </TouchableOpacity>

    <View style={styles.hr}></View>
  </View>
);

const index = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#ffffff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={
          item?.title === "Bitcoin" ? () => navigation.navigate('TradeBitcoinComplete') :
          item?.title === "Itunes" ? () => navigation.navigate('tradeCardDetails') :
          item?.title === "Amazon" ? () => {} :
          item?.title === "Withdrawal completed" && toggleModal
        }
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={{
      height: height,
      width: width,
      flex: 1,
      backgroundColor: '#1bb76d',
    }}>
      <SafeAreaView
        style={{
          height: height,
          width: width,
          // flex: 1,
        }}>
           <StatusBar translucent backgroundColor='transparent' />
        <Header
          navigation={navigation}
          Heading={'Transaction History'}
        />

        <View style={styles.mainBody}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 18,
              paddingHorizontal: 40,
              height: 40,
            }}>
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
                borderColor: 'rgba(0,0,0,0.2)',
              }}>
              <MyText
                style={{
                  fontSize: 12,
                }}>
                Start Date
              </MyText>

              <Icons name={'ios-calendar-sharp'} size={12} color={'#fa5100'} />
            </TouchableOpacity>
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
                borderColor: 'rgba(0,0,0,0.2)',
              }}>
              <MyText
                style={{
                  fontSize: 12,
                }}>
                End Date
              </MyText>

              <Icons name={'ios-calendar-sharp'} size={12} color={'#fa5100'}>
                {' '}
              </Icons>
            </TouchableOpacity>

            <View
              style={{
                flex: 0.15,
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icons name={'options-outline'} size={30} color={'#000000'} />
            </View>
          </View>
          <View style={styles.hr}></View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <MyText></MyText>
          <FlatList
            style={{ paddingHorizontal: 18 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>

        <Modal
          //style={{ backgroundColor:'#fafafa' , height:height/2}}
          isVisible={isModalVisible}
        //coverScreen={true}
        // swipeDirection='down'
        // onSwipeComplete={toggleModal}
        // swipeThreshold={50}
        >
          <View
            style={{ paddingVertical: 10, paddingHorizontal: 30, backgroundColor: '#ffffff', borderRadius: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginBottom: -10,
              }}>
              <TouchableOpacity  activeOpacity={0.9} onPress={toggleModal} style={{ marginLeft: -40 }}>
                {/* <MyText style={{ fontSize: 25, fontWeight: '200', color: 'black' }}>x</MyText> */}
                <Image style={{height: wp(5), width: wp(5)}} source={require('../../../Assets/ICONS/cross.png')} />
              </TouchableOpacity>

              <MyText style={{ fontSize: 22, fontWeight: '500', marginLeft: 20, paddingTop: 2, marginBottom: 8 }}>
                Withdrawal
              </MyText>
              <MyText></MyText>
            </View>
            <View style={styles.hr}></View>
            <View style={{ marginTop: 5, marginBottom: -10 }}>
              <MyText style={{ fontSize: 9 }}>Account Name</MyText>
              <MyText style={{ fontSize: 12, fontWeight: '500', marginBottom: 16 }}>JThomas</MyText>
              <MyText style={{ fontSize: 9 }}>Account Name</MyText>
              <MyText style={{ fontSize: 15, fontWeight: '500' }}>
                FxChange Marketplace
              </MyText>
            </View>
            <View style={styles.hr}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <MyText style={{ fontSize: 9 }}>Account Number</MyText>
                <MyText style={{ fontSize: 15, fontWeight: '500' }}>12451321651</MyText>
              </View>
              <View>
                <MyText style={{ fontSize: 9 }}>Bank Name</MyText>
                <MyText style={{ fontSize: 15, fontWeight: '500' }}>
                  Accesable PLC
                </MyText>
              </View>
            </View>

            <View style={[styles.hr, { marginTop: 10 }]}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <MyText style={{ fontSize: 9 }}>Amount</MyText>
                <MyText style={{ color: 'green', fontSize: 15, fontWeight: '500' }}>
                  N300,000
                </MyText>
              </View>
              <View>
                <MyText style={{ fontSize: 9 }}>Date</MyText>
                <MyText style={{ fontSize: 10 }}>DEC 10,20201 1:30PM</MyText>
              </View>
            </View>

            <View style={{ paddingVertical: 25 }}></View>
            <View style={[styles.hr, { width: width / 2, alignSelf: 'center' }]}></View>
            <TouchableOpacity activeOpacity={0.9} style={{ alignSelf: 'center', marginTop: 10 }}>
              <MyText style={{ color: 'green', fontSize: 20, fontWeight: '500', paddingBottom: 5 }}>
                APPROVED
              </MyText>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
      {/* <Navbar navigation={navigation} activePage={'home'} backgroundColor={undefined} /> */}
    </View>
  );
};

export default index;

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
const { width, height } = Dimensions.get('screen');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Itunes',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: 50,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Amazon',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: 50,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bitcoin',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: 50,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d12',
    title: 'Withdrawal completed',
    date: 'DEC 10, 2021 1:30PM',
    total: 'N16000',
    amount: -50,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={[styles.item]}>
    <StatusBar hidden />
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        <Text style={[styles.date, textColor]}>{item.date}</Text>
      </View>

      <View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={[styles.amount]}>{'$' + item.amount}</Text>
            <Text style={[styles.totalAmount, textColor]}>
              {'total:' + item.total}
            </Text>
          </View>

          <TouchableOpacity
            onPress={onPress}
          >
            <Icon
              name={'arrow-forward-ios'}
              size={16}
              color={'#000000'}
              style={{ marginTop: 10, marginLeft: 10 }}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
        onPress={toggleModal}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: 'rgb(10, 138, 64)'
      }}>
      <Header style={{ marginTop: 10 }} navigation={navigation} Heading={'Transaction History'} />

      <View style={styles.mainBody}>
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 30, paddingHorizontal: 20 }}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              flex: 0.40,
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
            <Text
              style={{
                fontSize: 12,
              }}>
              Start Date
            </Text>

            <Icons name={'ios-calendar-sharp'} size={20} color={'#fa5100'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              flex: 0.40,
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
            <Text
              style={{
                fontSize: 12,
              }}>
              End Date
            </Text>

            <Icons name={'ios-calendar-sharp'} size={20} color={'#fa5100'}>
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
              alignContent: "center",
              alignItems: 'center',
              justifyContent: "center"
            }}
          >
            <Icons
              name={'options-outline'}
              size={30}
              color={'#000000'}
            />
          </View>

        </View>
        <View style={styles.hr}></View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text></Text>
        <FlatList
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
        <View style={{ padding: 10, backgroundColor: '#ffffff', borderRadius: 25 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: -10 }}>
            <TouchableOpacity
              onPress={toggleModal}
              style={{marginLeft:-30}}
            >
              <Text style={{ fontSize: 25 , fontWeight:'200'}}>X</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 25, fontWeight: '500', marginLeft:20}}>Withdrawl</Text>
            <Text></Text>
          </View>
          <View style={styles.hr}></View>
          <View style={{ marginTop: 5, marginBottom: -10 }}>
            <Text style={{fontSize:10}}>Account Name</Text>
            <Text style={{fontSize:15,fontWeight:'500'}}>JThomas</Text>
            <Text></Text>
            <Text style={{fontSize:12}} >Account Name</Text>
            <Text style={{fontSize:15,fontWeight:'500'}} >FxChange Marketplace</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop:10 }}>
            <View>
              <Text style={{fontSize:12}}>Account Number</Text>
              <Text style={{fontSize:15,fontWeight:'500'}}>12451321651</Text>
            </View>
            <View>
              <Text style={{fontSize:12}}>Bank Name</Text>
              <Text style={{fontSize:15,fontWeight:'500'}}>Accesable PLC</Text>
            </View>
          </View>

          <View style={styles.hr}></View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop:10 }}>
            <View>
              <Text style={{fontSize:12}}>Amount</Text>
              <Text style={{color:'green',fontSize:15,fontWeight:'500'}}>N300,000</Text>
            </View>
            <View>
              <Text style={{fontSize:12}}>Date</Text>
              <Text style={{fontSize:10}}>DEC 10,20201 1:30PM</Text>
            </View>
          </View>
          
          <View style={{paddingVertical:40}}></View>
          <View style={styles.hr}></View>
          <TouchableOpacity
          style={{alignSelf:'center' ,marginTop:10 }}
          >
            <Text style={{color:'green' , fontSize:22 , fontWeight:'500'}}>
              APPROVED
            </Text>
          </TouchableOpacity>



        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default index;

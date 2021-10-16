import React, {useContext, useEffect, useMemo, useState} from 'react';
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
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Style';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');

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

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
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
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={[styles.amount]}>{'$' + item.amount}</Text>
            <Text style={[styles.totalAmount, textColor]}>
              {'total:' + item.total}
            </Text>
          </View>

          <View>
            <Icon
              name={'arrow-forward-ios'}
              size={16}
              color={'#000000'}
              style={{marginTop: 10, marginLeft: 10}}></Icon>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.hr}></View>
  </TouchableOpacity>
);

const index = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#ffffff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <View style={styles.header}>
        <Text style={styles.headerHeading}>Transaction History</Text>
      </View>

      <View style={styles.mainBody}>
        <View style={{display: 'flex', flexDirection: 'row', margin: 20}}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff',
              paddingVertical: 14,
              width: 130,
              paddingLeft: 10,
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

            <Icons name={'ios-calendar-sharp'} size={20} color={'#f5bd9c'}>
              {' '}
            </Icons>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff',
              paddingVertical: 14,
              width: 130,
              paddingLeft: 10,
              marginLeft: 20,
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

            <Icons name={'ios-calendar-sharp'} size={20} color={'#f5bd9c'}>
              {' '}
            </Icons>
          </TouchableOpacity>

          <Icons
            name={'options-outline'}
            size={30}
            color={'#000000'}
            style={{
              paddingVertical: 8,
              backgroundColor: '#f2f2f2',
              paddingLeft: 10,
              width: 50,
              marginLeft: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
            }}>
            {' '}
          </Icons>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;

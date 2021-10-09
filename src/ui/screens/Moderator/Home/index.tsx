/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#0a8a40',
  color: 'white',
  fontWeight : 'bold'
  //padding: '3%',
};

const index = () => {
  const [pendingBtn, setpendingBtn] = useState({});
  const [ongoingBtn, setOngoing] = useState(btnSetected);
  const [CompletedBtn, setCompleted] = useState({});

  const activeButton = (buttonType: string) => {
    console.log(buttonType);
    if (buttonType === 'pending') {
      setpendingBtn(btnSetected);
      setOngoing({});
      setCompleted({});
    }
    if (buttonType === 'ongoing') {
      setpendingBtn({});
      setOngoing(btnSetected);
      setCompleted({});
    }
    if (buttonType === 'completed') {
      setpendingBtn({});
      setOngoing({});
      setCompleted(btnSetected);
    }
  };
  // eslint-disable-next-line prettier/prettier
  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        flex: 1,
      }}>
      <View style={styles.header}>
        <Text style={styles.headerHeading}>Trades</Text>
      </View>

      <View style={styles.mainBody}>
        <View style={[styles.headerButtons]}>
          <Text
            style={[styles.headerButtom, styles.JoinLeft, {...pendingBtn}]}
            onPress={() => {
              activeButton('pending');
            }}>
            Pending
          </Text>

          <Text
            style={[styles.headerButtom, {...ongoingBtn}]}
            onPress={() => {
              activeButton('ongoing');
            }}>
            Ongoing
          </Text>

          <Text
            style={[styles.headerButtom, styles.JoinRight, {...CompletedBtn}]}
            onPress={() => {
              activeButton('completed');
            }}>
            Completed
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log('Working');
          }}>
          <Text>Checking</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: '#0a8a40',
  },
  headerHeading: {
    color: 'white',
    textAlign: 'center',
    marginTop: '3.5%',
    fontSize: 16,
  },
  mainBody: {
    alignSelf: 'center',
    width: width,
    height: height - 100,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    zIndex: 1,
    top: '10%',
  },
  headerButtons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 45,
    width: '87%',
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  headerButtom: {
    fontSize: 13,
    textAlign: 'center',
    width: '38%',
    borderRadius: 30,
    color: '#0a8a40',
    padding: '3%',
    alignSelf:'center',
  },
  JoinLeft: {
    position: 'relative',
    left: 25,
  },
  JoinRight: {
    position: 'relative',
    right: 25,
  },
});

export default index;

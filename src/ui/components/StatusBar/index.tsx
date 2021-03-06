import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const index = ({
  backgroundColor,
  barStyle = 'dark-content',
}: //add more props StatusBar
any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
export default index;

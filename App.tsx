/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//import { Provider } from "react-redux";
import { Provider } from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native';
import { AppProvider } from './src/Provider/AppProvider';
import { theme } from './src/ui/theme/theme';
import Routes from './src/Routes/Routes'

const App = () => {
  return(
    <Provider theme={theme}>
    <AppProvider>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </AppProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({

});

export default App;

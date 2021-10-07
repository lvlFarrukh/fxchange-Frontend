
import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../ui/screens/SplashScreen'
import LandingScreen from '../ui/screens/LandingScreen';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LandingScreen" component={LandingScreen} />

        </Stack.Navigator>
    )
}
export default Routes
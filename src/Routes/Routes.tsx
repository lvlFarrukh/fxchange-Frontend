import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../ui/screens/SplashScreen'
import LandingScreen from '../ui/screens/LandingScreen';
import SignInScreen from '../ui/screens/SignInScreen';
import CreateAccountScreen from '../ui/screens/CreateAccountScreen';
import Moderator from '../ui/screens/Moderator/Home';
import CardDetails from '../ui/screens/Moderator/CardDetails';

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
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
            <Stack.Screen name="ModeratorScreen" component={Moderator} />
            <Stack.Screen name="CardDetails" component={CardDetails} />

        </Stack.Navigator>
    )
}
export default Routes

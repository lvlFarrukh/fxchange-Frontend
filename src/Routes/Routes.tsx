import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../ui/screens/SplashScreen/SplashScreen'
import LandingScreen from '../ui/screens/LandingScreen/LandingScreen';
import SignInScreen from '../ui/screens/SignInScreen/SignInScreen';
import CreateAccountScreen from '../ui/screens/CreateAccountScreen/CreateAccountScreen';
import Moderator from '../ui/screens/Moderator/Home';
import CardDetails from '../ui/screens/Moderator/CardDetails';
import ForgetPasswordScreen from '../ui/screens/ForgetPasswordScreen/ForgetPasswordScreen';
import TransactionHistoryScreen from '../ui/screens/TransactionHistoryScreen';

import WithdrawalsScreen from '../ui/screens/WithdrawalsScreen/WithDrawScreen1/WIthdrawalScreen';
import WithdrawalsScreenTwo from '../ui/screens/WithdrawalsScreen/WithDrawScreen2/WithDrwaScreenTwo';
import WithdrawalsScreenThree from '../ui/screens/WithdrawalsScreen/WithDrawScreen3/WithDrarScreenThree';
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
            <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
            <Stack.Screen name="TransactionHistoryScreen" component={TransactionHistoryScreen} />
            <Stack.Screen name="WithdrawalsScreen" component={WithdrawalsScreen} />
            <Stack.Screen name="WithdrawalsScreenTwo" component={WithdrawalsScreenTwo} />
            <Stack.Screen name="WithdrawalsScreenThree" component={WithdrawalsScreenThree} />

        </Stack.Navigator>
    )
}
export default Routes

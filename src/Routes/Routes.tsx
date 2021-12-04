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
import WithDrawScreenFour from '../ui/screens/WithdrawalsScreen/WithDrawScreen4/WithDrawScreenFour';
import WithdrawalsScreenFive from '../ui/screens/WithdrawalsScreen/WithDrawScreen5/WithDrawScreenFive';
import SwitchGiftCard from '../ui/screens/Moderator/SwitchGiftCard'
import BitcoinCardDetailPending from '../ui/screens/Moderator/BitcoinCardDetailPending'
import UploadGiftCard from '../ui/screens/UploadGiftCard'
import WithDrawScreenSix from '../ui/screens/WithdrawalsScreen/WithDrawScreen6/WIthDrawScreenSix';
import Test from '../ui/screens/test';
// import DashBoardScreen from '../ui/screens/DashBoardScreens/dashBoardScreen';
import DashBoardScreen from '../ui/screens/DashBoardScreens/NewDashboardScreen'
import GiftCardScreen from '../ui/screens/GiftCardsScreen/GiftCardScreen';
import ItunesGiftCardScreen from '../ui/screens/ItunesGiftCardScreen/ItunesGiftCardScreen';
import TradeSuccessfull from '../ui/screens/TradeSuccessfull/TradeSuccessfull';
import TradeSuccesfullScreen2 from '../ui/screens/TradeSuccesfullScreen2/TradeSuccesfullScreen2';
import SellBitcoinScreen1 from '../ui/screens/SellBitcoinScreen/SellBitcoinScreen1';
import BitcoinCardDetailDecline from '../ui/screens/Moderator/BitcoinCardDetailDecline';
import BitcoinCardDetailComplete from '../ui/screens/Moderator/BitcoinCardDetailComplete';
import SellBitcoin from '../ui/screens/SellBitcoin';
import Trades from '../ui/screens/Trades/Trades';
import tradeCardDetails from '../ui/screens/Trades/CardDetails';
import TeadesBitcoinCardDetailPending from '../ui/screens/Trades/BitcoinPending'
import TradeBitcoinComplete from '../ui/screens/Trades/BitcoinComplete'
import AdminWithdrawalHome from '../ui/screens/AdminWithdrawals/AdminWithdrawalHome/AdminWithdrawalHome'
import AdminUserHome from '../ui/screens/AdminUser/AdminUserHome/AdminUserHome'
import Setting from '../ui/screens/AdminSetting/Setting/Setting'
import CardSetting from '../ui/screens/AdminSetting/CardSetting/CardSetting'
import AddCard from '../ui/screens/AdminSetting/AddCard/AddCard'
import NewsAndUpdates from '../ui/screens/AdminSetting/NewAndUpdate/NewsAndUpdates'
import AdminChangePasswordScreen from '../ui/screens/AdminSetting/AdminChangePassword/AdminChangePassword'
import AdminMyAccount from '../ui/screens/AdminSetting/AdminMyAccount/AdminMyAccount'

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
            <Stack.Screen name="WithDrawScreenFour" component={WithDrawScreenFour} />               
            <Stack.Screen name="WithDrawScreenSix" component={WithDrawScreenSix} />                 
            <Stack.Screen name="WithdrawalsScreenFive" component={WithdrawalsScreenFive} />         
            <Stack.Screen name="GiftCardScreen" component={GiftCardScreen} />                       
            <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
            <Stack.Screen name="ItunesGiftCardScreen" component={ItunesGiftCardScreen} />
            <Stack.Screen name="TradeSuccessfull" component={TradeSuccessfull} />
            <Stack.Screen name="TradeSuccesfullScreen2" component={TradeSuccesfullScreen2} />
            <Stack.Screen name="SellBitcoinScreen1" component={SellBitcoinScreen1} />
            <Stack.Screen name="SwitchGiftCard" component={SwitchGiftCard} />
            <Stack.Screen name="BitcoinCardDetailPending" component={BitcoinCardDetailPending} />
            <Stack.Screen name="TeadesBitcoinCardDetailPending" component={TeadesBitcoinCardDetailPending} />
            <Stack.Screen name="TradeBitcoinComplete" component={TradeBitcoinComplete} />
            <Stack.Screen name="BitcoinCardDetailDecline" component={BitcoinCardDetailDecline} />
            <Stack.Screen name="BitcoinCardDetailComplete" component={BitcoinCardDetailComplete} />
            <Stack.Screen name="UploadGiftCard" component={UploadGiftCard} />
            <Stack.Screen name="SellBitcoin" component={SellBitcoin} />
            <Stack.Screen name="Trades" component={Trades} />
            <Stack.Screen name="tradeCardDetails" component={tradeCardDetails} />
            <Stack.Screen name="AdminWithdrawalHome" component={AdminWithdrawalHome} />
            <Stack.Screen name="AdminUserHome" component={AdminUserHome} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="CardSetting" component={CardSetting} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="NewsAndUpdates" component={NewsAndUpdates} />
            <Stack.Screen name="AdminChangePasswordScreen" component={AdminChangePasswordScreen} />
            <Stack.Screen name="AdminMyAccount" component={AdminMyAccount} />

            <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
    )
}
export default Routes

// shadow

// shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.23,
// shadowRadius: 2.62,

// elevation: 4,

// { /*profile screen*/}
// { /*contact screen*/}
// { /*bitcoin and giftcard screen*/}
// { /*change password screen*/}
// { /*main withdraw screen*/}
// { /*My account screen*/}

// onPress={() => {
//     navigation.navigate('SignInScreen')
// }}

// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// fontFamily:'Nunito-Regular'


// ----------------------------------------------
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react';
// import {
//   Image,
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   TextInput,
//   Dimensions,
//   ScrollView,
//   StatusBar,
// } from 'react-native';
// import Header from '../../../components/ModeratePageCard/Header';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const {width, height} = Dimensions.get('screen');
// const btnSetected: any = {
//   backgroundColor: '#343434',
//   color: 'white',
//   // fontWeight: 'bold',
//   fontFamily: 'Nunito-Regular',
//   //padding: '3%',
// };

// const AdminWithdrawalHome = ({navigation}) => {

//   return (
//     <View
//       style={{
//         height: height,
//         width: width,
//         flex: 1,
//         backgroundColor: '#1bb76d',
//       }}>
//       <SafeAreaView
//         style={{
//           height: height,
//           width: width,
//           flex: 1,
//         }}>
//         <StatusBar backgroundColor="#343434" />
//         {/* <View style={styles.header}>
//         <MyText style={styles.headerHeading}>Trades</MyText>
//       </View> */}
//         <View
//           style={{height: height, width: width, backgroundColor: '#343434'}}>
//           <Header
//             arrowIconStyle={{display: 'none'}}
//             style={{marginTop: 0, marginLeft: 10, backgroundColor: '#343434'}}
//             navigation={navigation}
//             Heading={'User'}
//           />

//           <View style={{
//     alignSelf: 'center',
//     marginBottom: 20,
//     width: width,
//     height: height - 100,
//     backgroundColor: '#f2f2f2',
//     borderTopRightRadius: 30,
//     borderTopLeftRadius: 30,
//     position: 'absolute',
//     zIndex: 1,
//     top: 50
// }}>
            
//             <ScrollView
// style={{
//     paddingTop: hp(3),
//     paddingHorizontal: wp(7),
//     height: '100%',
//     }}
// >
             

//             </ScrollView>
//           </View>
//         </View>
//       </SafeAreaView>

//     </View>
//   );
// };

// export default AdminWithdrawalHome;

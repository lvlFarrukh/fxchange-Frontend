import React, {Fragment, useContext, useEffect, useMemo, useState} from 'react';
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
  StatusBar,
} from 'react-native';
import Header from '../../../components/ModeratePageCard/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import ModeratePageCard from '../../../components/ModeratePageCard';
import styles from './Style';
import {trades} from '../../../../Assets/dumyData';
import ModeratorNavbar from '../../../components/Navbars/ModeratorNavbar';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Active from '../AdminUserCard/Active/Active';
import EditRole from '../Modals/EditRole';
import BanUser from '../Modals/BanUser';
import DeleteModal from '../Modals/WarningModal'
import Banned from '../AdminUserCard/Banned/Banned';
import Unban from '../Modals/Unban';
import UpdateBalance from '../Modals/UpdateBalance';
import Moderator from '../AdminUserCard/Moderator/Moderator';
import Statistics from '../Modals/Statistics';
// import MarkAsPaidModal from '../Modals/MarkAsPaidModal/MarkAsPaidModal';
// import AcceptModal from '../Modals/WarningModal/WarningModal';
// import WarningModal from '../Modals/WarningModal/WarningModal';
// import DeclineModal from '../Modals/DeclineModal/DeclineModal';
// import ApprovedModal from '../Modals/ApprovedModal/ApprovedModal';

const {width, height} = Dimensions.get('screen');
const btnSetected: any = {
  backgroundColor: '#343434',
  color: 'white',
  // fontWeight: 'bold',
  fontFamily: 'Nunito-Regular',
  //padding: '3%',
};

const AdminWithdrawalHome = ({navigation}) => {
  const [pendingBtn, setpendingBtn] = useState(btnSetected);
  const [ongoingBtn, setOngoing] = useState({});
  const [CompletedBtn, setCompleted] = useState({});
  const [navigateState, setnavigateState] = useState(0);
  const [openApprovedModal, setopenApprovedModal] = useState(false);
  const [openMarkAsPaidModal, setopenMarkAsPaidModal] = useState(false);
  const [openDeclineModal, setopenDeclineModal] = useState(false);
  const [isAcceptModal, setisAcceptModal] = useState(false);
  const [isDeclineModal, setisDeclineModal] = useState(false);
  const [isEditRoleModal, setisEditRoleModal] = useState(false)
  const [isBanUserModal, setisBanUserModal] = useState(false)
  const [isUnbanUserModal, setisUnbanUserModal] = useState(false)
  const [isUpdateBalanceModal, setisUpdateBalanceModal] = useState(false)
  const [isStatisticsModal, setisStatisticsModal] = useState(false)

  const handleChangeEditModal = () => {
    setisEditRoleModal(!isEditRoleModal)
  }

  const handleChangeStatisticsModal = () => {
    setisStatisticsModal(!isStatisticsModal)
  }


  const handleChangeBanUserModal = () => {
    setisBanUserModal(!isBanUserModal)
  }
  
  const handleChangeUpdateBalanceModal = () => {
    setisUpdateBalanceModal(!isUpdateBalanceModal)
  }
  
  const handleChangeUnbanUserModal = () => {
    setisUnbanUserModal(!isUnbanUserModal)
  }

  const banUser = () => {
    activeButton('banned')
    handleChangeBanUserModal()
  }

  const unbanUser = () => {
    activeButton('active')
    handleChangeUnbanUserModal()
  }

  const navigateCardDetails = (route, status) => {
    console.log(route);
    if (route === 1) {
      navigation.navigate('CardDetails');
    } else if (route === 2) {
      if (status === 'pending') {
        navigation.navigate('BitcoinCardDetailPending');
      }
      if (status === 'ongoing') {
        navigation.navigate('BitcoinCardDetailPending');
      }
      if (status === 'completed') {
        navigation.navigate('BitcoinCardDetailComplete');
      }
    }
  };

  const acceptModalHandleChange = () => {
    setisAcceptModal(!isAcceptModal);
  };

  const declineModalHandleChange = () => {
    setisDeclineModal(!isDeclineModal);
  };

  const handleChangeMarkAsPaidModal = () => {
    setopenMarkAsPaidModal(!openMarkAsPaidModal)
  }

  const handleChangeDeclineModal = () => {
    setopenDeclineModal(!openDeclineModal)
  }

  const handleChangeApprovedModal = () => {
    setopenApprovedModal(!openApprovedModal);
  }

  const activeButton = (buttonType: string) => {
    console.log(buttonType);
    if (buttonType === 'active') {
      setpendingBtn(btnSetected);
      setOngoing({});
      setCompleted({});
      setnavigateState(0);
    }
    if (buttonType === 'banned') {
      setpendingBtn({});
      setOngoing(btnSetected);
      setCompleted({});
      setnavigateState(1);
    }
    if (buttonType === 'moderator') {
      setpendingBtn({});
      setOngoing({});
      setCompleted(btnSetected);
      setnavigateState(2);
    }
  };
  // eslint-disable-next-line prettier/prettier
  return (
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: '#1bb76d',
      }}>
      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
        }}>
        <StatusBar backgroundColor="#343434" />
        {/* <View style={styles.header}>
        <MyText style={styles.headerHeading}>Trades</MyText>
      </View> */}
        <View
          style={{height: height, width: width, backgroundColor: '#343434'}}>
          <Header
            arrowIconStyle={{display: 'none'}}
            style={{marginTop: 0, marginLeft: 10, backgroundColor: '#343434'}}
            navigation={navigation}
            Heading={'User'}
          />

          <View style={styles.mainBody}>
            <View style={[styles.headerButtons]}>
              <MyText
                style={[styles.headerButtom, styles.JoinLeft, {...pendingBtn}]}
                onPress={() => {
                  activeButton('active');
                }}>
                Active
              </MyText>

              <MyText
                style={[styles.headerButtom, {...ongoingBtn}]}
                onPress={() => {
                  activeButton('banned');
                }}>
                Banned
              </MyText>

              <MyText
                style={[
                  styles.headerButtom,
                  styles.JoinRight,
                  {...CompletedBtn},
                ]}
                onPress={() => {
                  activeButton('moderator');
                }}>
                Moderates
              </MyText>
            </View>
            <ScrollView>
              {navigateState === 0 && (
                <Fragment>
                  <Active
                    title={'Fxchange Marketplace'}
                    amount={'N300,000'}
                    date={'DEC 10, 2021 1:30PM'}
                    isEditRole={handleChangeEditModal}
                    isBanUser={handleChangeBanUserModal}
                    isDelete={declineModalHandleChange}
                    updateBalance={handleChangeUpdateBalanceModal}
                    isStatistics={handleChangeStatisticsModal}
                    navigation={navigation}
                    type={'active'}
                  />
                  <Active
                    title={'Fxchange Marketplace'}
                    amount={'N300,000'}
                    date={'DEC 10, 2021 1:30PM'}
                    isEditRole={handleChangeEditModal}
                    isBanUser={handleChangeBanUserModal}
                    isDelete={declineModalHandleChange}
                    updateBalance={handleChangeUpdateBalanceModal}
                    isStatistics={handleChangeStatisticsModal}
                    navigation={navigation}
                    type={'active'}
                  />
                </Fragment>
              )}

              {navigateState === 1 && (
                <Fragment>
                  <Banned
                    title={'Fxchange Marketplace'}
                    amount={'N300,000'}
                    date={'DEC 10, 2021 1:30PM'}
                    isEditRole={handleChangeEditModal}
                    isUnbanUser={handleChangeUnbanUserModal}
                    isDelete={declineModalHandleChange}
                    type={'active'}
                    navigation={navigation}
                  />
                 <Banned
                    title={'Fxchange Marketplace'}
                    amount={'N300,000'}
                    date={'DEC 10, 2021 1:30PM'}
                    isEditRole={handleChangeEditModal}
                    isUnbanUser={handleChangeUnbanUserModal}
                    isDelete={declineModalHandleChange}
                    type={'active'}
                    navigation={navigation}
                  />
                </Fragment>
              )}

              {navigateState === 2 && (
                <Fragment>
                 <Moderator
                    title={'Fxchange Marketplace'}
                    amount={'N300,000'}
                    date={'DEC 10, 2021 1:30PM'}
                    isEditRole={handleChangeEditModal}
                    isBanUser={handleChangeBanUserModal}
                    isDelete={declineModalHandleChange}
                    isStatistics={handleChangeStatisticsModal}
                    type={'active'}
                    navigation={navigation}
                  />
                 <Moderator
                    title={'Fxchange Marketplace'}
                    amount={'N300,000'}
                    date={'DEC 10, 2021 1:30PM'}
                    isEditRole={handleChangeEditModal}
                    isBanUser={handleChangeBanUserModal}
                    isDelete={declineModalHandleChange}
                    isStatistics={handleChangeStatisticsModal}
                    type={'active'}
                    navigation={navigation}
                  />
                </Fragment>
              )}

              <View style={{paddingBottom: 100}}></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>

      <EditRole isOpen={isEditRoleModal} handleChange={handleChangeEditModal}/>
      <BanUser isOpen={isBanUserModal} handleChange={handleChangeBanUserModal} action={banUser}/>
      <Unban isOpen={isUnbanUserModal} handleChange={handleChangeUnbanUserModal} action={unbanUser}/>
      <UpdateBalance isOpen={isUpdateBalanceModal} handleChange={handleChangeUpdateBalanceModal} action={unbanUser}/>
      <Statistics isOpen={isStatisticsModal} handleChange={handleChangeStatisticsModal} action={unbanUser}/>

      <DeleteModal
        isOpen={isDeclineModal}
        type={'DECLINE'}
        text={'Are you sure you want to \nDECLINE this transaction'}
        onPressAction={declineModalHandleChange}
        handleChange={declineModalHandleChange}
      />

      {/* <MarkAsPaidModal
        isOpen={openMarkAsPaidModal}
        handleChange={handleChangeMarkAsPaidModal}
        acceptModalHandleChange={acceptModalHandleChange}
        declineModalHandleChange={declineModalHandleChange}
      />

      <DeclineModal
        isOpen={openDeclineModal}
        handleChange={handleChangeDeclineModal}
        acceptModalHandleChange={acceptModalHandleChange}
        declineModalHandleChange={declineModalHandleChange}
      />

      <ApprovedModal
        isOpen={openApprovedModal}
        handleChange={handleChangeApprovedModal}
        acceptModalHandleChange={acceptModalHandleChange}
        declineModalHandleChange={declineModalHandleChange}
      />

      <WarningModal
        isOpen={isAcceptModal}
        type={'ACCEPT'}
        text={'Are you sure you want to \nACCEPT this transaction'}
        onPressAction={acceptModalHandleChange}
        handleChange={acceptModalHandleChange}
      />
       */}
      
      <ModeratorNavbar navigation={navigation} activePage={'user'} backgroundColor={undefined}/>
    </View>
  );
};

export default AdminWithdrawalHome;

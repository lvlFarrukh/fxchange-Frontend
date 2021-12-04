import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    width: 'width'
  },
  header: {
    width: width,
    // height: 80,
    //height: '10%',
    //flex:10,
    backgroundColor: '#1bb76d',



  },
  headerUpperArea: {
    display: 'flex',
    //width: '70%',
    marginTop: 10,
    marginLeft: 15,

    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  headerHeadingContainer: {
    // width: '15%',
    //position: 'absolute',
    //left: '44%',
    //top: '30%',
    // zIndex: 2
  },

  headerHeading2: {

    color: 'white',
    fontSize: 15,
    alignSelf:'center',
    alignItems:'center',
    //textAlign: 'center',
    // paddingHorizontal: 15,
    // paddingVertical: 20,
   
  },
  mainBody: {
    width: width,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  mainBodyContent: {
    flex:90,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  updatePassword: {
    // justifyContent: 'center',
    // paddingRight: 25,
    //marginTop:350,
  },
  updatePasswordButton: {
    alignItems: 'center',
    backgroundColor: '#1bb76d',
    padding: 9,
    borderRadius: 4,
  },
});

export default styles;

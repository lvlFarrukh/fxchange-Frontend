import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: '#1bb76d',
  },
  headerUpperArea: {
    display: 'flex',
    width: '70%',
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainBodyPartOne: {
    width: width,
    height: '100%',
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: 70,
    zIndex: 0,
  },
  partOneButtons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // height: '30%',
    width: '92%',
    // backgroundColor: 'white',
    // borderRadius: 30,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    marginBottom: 30
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 50},
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // elevation: 5,
  },
  partOneButton: {
    fontSize: 12,
    letterSpacing: 1,
    textAlign: 'center',
    width: '50%',
    borderRadius: 30,
    color: '#1bb76d',
    padding: '3%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  JoinLeft: {
    position: 'relative',
    left: 20,
  },
  JoinRight: {
    position: 'relative',
    right: 20,
  },
  checkrateButtonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  checkrateButton: {
    alignItems: 'center',
    backgroundColor: '#1bb76d',
    padding: 15,
    borderRadius:4
  },

  mainBodyPartTwo: {
    width: width,
    height: height - 300,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
    zIndex: 1,
  },
  giftCardBodyPatOne:{
    width: width,
    height: height ,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: '9%',
    // alignItems:"center",
    
  },
  giftCardsBodyPartTwo: {
    width: width,
    height: height -450,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    top: "70%",
    alignItems: 'center',
    zIndex: 1,
  },
});
export default styles;
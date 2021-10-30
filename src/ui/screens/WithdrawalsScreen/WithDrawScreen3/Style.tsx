import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: '#3f8b41',
    paddingHorizontal: 25
  },
  headerUpperArea: {
    marginTop: 18,
    marginBottom: 60,
    flexDirection: 'row',
    backgroundColor: 'transparent', 
    height: 30,
    justifyContent:"space-between"
  },
  mainBodyPartOne: {
    width: width,
    height: height - 450,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: '9%',
    // alignItems:"center",
    zIndex: 0,
  },
  partOneButtons: {
    
    paddingRight:20,
    paddingLeft:20,
    // height: '30%',
    width: '100%',
    // backgroundColor: 'white',
    // borderRadius: 30,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 50},
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // elevation: 5,
  },
  partOneButton: {
    fontSize: 13,

    fontWeight:"500",
    textAlign: 'center',
    width: '50%',
    borderRadius: 30,
    color: '#0a8a40',
    padding: '2.7%',
    paddingHorizontal:"3%",
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  JoinLeft: {
    position: 'relative',
    left: 10,
  },
  JoinRight: {
    position: 'relative',
    right: 10,
  },
  checkrateButtonContainer: {
    borderRadius: 4,
    marginLeft:28,

    height:45,
    width: '85%',
  },
  checkrateButton: {
    alignItems: 'center',
    backgroundColor: '#3f8b41',
    paddingVertical:10,
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
    height:"60%",
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: '11%',
    // alignItems:"center",
    
  },
  giftCardsBodyPartTwo: {
    width: width,
    height:"30%",
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    top: "82%",
    alignItems: 'center',
    zIndex: 1,
  },
});
export default styles;


import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height*0.30,
    backgroundColor: '#1bb76d',
    marginTop:StatusBar.currentHeight
  },
  headerUpperArea: {
    display: 'flex',
    width: '70%',
    marginTop: 12,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerHeading: {
    color: 'white',
    textAlign: 'center',
    marginTop: '15%',
    fontSize: 25,
    backgroundColor: '#435c5f',
    paddingVertical: '6%',
    paddingHorizontal: '8%',
    borderRadius: 100,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
  },
  headerHeadingContainer: {
    width: '90%',
    marginBottom: 10,
    position: 'absolute',
    left: '5.3%',
    top: '29%',
    zIndex: 2,
  },

  headerHeading2: {
    alignSelf:'center',
    color: 'black',
    width: '96%',
    backgroundColor: 'white',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: '#F1F1F1',
  },
  mainBody: {
    width: width,
    height:height*0.70,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 33,
  },
  viewItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  smBlueText: {
    fontSize: 10,
    color: 'blue',
  },
  arrowIcon: {
    width: 12,
    height: 10,
    marginLeft: 5,
    marginTop: 2,
  },

  mainBodyCards: {
    width: '107%',
    borderWidth: 0.5,
    borderColor: '#F1F1F1',
    marginTop: 50,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    marginLeft:-10,
    height:"30%",
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  mainBodyCardContent1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:7,
    marginBottom:10
    
  },
  iconStyle: {
    width: 10,
    height: 20,
  },
  mainBodyCardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderColor: 'rgba(0,0,0,0.2)',
  },
 changePasswordButton:{
  color: 'black',
    width: '108%',
    marginLeft:-12,
    backgroundColor: 'white',
    fontSize: 13,
    borderRadius: 3,
    textAlign: 'center',
   marginTop:10,
  borderWidth: 0.5,
  borderColor: '#F1F1F1',
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 10},
   shadowOpacity: 0.3,
   shadowRadius: 2,
   elevation: 1,
 },
 changePasswordButton1:{
  color: 'black',
    width: '108%',
    marginLeft:-12,
    backgroundColor: 'white',
    fontSize: 12,
    borderRadius: 3,
    paddingLeft: 15,
    textAlign: 'center',
   marginTop:10,
  borderWidth: 0.5,
  borderColor: '#F1F1F1',
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 10},
   shadowOpacity: 0.3,
   shadowRadius: 2,
   elevation: 1,
 },
  bodyBottom:{
   marginTop:23,
    width: width,
    height:"42%",
    backgroundColor:"#f2f2f2",
    marginLeft:-32,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 30,
  
  },
  partOneButtons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // height: '30%',
    width: '100%',
    // backgroundColor: 'white',
    // borderRadius: 30,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 50},
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // elevation: 5,
  },
  partOneButton: {
    fontSize: 13,
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
    left: 25,
  },
  JoinRight: {
    position: 'relative',
    right: 25,
  },
  lowerCard: {
    
    width: '90%',
    height:"60%",
    marginTop:20,
    backgroundColor: 'white',
     
    marginLeft: 'auto', 
    marginRight: 'auto',
    borderRadius: 16,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 50, }, 
    shadowOpacity: 1, 
    shadowRadius: 5, 
    elevation: 5, 
    
    padding:10,
  
    
},
upperCardPortion: {
  
  justifyContent: 'space-between',
},
hr: {
  borderTopWidth: 1.5,
  borderColor:'#F1F1F1',
  marginTop: 10,
  marginBottom: 8,
},
lowerPortion: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 2
},
smFontSize: {
  fontSize: 11,
  marginBottom: 2
},
mdFontBlackColor: {
  color: 'black'
},
header_FontSize: {
  fontSize: 18
}
});

export default styles;
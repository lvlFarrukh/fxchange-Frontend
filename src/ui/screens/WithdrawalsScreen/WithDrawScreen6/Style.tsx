
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: '30%',
    flex: 30,
    backgroundColor: '#0a8a40',
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
    position: 'absolute',
    left: '5.3%',
    top: '27%',
    zIndex: 2,
  },

  headerHeading2: {
    alignSelf:'center',
    color: '#f4f4f4',
    width: '96%',
    backgroundColor: 'white',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  mainBody: {
    width: width,
    height:'70%',
    flex: 70,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 33,
    // marginLeft: -8
    //paddingBottom:100
    

    //position: 'absolute',
    //top:"30%",
  },
  viewItems: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  smBlueText: {
    fontSize: 12,
    color: 'blue',
  },
  arrowIcon: {
    width: 13,
    height: 9,
    margin: 5,
  },

  mainBodyCards: {
    width: '108%',
   
    marginTop: 40,
    backgroundColor: 'white',

    paddingHorizontal: 25,
    marginLeft:-12,
    height:"24%",
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
    fontSize: 15,
    textAlign: 'center',
   marginTop:10,
   
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 10},
   shadowOpacity: 0.3,
   shadowRadius: 2,
   elevation: 1,
 },
  bodyBottom:{
   marginTop:23,
    width:"120%",
    height:"42%",
    backgroundColor:"#f2f2f2",
    marginLeft:-30,
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
    letterSpacing: 1,
    textAlign: 'center',
    width: '50%',
    borderRadius: 30,
    color: '#0a8a40',
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
    marginTop:10,
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
  borderTopWidth: 1,
  borderColor:'gray',
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
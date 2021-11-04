import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer:{
        position:'relative',
        width:'width'
    },
  header: {
    width: width,
    height: 100,
    backgroundColor: '#1bb76d',
  },
  headerUpperArea: {
    display: 'flex',
    width: '70%',
    marginTop: 15,
    marginLeft:35,
    
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  },
  headerHeadingContainer:{
   width:45,
   height:45,
    alignSelf: 'center',
    marginTop: -22,
    zIndex:2,
   backgroundColor:'#062529',
   borderRadius:80,
   justifyContent: 'center'
    
  },

  headerHeading2: {
    
   color:'white',
   width:'100%',
   fontSize:15,
   textAlign:'center',
  },
  mainBody:{
    width: width,
    height: height-80 ,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: '70%',
  },
  mainBodyContent:{
    marginTop:"2%",
    marginLeft:"10%",

    
  },
  updatePassword: {
    justifyContent: 'center',
    paddingRight: 25,
    marginTop:90,
  },
  updatePasswordButton: {
    alignItems: 'center',
    backgroundColor: '#1bb76d',
    padding: 10,
    borderRadius:4
  },
});

export default styles;

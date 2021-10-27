import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer:{
        position:'relative',
        width:'width'
    },
  header: {
    width: width,
    height: 80,
    backgroundColor: '#0a8a40',
    
    
    
  },
  headerUpperArea: {
    display: 'flex',
    width: '70%',
    marginTop: 10,
    marginLeft:35,
    
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  },
  headerHeadingContainer:{
   width:60,
   height:60,
    position:'absolute',
    left:'44%',
    top:'30%',
    zIndex:2
  },

  headerHeading2: {
    
   color:'white',
   width:'100%',
   backgroundColor:'#062529',
   fontSize:15,
   textAlign:'center',
   paddingHorizontal:0,
   paddingVertical:20,
   borderRadius:80
   

    
  

  
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
    marginTop:"9%",
    marginLeft:"10%",

    
  },
  updatePassword: {
    justifyContent: 'center',
    paddingRight: 25,
    marginTop:90,
  },
  updatePasswordButton: {
    alignItems: 'center',
    backgroundColor: '#3f8b41',
    padding: 15,
    borderRadius:4
  },
});

export default styles;

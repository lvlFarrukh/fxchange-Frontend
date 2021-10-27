import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    //height: '30%',
    flex:30,
    backgroundColor: '#0a8a40',
    alignItems:"center",
   
    
  },
  headerHeading: {
    color: 'white',
    textAlign: 'center',
    marginTop: '15%',
    fontSize: 25,
    backgroundColor:"#435c5f",
    paddingVertical:"6%",
    paddingHorizontal:"8%",
    borderRadius:100
  
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    
    
    
    
  
  },
  mainBody: {
    width: width,
    //height:'70%',
    flex:70,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal:30,
    justifyContent:'space-between'
    //position: 'absolute',
    //top:"30%",
    
  
  },
  mainBodyContent:{
    marginTop:20,
    marginLeft:"10%",
    height:'20%'
    
  },
  mainBodyCards:{
   
        width:"95%",
        backgroundColor: 'white',
        marginTop: 5, 
        marginBottom: 0, 
       
        borderRadius: 6,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 10, }, 
        shadowOpacity: 0.3, 
        shadowRadius: 2, 
        elevation: 1, 
        paddingVertical:20,
        paddingHorizontal:20
  },
  iconStyle:{
  
  
    width: 10,
    height: 20,
  },
  mainBodyCardContent:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10,
    marginHorizontal:10,
    borderBottomWidth:1,
    paddingVertical:15,
    borderColor:'rgba(0,0,0,0.2)'
   
  
    
  },
  mainBodyBottomItems:{
    alignItems:'center',
    marginBottom:20,
    //backgroundColor:"pink"
  },
  headerButtons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '7%',
    width: '86%',
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 50},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  headerButtom: {
    fontSize: 13,
    textAlign: 'center',
    width: '39%',
    borderRadius: 30,
    color: '#0a8a40',
    padding: '3%',
    alignSelf: 'center',
  },
  JoinLeft: {
    position: 'relative',
    left: 25,
  },
  JoinRight: {
    position: 'relative',
    right: 25,
  },
 
});

export default styles;

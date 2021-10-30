import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 600,
    backgroundColor: 'black',
    // marginTop:35,
    marginHorizontal:"auto"
  },
  headerUpperArea: {
    display: 'flex',
    width: '85%',
    marginTop: 35,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textAreaContainer: {
    borderColor: '#f0f0f0',
    borderRadius:2,
    borderWidth: 1,
    alignSelf: 'center',
    width: '95%',
    marginTop:20,
  },
  textArea: {
    marginTop:10,
    marginLeft:5,
    textAlignVertical: 'top',
  },
  sendButtonContainer:{
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom:60
  },
  sendButton:{
    alignItems: "center",
    backgroundColor: "#3f8b41",
    padding: 15,

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
  mainBody: {
    width: width,
    height:height-450,
    backgroundColor: '#3f8b41',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top:"65%",
    alignItems:"center",
    
    
  
  },
  mainBodyContent:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    

  },
  mainBodyButtonStyle:{
    display:"flex",
    
    flexDirection:"row",
    backgroundColor:"white",
    marginHorizontal:10,
    justifyContent:"space-around",
    alignItems:"center",
    padding:5,
    borderRadius:20
    
    
    
  }
  
});
export default styles;

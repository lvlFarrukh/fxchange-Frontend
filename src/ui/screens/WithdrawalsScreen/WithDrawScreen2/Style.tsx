import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 600,
    backgroundColor: 'white',
    paddingHorizontal: 25
  },
  headerUpperArea: {
    marginTop: 35,
    marginBottom: 60,
    flexDirection: 'row',
    backgroundColor: 'transparent', 
    height: 35,
    justifyContent:"space-between"
    
  },
  textAreaContainer: {
    borderColor: '#f0f0f0',
    borderRadius:5,
    borderWidth: 1,
    alignSelf: 'center',
    width: '95%',
    marginTop:12,
  },
  textArea: {
    marginTop:10,
    marginLeft:5,
    fontSize: 11.5,
    fontWeight: '500',
    textAlignVertical: 'top',
    borderColor: '#F1F1F1',
    // borderRadius: 5
  },
  sendButtonContainer:{
    flex: 1,
    // justifyContent: "center",  
    paddingHorizontal: 6,
    marginBottom:60
  },
  sendButton:{
    marginTop: 20,
    height: 35,
    alignItems: "center",
    backgroundColor: "#1bb76d",
    borderRadius: 3,
    justifyContent: 'center',
    paddingBottom: 2
  },

  headerHeading: {
    color: 'white',
    textAlign: 'center',
    marginTop: '15%',
    fontSize: 25,
    backgroundColor: '#1bb76d',
    paddingVertical: '6%',
    paddingHorizontal: '8%',
    borderRadius: 100,
  },
  mainBody: {
    // flex: 1,
    width: width,
    height: '100%',
    backgroundColor: '#1bb76d',
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
    flexDirection:"row",
    backgroundColor:"white",
    marginHorizontal:10,
    alignItems:"center",
    paddingLeft: 2,
    borderRadius:20,
    height: 32,
    width: 100,
  }
  
});
export default styles;

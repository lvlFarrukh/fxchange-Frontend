import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: '#1bb76d',
  },
  headerHeading: {
    color: 'white',
    textAlign: 'center',
    marginTop: '3.5%',
    fontSize: 16,
  },
  mainBody: {
    alignSelf: 'center',
    marginBottom: 20,
    width: width,
    height: height - 100,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    zIndex: 1,
    top: '10%',
  },
  headerButtons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    height: 38,
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
    height: 38,
    fontSize: 13,
    textAlign: 'center',
    width: '39%',
    borderRadius: 30,
    color: '#1bb76d',
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

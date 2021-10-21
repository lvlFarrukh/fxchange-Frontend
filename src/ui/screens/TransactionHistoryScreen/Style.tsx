import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: '#0a8a40',
  },
  headerHeading: {
    color: 'white',
    textAlign: 'center',
    marginTop: '6.5%',
    fontSize: 16,
  },
  mainBody: {
    alignSelf: 'center',
    width: width,
    height: height - 100,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    zIndex: 1,
    top: '10%',
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

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  date: {
    fontSize: 10,
  },
  totalAmount: {
    fontSize: 10,
  },
  amount: {
    fontSize: 18,
    color: '#72c688',
  },
  hr: {
    borderWidth: 0.2,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    //marginBottom: 8,
  },
});

export default styles;

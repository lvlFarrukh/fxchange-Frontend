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
    marginTop: '6.5%',
    fontSize: 16,
  },
  mainBody: {
    alignSelf: 'center',
    width: width,
    height: height,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    zIndex: 1,
    // top: '10%',
    top: 70,
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

  item: {
    //padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
    //backgroundColor:'pink'
  },
  title: {
    fontSize: 15,
    fontWeight:"500",
    color: '#343434'
  },
  date: {
    fontSize: 10,
  },
  totalAmount: {
    fontSize: 10,
    textAlign: 'right'
  },
  amount: {
    fontSize: 16,
    color: '#1bb76d',
    textAlign: 'right'
  },
  hr: {
    borderTopWidth: 1.5,
    borderColor:'#F1F1F1',
    marginTop: 10,
    //marginBottom: 8,
  },
});

export default styles;

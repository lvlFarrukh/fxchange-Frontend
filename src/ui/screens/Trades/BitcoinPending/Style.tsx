import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: '#1bb76d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center',
    paddingTop: 12,
  },
  headerHeading: {
    color: 'white',
    textAlign: 'center',
    //marginTop: '3.5%',
    fontSize: 14,
    marginLeft: -18,
  },
  mainBody: {
    alignSelf: 'center',
    width: width,
    height: height - 100,
    paddingLeft: '7%',
    paddingRight: '7%',
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    zIndex: 1,
    top: '10%',
  },
  headerButtons: {
    height: '4.5%',
    width: '35%',
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 50},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    paddingBottom: 1.5,
  },
  headerButtom: {
    fontSize: 9,
    textAlign: 'center',
    width: '100%',
    borderRadius: 30,
    color: 'black',
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
  backArrow: {
    height: 12,
    width: 18,
    marginLeft: 12,
    marginTop: 5,
    // marginTop: '5%',
    // marginLeft: '5%',
  },
  titleImage: {
    width: 32,
    height: 32,
  },
  hr: {
    borderTopWidth: 1.5,
    borderColor:'#F1F1F1',
    marginTop: 10,
    marginBottom: 10,
  },
  lowerPortion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  smFontSize: {
    fontSize: 11,
    marginBottom: 2,
  },
  mdFontBlackColor: {
    color: 'black',
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 50},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Style;

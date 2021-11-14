import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    mainBody: {
        height: hp(12),
        width: '86%',
        backgroundColor: 'white',
        marginBottom: 10, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        borderRadius: 14,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 50, }, 
        shadowOpacity: 1, 
        shadowRadius: 5, 
        elevation: 5, 
        paddingVertical: "auto",
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    titleImage: {
        width: 33,
        height: 33,
    },
    upperCardPortion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowIcon: {
        width: 17,
        height: 12,
        marginLeft: 8,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    smBlueText: {
        fontSize: RFValue(11), 
        color: '#2e54d9'
    },
    viewItems: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'center',
    },
    hr: {
        borderTopWidth: 1.5,
        borderColor:'#F1F1F1',
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
    }
});

  export default styles
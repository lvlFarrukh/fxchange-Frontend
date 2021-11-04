import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainBody: {
        height: 130,
        width: '86%',
        backgroundColor: 'white',
        marginBottom: 20, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        borderRadius: 16,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 50, }, 
        shadowOpacity: 1, 
        shadowRadius: 5, 
        elevation: 5, 
        padding: 18
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
        width: 13,
        height: 9,
        margin: 5
    },
    smBlueText: {
        fontSize: 12, 
        color: 'blue'
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
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MyText from '../DefaultTextComponent/MyText'
import Style from './Style'

const index = ({
    // route,
    id,
    cardImage,
    title,
    amount,
    date,
    userName,
    reDirecttoCardDetail
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={reDirecttoCardDetail}
        >
            <View style={Style.mainBody}>

                {/* Upper portion */}
                <View style={Style.upperCardPortion}> 

                    <View style={{flexDirection: 'row'}}>

                        <View>
                            <Image source={cardImage} style={Style.titleImage}/>
                        </View>

                        <View style={{marginLeft: 6}}>

                            <MyText style={{color: 'blue'}}>
                                {title}
                            </MyText>

                            <MyText style={{color: 'gray'}}>
                                {id}
                            </MyText>

                        </View>

                    </View>

                    <View style={Style.viewItems}>

                        <MyText style={Style.smBlueText}  onPress={reDirecttoCardDetail}>
                            View
                        </MyText>

                        <Image source={require('../../../Assets/ICONS/arrow=right.png')} style={Style.arrowIcon}/>


                    </View>

                </View>

                {/* hr */}
                <View style={Style.hr}></View>

                <View style={Style.lowerPortion}>

                    <View>
                        <MyText style={[Style.smFontSize, , {color: 'gray'}]}>
                            Amount
                        </MyText>
                        <MyText style={Style.mdFontBlackColor}>
                            ${amount}
                        </MyText>
                    </View>

                    <View>
                        <MyText style={[Style.smFontSize, {color: 'gray'}]}>
                            {date}
                        </MyText>
                        <MyText style={[Style.smFontSize, {textAlign: 'right', color: 'gray'}]}>
                            {userName}
                        </MyText>
                    </View>

                </View>

            </View>
        </TouchableOpacity>
    )
}

export default index

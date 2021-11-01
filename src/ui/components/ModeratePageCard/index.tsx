import React from 'react'
import { View, Text, Image } from 'react-native'
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
        <View style={Style.mainBody}>

            {/* Upper portion */}
            <View style={Style.upperCardPortion}> 

                <View style={{flexDirection: 'row'}}>

                    <View>
                        <Image source={cardImage} style={Style.titleImage}/>
                    </View>

                    <View style={{marginLeft: 6}}>

                        <Text style={{color: 'blue'}}>
                            {title}
                        </Text>

                        <Text style={{color: 'gray'}}>
                            {id}
                        </Text>

                    </View>

                </View>

                <View style={Style.viewItems}>

                    <Text style={Style.smBlueText}  onPress={reDirecttoCardDetail}>
                        View
                    </Text>

                    <Image source={require('../../../Assets/ICONS/arrow=right.png')} style={Style.arrowIcon}/>


                </View>

            </View>

            {/* hr */}
            <View style={Style.hr}></View>

            <View style={Style.lowerPortion}>

                <View>
                    <Text style={[Style.smFontSize, , {color: 'gray'}]}>
                        Amount
                    </Text>
                    <Text style={Style.mdFontBlackColor}>
                        ${amount}
                    </Text>
                </View>

                <View>
                    <Text style={[Style.smFontSize, {color: 'gray'}]}>
                        {date}
                    </Text>
                    <Text style={[Style.smFontSize, {textAlign: 'right', color: 'gray'}]}>
                        {userName}
                    </Text>
                </View>

            </View>

        </View>
    )
}

export default index

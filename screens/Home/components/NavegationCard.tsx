import React,{FC} from "react"
import {Card,RowView} from "../../../styles"
import {NavigationCardTitle, NavigationCardSubtitle, NavigationCardContainer, TextContainer} from "../style"
import {NavigationCardProps} from "./types"
import {View} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"

const NavigationCard : FC<NavigationCardProps> = ({navigationHandler, logo, title, subtitle})=>{
    // TODO remover inline style
    return (
        <TouchableOpacity onPress={navigationHandler}>
            <NavigationCardContainer>
                <RowView> 
                    <View style={{backgroundColor: "#ECF0F2",borderWidth:1, borderRadius:100, overflow: "hidden"}}>
                        {logo}
                    </View>
                    <TextContainer>
                        <NavigationCardTitle>{title}</NavigationCardTitle>
                        <NavigationCardSubtitle>{subtitle}</NavigationCardSubtitle>
                    </TextContainer>
                </RowView>
            </NavigationCardContainer>
        </TouchableOpacity>
    )
}

export default NavigationCard;
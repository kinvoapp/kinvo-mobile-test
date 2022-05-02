import React from "react"
import { View } from "react-native"
import { Message, MessageTitle } from "./styles"
import { IMessageBox } from "./types"


export default function MessageBox(props: IMessageBox) {
    return (
        <View>
            {
                props.type === "error" ?
                    <MessageTitle>Ocorreu um erro</MessageTitle> :
                    <MessageTitle>{props.title}</MessageTitle>
            }
            <Message>{props.message}</Message>
        </View>
    )
}
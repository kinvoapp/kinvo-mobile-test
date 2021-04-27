import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

interface FilterButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export default function FilterButton({ title, active = false, ... rest } : FilterButtonProps ){
    return(
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {... rest}
        >
            <Text style={[
                styles.text,
                active && styles.textActive
            ]}>
                {title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 32,
        width: 113,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: colors.blue
    },
    text: {
        color: colors.gray,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.white
    }
});

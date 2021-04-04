import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pensionFilter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginTop: 20
    },
    pensionFilterItem: {
        paddingHorizontal: 25,
        paddingVertical: 7,
        backgroundColor: Variables.colors.white,
        borderRadius: 15
    },
    pensionFilterItemText: {
        fontSize: 12,
        color: Variables.colors.dark,
        fontWeight: 'bold'
    },
    pensionFilterItemSelected: {
        paddingHorizontal: 25,
        paddingVertical: 7,
        backgroundColor: Variables.colors.purple,
        borderRadius: 15
    },
    pensionFilterItemTextSelected: {
        fontSize: 12,
        color: Variables.colors.white,
        fontWeight: 'bold'
    },
    line:{
        backgroundColor: Variables.colors.gray,
        height: 2,
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 30
    },
    notFoundFilter: {
        fontSize: 12,
        marginHorizontal: 90,
        marginTop: 5,
        color: Variables.colors.dark,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default styles;
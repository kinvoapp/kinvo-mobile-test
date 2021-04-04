import {StyleSheet} from 'react-native';
import Variables from '../../styles'

const styles = StyleSheet.create({
    stackHeader:{
        backgroundColor: Variables.colors.white, 
        height: 100,
        borderWidth: 1,
        borderColor: Variables.colors.gray,
        borderEndColor: Variables.colors.gray,
        borderBottomColor: Variables.colors.gray,
    },
    stackTitle: {
        color: Variables.colors.purple,
        fontWeight: 'bold',
        marginLeft: 15
    },
    stackCard: {
        backgroundColor: Variables.colors.primary
    }
});

export default styles;
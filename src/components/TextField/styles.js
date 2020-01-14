import { StyleSheet, Platform, Dimensions } from 'react-native'
import theme from "../../style/theme";

const height = Dimensions.get('window').height;

export default StyleSheet.create({
    view: {
        marginTop: 10,
    },
    errorMessage: {
        fontFamily: theme.font.regular,
        color: '#cc4133',
        marginTop: 3,
        fontSize: 15
    },
    input: {
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 5,
        width: '100%',
        paddingLeft: 10,
        color: theme.secondary.default,
        fontSize: 16,
        fontFamily: theme.font.medium,
    },
    inputError: {
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 10,
        borderColor: '#cc4133',
        width: '100%',
        paddingLeft: 10,
        color: theme.secondary.light,
        fontSize: 15,
        fontFamily: theme.font.regular,
    },
});

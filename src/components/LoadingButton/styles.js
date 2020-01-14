import { Dimensions, StyleSheet } from 'react-native'
import theme from "../../style/theme";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    loadingBackground: {
        backgroundColor: theme.primary.default,
        borderRadius: width / 2,
        marginTop: 20
    },
    buttonText: {
        fontFamily: theme.font.regular,
        fontSize: 16
    }
});
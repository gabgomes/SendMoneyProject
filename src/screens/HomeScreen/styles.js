
import { StyleSheet, Dimensions } from "react-native";
import theme from "../../style/theme";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        paddingTop: 40,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: theme.primary.default
    },
    top: { 
        alignItems: 'center'
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        margin: 20, 
        borderColor: theme.primary.light, 
        borderWidth: 4
    },
    nameText: {
        fontSize: 19,
        color: theme.secondary.contrastText,
        fontFamily: theme.font.bold, 
    },
    emailText: {
        marginTop: 5,
        fontSize: 15,
        color: theme.secondary.contrastText,
        fontFamily: theme.font.light, 
    },
    purpleButton: {
        backgroundColor: theme.primary.light,
        marginBottom: 20, 
        height: 55, 
        width: width/1.3
    },
});



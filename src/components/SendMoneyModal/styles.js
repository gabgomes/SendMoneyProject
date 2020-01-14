import { StyleSheet, Dimensions } from 'react-native'
import theme from "../../style/theme";

const { height, width } = Dimensions.get('window');
 
export default StyleSheet.create({
    touchable: { 
        width: '100%', 
        height: '100%',
        backgroundColor: theme.modal.background,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    modal: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: theme.primary.default, 
        borderRadius: 15,
        width: '85%', 
        maxWidth: 600
    },
    top: { 
        marginBottom: 15,
        alignItems: 'center'
    },
    image: { 
        width: 70, 
        height: 70, 
        borderRadius: 35
    }, 
    input: { 
        height: 60, 
        backgroundColor: '#fff',
        width: '100%',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 10, 
        marginTop: 10,
        fontSize: 33,
        textAlign: 'center', 
        fontFamily: theme.font.bold, 
    }, 
    h1: { 
        fontSize: 18, 
        color: theme.secondary.contrastText, 
        fontFamily: theme.font.bold, 
        marginTop: 10, 
        marginBottom: 5
    },
    h2: { 
        fontSize: 15, 
        color: theme.secondary.contrastText, 
        fontFamily: theme.font.light
    }, 
    sendButton: {
        backgroundColor: theme.primary.light,
        height: 40, 
        marginTop: 20,
        fontFamily: theme.font.light
    },
});

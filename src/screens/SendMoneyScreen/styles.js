
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Header } from 'react-navigation';
import theme from "../../style/theme";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        backgroundColor: theme.primary.default,
        alignItems: 'center',
    },
    flatlist: { 
        paddingHorizontal: 20,
    },
    itemView: { 
        width: width,
        paddingVertical: 15,
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderBottomColor: theme.primary.light
    },
    image: { 
        width: 60, 
        height: 60,
        borderRadius: 30, 
        marginRight: 10,
        borderColor: theme.primary.light, 
        borderWidth: 1
    }, 
    h1: { 
        fontSize: 18, 
        fontFamily: theme.font.regular, 
        color: theme.primary.light, 
        width: width/1.5,
    }, 
    h2: { 
        fontSize: 15, 
        fontFamily: theme.font.light, 
        color: theme.primary.light
    }
});




import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Header } from 'react-navigation';
import theme from "../../style/theme";

const { height, width } = Dimensions.get('window');
const headerHeight = Header.HEIGHT;
const statusBarHeight = StatusBar.currentHeight

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: theme.primary.default,
    },
    content: {
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
        borderWidth: 2
    }, 
    h1: { 
        fontSize: 17, 
        fontFamily: theme.font.regular,
        color: theme.primary.light,
        marginBottom: 5
    }, 
    h2: { 
        fontSize: 16, 
        fontFamily: theme.font.light, 
        color: theme.primary.light
    }, 
    valueText: { 
        fontSize: 14, 
        marginTop: 3,
        fontFamily: theme.font.light, 
        color: theme.primary.light,
    }
});



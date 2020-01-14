import { Dimensions, StyleSheet } from 'react-native'
import theme from "../../style/theme";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    item: { 
        alignItems: 'center',
        marginRight: 10
        // width: 4, 
    },
    image: { 
        height: 40, 
        width: 40, 
        borderRadius: 20, 
        borderColor: theme.primary.light, 
        borderWidth: 2
    },
    flatlist: { 
        paddingHorizontal: 25, 
        marginBottom: 20,
        marginTop: 10
    }, 
    bar: { 
        backgroundColor: theme.primary.light,
        height: 100,
        width: 3
    }, 
    circle : { 
        width: 10, 
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.primary.light
    }, 
    valueText: { 
        color: theme.primary.light, 
        fontFamily: theme.font.regular, 
        fontSize: 13,
        marginBottom: 5
    }
});
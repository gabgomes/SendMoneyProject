import { createStackNavigator } from 'react-navigation'
import {
    HomeScreen, 
    SendMoneyScreen,
    HistoricScreen
} from '../screens'
import theme from '../style/theme'
import { SYSTEM_ROUTES } from "../constants";

export const AuthStackNavigator = createStackNavigator({
    [SYSTEM_ROUTES.HOME_SCREEN.ROUTE]: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: SYSTEM_ROUTES.HOME_SCREEN.HEADER_TITLE, 
        }),
    },
    [SYSTEM_ROUTES.SEND_MONEY_SCREEN.ROUTE]: {
        screen: SendMoneyScreen,
        navigationOptions: () => ({
            title: SYSTEM_ROUTES.SEND_MONEY_SCREEN.HEADER_TITLE, 
        }),
    },
    [SYSTEM_ROUTES.HISTORIC_SCREEN.ROUTE]: {
        screen: HistoricScreen,
        navigationOptions: () => ({
            title: SYSTEM_ROUTES.HISTORIC_SCREEN.HEADER_TITLE, 
        }),
    },
}, {
        navigationOptions: {
            headerBackTitle: 'Voltar',
            headerTintColor: theme.primary.contrastText,
            headerTitleStyle: {
                fontWeight: undefined, 
                fontFamily: theme.font.light, 
                fontSize: 19
            },
            headerStyle: {
                backgroundColor: theme.primary.default,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            }
        },
    });
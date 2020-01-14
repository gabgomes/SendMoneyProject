import { createSwitchNavigator } from 'react-navigation'
import { SYSTEM_ROUTES } from "../constants";
import { AuthStackNavigator } from './AuthStackNavigator';
import { SplashScreen } from '../screens';

export const AuthSwitchNavigator = createSwitchNavigator({
    // [SYSTEM_ROUTES.AUTH_LOADING_SCREEN.ROUTE]: SplashScreen,
    [SYSTEM_ROUTES.AUTH_STACK_NAVIGATOR.ROUTE]: AuthStackNavigator,
    // [SYSTEM_ROUTES.APP_PATIENT_DRAWER_NAVIGATOR.ROUTE]: AppPatientDrawerNavigator,
    // [SYSTEM_ROUTES.APP_SPECIALIST_DRAWER_NAVIGATOR.ROUTE]: AppSpecialistDrawerNavigator,
}, {
        // initialRouteName: SYSTEM_ROUTES.AUTH_LOADING_SCREEN.ROUTE,
    });
import { createSwitchNavigator } from 'react-navigation';
import * as Views from '.';
const { Splash } = Views;
const SplashScreenNavigator =  createSwitchNavigator(
    {
        SplashScreen: Splash,
    },
    {
        // https://reactnavigation.org/docs/en/switch-navigator.html#routeconfigs
        initialRouteName: 'SplashScreen',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: 'none'
        })
    }
);

export default SplashScreenNavigator
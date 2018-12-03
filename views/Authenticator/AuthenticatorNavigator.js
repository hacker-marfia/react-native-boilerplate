import { createStackNavigator } from 'react-navigation';
import * as Views from '.';
const { FacebookSignIn } = Views;
export default createStackNavigator(
    {
        FacebookSignIn
    },
    {
        // https://reactnavigation.org/docs/en/switch-navigator.html#routeconfigs
        initialRouteName: 'FacebookSignIn',
        defaultNavigationOptions: ({ navigation }) => ({
            
        })
    }
);
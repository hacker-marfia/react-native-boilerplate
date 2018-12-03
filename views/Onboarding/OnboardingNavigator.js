import { createStackNavigator } from 'react-navigation';
import * as Views from '.';
const { OnboardingScreen } = Views;
const OnboardingNavigator =  createStackNavigator(
    {
        OnboardingScreen,
    },
    {
        initialRouteName: 'OnboardingScreen',
        headerMode: 'none'
    }
);

export default OnboardingNavigator
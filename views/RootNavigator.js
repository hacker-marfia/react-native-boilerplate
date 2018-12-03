import { createSwitchNavigator } from 'react-navigation';
import { Application, Authenticator, SplashScreen, Onboarding } from  '.';

export default RootNavigator = createSwitchNavigator(
{
    Application,
    Authenticator,
    SplashScreen,
    Onboarding,
},
{
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
});
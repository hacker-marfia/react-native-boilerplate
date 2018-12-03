import { createStackNavigator } from 'react-navigation'

import View1 from './Screens/View1'
import View2 from './Screens/View2'

export default Tab2 = createStackNavigator({
    View1,
    View2,
},
{
    // https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    initialRouteName: 'View1',
    defaultNavigationOptions: ({ navigation }) => ({

    }),
})
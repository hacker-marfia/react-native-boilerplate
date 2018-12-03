import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import * as Views from './';

const { Tab1, Tab2 } = Views

export default ApplicationNavigation = createBottomTabNavigator({
    Tab1, 
    Tab2
},
{
    // https://reactnavigation.org/docs/en/bottom-tab-navigator.html#bottomtabnavigatorconfig
    initialRouteName: 'Tab1',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Tab1') {
          iconName = 'ios-people';
        } else if (routeName === 'Tab2') {
          iconName = 'ios-contact';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }, 
  })
})
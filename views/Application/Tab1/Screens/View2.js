import React from 'react';
import { View } from 'react-native';
import { globalStyles } from 'app/styles'

export default class View2 extends React.Component {
  static navigationOptions = ({navigation}) => {
    const greeting = navigation.getParam('greeting')
    return { title: 'View2 ' + greeting }
  }
  render() {
    return (
      <View style={globalStyles.container}>

      </View>
    );
  }
}
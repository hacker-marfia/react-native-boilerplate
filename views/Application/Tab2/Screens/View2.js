import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from 'app/styles'

export default class View2 extends React.Component {
  static navigationOptions = ({navigation}) => ({ 
    title: 'View2' 
  })
  
  render() {
    const greeting = this.props.navigation.getParam('greeting')
    return (
      <View style={globalStyles.container}>
        <Text>{greeting}</Text>
      </View>
    );
  }
}
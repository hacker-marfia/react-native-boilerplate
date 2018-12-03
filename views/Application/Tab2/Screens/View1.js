import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from 'app/styles'

export default class View1 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'View1'
  })
  render() {
    return (
      <View style={globalStyles.container}>
        <Button title="Navigate" onPress={()=>this.props.navigation.navigate('View2', { greeting: 'Hello' })} />
      </View>
    );
  }
}
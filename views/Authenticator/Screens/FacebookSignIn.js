import React from 'react';
import { View, Button, Alert } from 'react-native';
import { globalStyles } from 'app/styles'
import { Facebook } from 'expo'

export default class View1 extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Sign in with Facebook'
    })
    render() {
        return (
            <View style={globalStyles.container}>
                <Button title="Sign in" onPress={this.logIn} />
            </View>
        );
    }

    logIn = async() => {
        // https://docs.expo.io/versions/v31.0.0/sdk/facebook
        // try {
        //     const response = await Facebook.logInWithReadPermissionsAsync('<APP_ID>', {permissions: ['public_profile'] });
        //     const { type, token, expires, permissions, declinedPermissions} = response 
        //     if (type === 'success') {
        //         // Get the user's name using Facebook's Graph API
        //         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        //         Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`)
        //         this.props.navigation.navigate('Application')
        //     } 
        //     else {
        //         // type === 'cancel'
        //     }
        // } 
        // catch ({ message }) {
        //     Alert.alert(`Facebook Login Error: ${message}`);
        // }
        this.props.navigation.navigate('Application')
    }
}
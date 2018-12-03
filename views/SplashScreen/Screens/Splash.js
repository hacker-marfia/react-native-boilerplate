import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { globalStyles } from 'app/styles'


export default class Splash extends React.Component {
    static navigationOptions = { header: null }

    async componentDidMount() {
        await this.verifyUser()
    }
    
    render() {
        return (
            <View style={globalStyles.container}>
                <ActivityIndicator size="large" />
                <Text>Fake authentication</Text>
            </View>
        );
    };

    verifyUser = async() => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const isAuthenticated = false
        const isFirstTime = false
        if (isFirstTime) {
            this.props.navigation.navigate('Onboarding')
        }
        else {
            this.props.navigation.navigate(isAuthenticated ? 'Application': 'Authenticator')
        }
    }
};
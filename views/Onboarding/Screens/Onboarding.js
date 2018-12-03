import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { Pages } from "react-native-pages";
import { globalStyles } from 'app/styles'

export default class Onboarding extends React.Component {
    render() {
        return ( 
                <SafeAreaView style={{flex: 1}}>
                <Pages indicatorColor="black" >
                    <View style={globalStyles.fullFlex}>
                        <Text style={styles.title}>
                            Welcome
                        </Text>
                    </View>
                    <View style={globalStyles.fullFlex}>
                        <Text style={styles.text} >
                            Page 1
                        </Text>
                    </View>
                    <View style={globalStyles.fullFlex}>
                        <Text style={styles.text} >
                            Page 2
                        </Text>
                        <Button style={styles.button} title="Continue" onPress={()=>this.props.navigation.navigate('SplashScreen')} />
                    </View>
                </Pages>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
    marginHorizontal: 20,
    marginBottom: 40
  },
})
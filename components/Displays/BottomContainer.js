import React from 'react';
import { SafeAreaView } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
export default class BottomContainer extends React.Component {
    render() {
        return (
            <BlurView
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1
                }}
                intensity={100} >
                 <LinearGradient style={{padding: 20}} colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)']} locations={[0, 0.6]} >
                    <SafeAreaView>
                            {this.props.children}
                    </SafeAreaView>
                </LinearGradient>
            </BlurView>
        )
    }
}
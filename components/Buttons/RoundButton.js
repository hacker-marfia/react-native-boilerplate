import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class RoundButton extends React.Component {
    render() {
        const { style, textStyle, onPress, title } = this.props
        return(
            <TouchableOpacity  
                style={[styles.roundButton, style]} 
                activeOpacity={0.7} 
                onPress={onPress}>
                <Text style={[styles.text, textStyle]} >
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    roundButton: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0,122,255,1)',
        borderRadius: 5,
        height: 40,
    },
    text: {
        fontSize: 20,
        margin: 5,
        color: 'white'
    }
})

RoundButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
}

RoundButton.defaultProps = {
    title: '',
}
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'app/styles'

export default class RemoveButton extends React.Component {
    render() {
        const { style, onPress, big } = this.props

        let size = big ? { borderRadius: 15,height: 30, width: 30,} : { borderRadius: 11.5, height: 23, width: 23}
        let signSize = big ? { height: 4, width: 18, borderRadius: 2 } : { height: 2, width: 12, borderRadius: 1 }

        return(
            <TouchableOpacity  
                style={[styles.button, size, style]} 
                activeOpacity={0.8} 
                onPress={onPress}>
                <View style={[styles.minus, signSize]} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.red,
        borderRadius: 15,
        height: 30,
        width: 30,
    },
    minus: {
        backgroundColor: 'white',
        borderRadius: 2,
        height: 4,
        width: 18,
    }
})

RemoveButton.propTypes = {
    onPress: PropTypes.func,
    big: PropTypes.bool,
}

RemoveButton.defaultProps = {
    big: false
}
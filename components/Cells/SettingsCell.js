import React from 'react'
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, StyleSheet, SafeAreaView } from 'react-native';
import { RemoveButton } from 'app/components';
import { Ionicons } from '@expo/vector-icons'

export default class SettingsCell extends React.Component {
    render() {
        const { onPress, onLongPress, onDelete, main, editing, disabled } = this.props
        const disabledTextStyle = disabled ?  { color: 'rgba(0,0,0,0.30)' } : null
        let removeButton = editing ?  <RemoveButton style={styles.removeButton} onPress={onDelete} /> : null

        return(
            <TouchableHighlight  
                underlayColor={'rgba(114,46,209,0.1)'}
                onPress={onPress}
                onLongPress={onLongPress}>
                <SafeAreaView style={styles.cell}>
                {removeButton}
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainText, disabledTextStyle]} numberOfLines={1} >{main}</Text>
                    </View>
                    <View style={styles.detailSign}><Ionicons name="ios-arrow-forward" size={20} color="#D1D1D1" /></View>
                </SafeAreaView>
            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }, 
    mainText: {
        fontSize: 20,
    },   
    detailSign: {
        marginRight:10,
        alignItems: 'center',
    },
    removeButton: {
        marginHorizontal: 10,
    }
})

SettingsCell.propTypes = {
    main: PropTypes.string,
    editing: PropTypes.bool,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onDelete: PropTypes.func,
    disabled: PropTypes.bool,
}

SettingsCell.defaultProps = {
    main: '',
    editing: false,
    disabled: false
}
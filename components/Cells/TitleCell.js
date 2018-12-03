import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, StyleSheet, SafeAreaView } from 'react-native';
import { RemoveButton } from 'app/components';
import { SwipeAction } from 'antd-mobile-rn'
import { Ionicons } from '@expo/vector-icons'

export default class TitleCell extends React.Component {

    render() {
        let { title, onPress, onLongPress, editing, onDelete, left, right, autoClose, onOpen, onClose, disabled } = this.props
        const disabledTextStyle = disabled ?  { color: 'rgba(0,0,0,0.30)' } : null
        let removeButton = editing ?  <RemoveButton style={styles.removeButton} onPress={onDelete} /> : null

        return(
            <SwipeAction left={left} right={right} autoClose={autoClose} onOpen={onOpen} onClose={onClose} disabled={disabled}>
                <TouchableHighlight 
                    underlayColor={'rgba(114,46,209,0.1)'}
                    disabled={disabled}
                    onPress={onPress}
                    onLongPress={onLongPress}>
                    <SafeAreaView style={styles.cell}>
                        {removeButton}
                        <View style={styles.textContainer}>
                            <Text style={[styles.titleText, disabledTextStyle]} numberOfLines={1} >{title}</Text>
                        </View>
                        <View style={styles.detailSign}><Ionicons name="ios-arrow-forward" size={20} color="#D1D1D1" /></View>
                    </SafeAreaView>
                </TouchableHighlight>
            </SwipeAction>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    }, 
    titleText: {
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
    }, 
    detailSign: {
        marginRight:10
    },
    removeButton: {
        marginHorizontal: 10,
    }
    
})

TitleCell.propTypes = {
    title: PropTypes.string,
    editing: PropTypes.bool,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onDelete: PropTypes.func,
    left: PropTypes.array, 
    right: PropTypes.array, 
    autoClose: PropTypes.bool, 
    onOpen: PropTypes.func, 
    onClose: PropTypes.func, 
    disabled: PropTypes.bool,
}

TitleCell.defaultProps = {
    title: '',
    editing: false,
    autoClose: false, 
    disabled: false,
}
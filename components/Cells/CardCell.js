import React from 'react'
import PropTypes from "prop-types";
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { ClassIcon, RemoveButton } from 'app/components';

import { objectToArray } from 'app/utilities'

import {colors} from 'app/styles'

export default class CardCell extends React.Component {
    render() {
        const { title, detail, color, onPress, onLongPress, icon, disabled, style, editing, onDelete } = this.props

        const THEColor = objectToArray(colors)[color]

        let removeButton = editing ? <RemoveButton big style={styles.button} onPress={onDelete} /> : null

        return(
            <TouchableOpacity 
                activeOpacity={0.85}
                onPress={onPress}
                onLongPress={onLongPress}
                disabled={disabled}
                style={[styles.card, {backgroundColor: THEColor}, style]}>
                <SafeAreaView style={{ width: '100%' }} >
                    {removeButton}
                    <View style={styles.iconContainer}>
                        <ClassIcon
                            is={icon}
                            style={styles.icon}
                            size={180} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText} adjustsFontSizeToFit numberOfLines={1} >{title}</Text>
                        <Text style={styles.detailText} adjustsFontSizeToFit numberOfLines={1} >{detail}</Text>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: 300,
        height: 300,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {height: 5, width: 5},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        maxWidth: '100%'
    }, 
    titleText: {
        width: '100%',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }, 
    detailText: {
        color: 'white',
        fontSize: 20,
    },
    iconContainer: {
        left: 20,
        top: 20,
    },
    button: {
        left: -15,
        top: -15,
        position: 'absolute'
    }
})

CardCell.propTypes = {
    title: PropTypes.string,
    detail: PropTypes.string,
    color: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onDelete: PropTypes.func,
    icon: PropTypes.number,
    disabled: PropTypes.bool,
    editing: PropTypes.bool,
}

CardCell.defaultProps = {
    title: '',
    detail: '', 
    color: 0,
    icon: 0,
    disabled: false,
    editing: false,
}
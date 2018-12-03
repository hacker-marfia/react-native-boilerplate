import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native';

import { NavButton } from 'app/components'

import { colors } from 'app/styles'


export default class FakeNav extends Component {
    render() {
        const { title, onCancel, onEdit, editing } = this.props
        let cancelButton = onCancel 
            ? <NavButton title="Cancel" onPress={onCancel} style={styles.cancelButton}/> 
            : null
        let buttonTitle = editing ? 'Done' : 'Edit'
        let bold = editing ? {fontWeight: '600'} : null
        let editButton = onEdit 
            ? <NavButton title={buttonTitle} textStyle={bold} onPress={onEdit} style={styles.editButton}/> 
            : null
        return (
            <View style={styles.outerContainer}>
                {cancelButton}
                <View style={styles.innerContainer}>
                    <Text style={styles.title} numberOfLines={1} >{title}</Text>
                    
                </View>
                {editButton}
            </View>
        )
    }
}

const styles= StyleSheet.create({
    outerContainer: {
        width: '100%',
        backgroundColor: colors.main, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: colors.mainDarker,
        borderBottomWidth: 1,
    },
    innerContainer: {
        marginHorizontal: 85,
        position: 'absolute',
    }, 
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    cancelButton: {
        position: 'absolute',
        alignSelf: 'flex-start',
    },
    editButton: {
        alignSelf: 'flex-end',
    }
})

FakeNav.propTypes = {
    title: PropTypes.string,
    onCancel: PropTypes.func,
    onEdit: PropTypes.func,
}

FakeNav.defaultProps = {
    title: '',
}
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native'

import { colors } from 'app/styles'

export default class RemindersCell extends React.Component {
    render() {
        const { main, mainStyle, onPress, onLongPress, checked, disabled } = this.props
        const disabledTextStyle = disabled ?  { color: 'rgba(0,0,0,0.30)' } : null
        const circle = checked ? <View style={styles.innerCircle} /> : null
        const checkedStyle = checked ? { borderColor: colors.main } : { borderColor: colors.gray }
        return(
            <TouchableHighlight 
                underlayColor={'rgba(114,46,209,0.1)'}
                disabled={disabled}
                onLongPress={onLongPress}
                onPress={onPress}>
                    <SafeAreaView style={styles.cell}>
                        <View style={[styles.outerCicle, checkedStyle]}>
                            {circle}
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[{ fontSize: 20 }, mainStyle, disabledTextStyle]} numberOfLines={1} >{main}</Text>
                        </View>
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
        backgroundColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    }, 
    outerCicle: {
        width: 28,
        height: 28,
        borderRadius: 15,
        borderColor: colors.main,
        borderWidth: 2,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: colors.main,
        
    },
})

RemindersCell.propTypes = {
    main: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
}

RemindersCell.defaultProps = {
    main: '',
    checked: false,
    disabled: false,
}

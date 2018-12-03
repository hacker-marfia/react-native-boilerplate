import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default class ComponentCell extends React.Component {
    render() {
        const { main, detail, onPress, onLongPress, component } = this.props
        return(
            <TouchableOpacity 
                disabled={!onPress && !onLongPress}
                underlayColor={'rgba(114,46,209,0.1)'}
                onPress={onPress}
                onLongPress={onLongPress} >
                <SafeAreaView style={styles.cell}>
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText} numberOfLines={1} >{main}</Text>
                        <View style={styles.detailTextContainer}>
                            <Text style={styles.detailText} numberOfLines={1} >{detail}</Text>
                        </View>
                    </View>
                    <View>
                        {component}
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    }, 
    detailTextContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
    }, 
    mainText: {
        fontSize: 20,
    },  
    detailText: {
        fontSize: 18,
        color: '#9A9A9A',
        alignSelf: 'flex-end',
    },  
})

ComponentCell.propTypes = {
    main: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    detail: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    component: PropTypes.any
}

ComponentCell.defaultProps = {
    main: '',
    detail: '',
    component: null
}

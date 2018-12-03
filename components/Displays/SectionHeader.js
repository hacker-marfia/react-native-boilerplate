import React from 'react';
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, SafeAreaView,} from 'react-native';

export default class SectionHeader extends React.Component {
    render() {
        return(
            <View style={styles.header}>
                <SafeAreaView>
                    <Text style={styles.text} >{this.props.text}</Text>
                </SafeAreaView> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 45,
        paddingLeft: 10,
        paddingBottom: 5,
        backgroundColor: '#EFEFF4',
    },
    text:{
        color: '#88888D',
        fontSize: 14,
    }
})

SectionHeader.propTypes = {
    text: PropTypes.string,
}

SectionHeader.defaultProps = {
    text: '',
}
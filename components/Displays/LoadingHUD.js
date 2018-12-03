import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
export default class LoadingHUD extends React.Component {
    render() {
        const { loading, message } = this.props
        return loading
            ? (
                <View style={styles.container} >
                    <View style={styles.square} >
                        <ActivityIndicator size="large" color="#000000" style={{ marginTop: message ? 30 : 0 }} />
                        {
                            message
                                ? <Text style={styles.message}>{message}</Text>
                                : null
                        }
                    </View>
                </View>
            )
            : null
    };
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        elevation: 800000,
        zIndex: 10000000000,
    },
    square: {
        minWidth: 100,
        minHeight: 100,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.80)',
        justifyContent: 'center',
    },
    message: {
        width: '100%',
        maxWidth: Dimensions.get('window').width * 0.85,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 25,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '500',
    }
});
LoadingHUD.propTypes = {
    loading: PropTypes.bool,
    message: PropTypes.string
};
LoadingHUD.defaultProps = {
    loading: false
};
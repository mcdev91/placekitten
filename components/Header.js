import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

const Header = () => (
    <View style={styles.container}>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00ff00',
        height: 50,
        borderBottomWidth: 1.5,
    },
    icon: {
        marginLeft: 15,
        fontSize: 20
    },
});

export default Header;
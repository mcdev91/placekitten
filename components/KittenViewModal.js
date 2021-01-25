import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

const KittenView = () => (
    <View style={styles.container}>
        <Text
            style={styles.icon}
            onPress={() => Alert.alert('Navigation')}
        >
            Arrow
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00ff00',
        height: 50,
        borderBottomWidth: 1.5,
    },
    icon: {
        marginLeft: 15,
        fontSize: 20
    },
});

export default KittenView;
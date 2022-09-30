//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const HomeScreen = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
    });

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;

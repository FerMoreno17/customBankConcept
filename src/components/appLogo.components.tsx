import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const AppLogo = () => {
    const { width } = Dimensions.get('screen');

    const styles = StyleSheet.create({
        container: {
            width: width * 0.7,
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            width: 30,
            height: 30,
        },
    });

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
    );
};

export default AppLogo;

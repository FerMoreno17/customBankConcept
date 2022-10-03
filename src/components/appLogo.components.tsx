import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const AppLogo = () => {
    const styles = StyleSheet.create({
        logo: {
            width: 30,
            height: 30,
        },
    });

    return (
        <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
    );
};

export default AppLogo;

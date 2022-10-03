//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AppStyle from '../styles/styles';
import CuentasComponent from './Cuentas/cuentas.component';

// create a component
const HomeScreen = () => {
    const styles = StyleSheet.create({
        cabecera: {
            flex: 1,
            backgroundColor: 'grey',
        },
        botones: {
            flex: 3,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: 'green',
        },
    });

    return (
        <SafeAreaView style={AppStyle.container}>
            <View style={[AppStyle.body]}>
                <View style={styles.cabecera}>
                    <CuentasComponent />
                </View>
                <View style={styles.botones}>
                    <Text>Botones</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

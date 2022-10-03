//import liraries
import React from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import AppButtonList from '../components/appButtonList.component';
import AppStyle from '../styles/styles';
import { theme } from '../styles/theme.style';
import CuentasComponent from './Cuentas/cuentas.component';

// create a component
const HomeScreen = () => {
    const { height } = Dimensions.get('screen');
    const styles = StyleSheet.create({
        cabecera: {
            ...StyleSheet.absoluteFillObject,
            flex: 1,
        },
        botonesContainer: {
            top: 150,
            maxHeight: height * 0.68,
            flex: 2,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            padding: 20,
            backgroundColor: theme.WHITE,
        },
    });

    return (
        <SafeAreaView style={AppStyle.container}>
            <View style={[AppStyle.body]}>
                <View style={styles.cabecera}>
                    <CuentasComponent />
                </View>
                <View style={styles.botonesContainer}>
                    <AppButtonList />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

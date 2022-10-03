import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { mainColor } from '../../App';
import theme from '../../styles/theme.style';
//Los datos de componentes como estos, no deben depender de otros componentes padres
//deben obtener su información desde el Redux


const CuentasComponent = () => {
    const nro_cuenta = '0000000-1234';
    const saldo = '50,634';
    const moneda = '$';

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: mainColor,
        },
        cuenta: {
            fontSize: theme.FONT_SIZE_SMALL,
            color: theme.WHITE,
        },
        saldo: {
            fontSize: theme.FONT_SIZE_LARGE,
            color: theme.WHITE,
            fontWeight: '900',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.cuenta}>Nº {nro_cuenta}</Text>
            <Text style={[styles.saldo]}>{moneda}{saldo}</Text>
        </View>
    );
};

export default CuentasComponent;

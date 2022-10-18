import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { mainColor } from '../../App';
import { theme } from '../../styles/theme.style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AppButtonIcon from '../../components/appButtonIcon.component';

//Los datos de componentes como estos, no deben depender de otros componentes padres
//deben obtener su información desde el Redux


const CuentasComponent = () => {
    const nro_cuenta = '0000000-1234';
    const saldo = '50,634';
    const moneda = '$';

    const [activeEye, setActiveEye] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: mainColor,
        },
        cuenta: {
            fontSize: theme.FONT_SIZE_MEDIUM,
            color: theme.WHITE,
        },
        row: {
            flexDirection: 'row',
        },
        saldoContainer: {
            flex: 1,
        },
        saldo: {
            fontSize: theme.FONT_SIZE_LARGE,
            color: theme.WHITE,
            fontWeight: '900',
        },
        buttonEyeContainer: {
            flex: 1,
            alignItems: 'flex-start',
        },
        buttonEye: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        buttons: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
        },
    });

    function handleButtonEye() {
        if (activeEye) {
            setActiveEye(false);
        } else {
            setActiveEye(true);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.saldoContainer}>
                    <Text style={styles.cuenta}>Nº {nro_cuenta}</Text>
                    {
                        activeEye
                            ? <Text style={[styles.saldo]}>{moneda}{saldo}</Text>
                            : <Text style={[styles.saldo]}>*********</Text>
                    }
                </View>
                <View style={styles.buttonEyeContainer}>
                    <Pressable
                        style={styles.buttonEye}
                        onPress={handleButtonEye}
                    >
                        <Ionicon
                            name={activeEye ? 'eye-outline' : 'eye-off-outline'}
                            size={25}
                            color={theme.WHITE} />
                    </Pressable>
                </View>
            </View>

            {/*El listado de botones debe vennir definido en la parametria*/}
            <View style={[styles.row, styles.buttons]}>
                <AppButtonIcon
                    iconSize={25}
                    iconName={'wallet-outline'}
                    label={'Billetera'}
                    labelColor={theme.WHITE}
                    borderColor={mainColor}
                    backgroudColor={theme.WHITE}
                    onPress={() => Alert.alert('abrir billetera..')}
                />
                <AppButtonIcon
                    iconSize={25}
                    iconName={'cash-outline'}
                    label={'Transferir'}
                    labelColor={theme.WHITE}
                    borderColor={mainColor}
                    backgroudColor={theme.WHITE}
                    onPress={() => Alert.alert('transferir..')}
                />
                <AppButtonIcon
                    iconSize={25}
                    iconName={'receipt-outline'}
                    label={'Comprobantes'}
                    labelColor={theme.WHITE}
                    borderColor={mainColor}
                    backgroudColor={theme.WHITE}
                    onPress={() => Alert.alert('abrir comprobantes..')}
                />
                <AppButtonIcon
                    iconSize={25}
                    iconName={'sync-circle-outline'}
                    label={'Cambio'}
                    labelColor={theme.WHITE}
                    borderColor={mainColor}
                    backgroudColor={theme.WHITE}
                    onPress={() => Alert.alert('abrir cambio moneda..')}
                />
            </View>
        </View>
    );
};

export default CuentasComponent;

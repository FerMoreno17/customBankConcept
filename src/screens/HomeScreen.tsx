//import liraries
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButtonList from '../components/appButtonList.component';
import AppLastTransactions from '../components/appLastTransactions.component';
import AppUserCards from '../components/appUserCards.components';
import AppStyle from '../styles/styles';
import { theme } from '../styles/theme.style';
import CuentasComponent from './Cuentas/cuentas.component';

// create a component
const HomeScreen = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        cabecera: {
            ...StyleSheet.absoluteFillObject,
            flex: 1,
        },
        body: {
            top: 200,
            flex: 1,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            padding: 20,
            backgroundColor: theme.WHITE,
        },
        section1: {
            flex: 1,
            maxHeight: 130,
            justifyContent: 'center',
        },
        section2: {
            flex: 1,
            maxHeight: 190,
            justifyContent: 'center',
        },
        sectionLabel: {
            color: theme.PRIMARY_COLOR,
            marginBottom: 10,
        },
        sectionList: {
            marginBottom: 70,
        },
    });

    return (
        <View style={styles.container}>
            <View style={[AppStyle.body]}>
                <View style={styles.cabecera}>
                    <CuentasComponent />
                </View>
                <View style={styles.body}>
                    <View style={styles.section1}>
                        <Text style={[AppStyle.h1, styles.sectionLabel]}>
                            Más acciones
                        </Text>
                        <AppButtonList />
                    </View>
                    <View style={styles.section2}>
                        <Text style={[AppStyle.h1, styles.sectionLabel]}>
                            Tarjetas
                        </Text>
                        <AppUserCards />
                    </View>

                    <View style={styles.section2}>
                        <Text style={[AppStyle.h1, styles.sectionLabel]}>
                            Últimos Movimientos
                        </Text>
                        <AppLastTransactions />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

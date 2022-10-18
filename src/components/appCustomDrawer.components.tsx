import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { theme } from '../styles/theme.style';

const AppCustomDrawer = (props: any) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        contentContainer: {
            backgroundColor: theme.GREY,
            alignItems: 'center',
        },
        userText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.DARK_GREY,
            marginBottom: 10,
        },
        optionsContainer: {
            width: '100%',
            backgroundColor: theme.WHITE,
            paddingTop: 10,
        },
        footer: {
            bottom: 20,
            left: 20,
        },
    });

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={styles.contentContainer}
            >
                {/*Header del menu*/}
                <View>
                    <Ionicon
                        name={'person-circle-outline'}
                        size={100}
                        color={theme.DARK_GREY} />
                    <Text style={styles.userText}>Generic User</Text>
                </View>

                {/*Listado de pantallas*/}
                <View style={styles.optionsContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={styles.footer}>
                <Text>Versión: 0.1.0</Text>
            </View>
        </View>
    );
};

export default AppCustomDrawer;

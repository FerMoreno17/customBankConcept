import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const AppCustomDrawer = (props: any) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        contentContainer: {
            backgroundColor: '#d9d9d9',
        },
        bg: {
            padding: 20,
        },
        userIcon: {
            width: 75,
            height: 75,
            marginBottom: 10,
        },
        userText: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        optionsContainer: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
        },
    });

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={styles.contentContainer}
            >
                {/*Header del menu*/}
                <ImageBackground
                    source={require('../assets/drawer-bg.png')}
                    style={styles.bg}
                >
                    <Image
                        source={require('../assets/user-icon.png')}
                        style={styles.userIcon}
                    />
                    <Text style={styles.userText}>Generic User</Text>
                </ImageBackground>

                {/*Listado de pantallas*/}
                <View style={styles.optionsContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View>
                <Text>Versión: 0.1.0</Text>
            </View>
        </View>
    );
};

export default AppCustomDrawer;

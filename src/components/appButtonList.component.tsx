import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ButtonIcon } from '../models/ButtonICon.models';
import AppButtonIcon from './appButtonIcon.component';

const DATA = [
    { id: '0', item: new ButtonIcon({ iconName: 'person-outline', label: 'Fe de Vida' }) },
    { id: '1', item: new ButtonIcon({ iconName: 'list-outline', label: 'CPP' }) },
    { id: '3', item: new ButtonIcon({ iconName: 'cash-outline', label: 'Pagar \n servicios' }) },
    { id: '4', item: new ButtonIcon({ iconName: 'qr-code-outline', label: 'Pagar \n con QR' }) },
];

const AppButtonList = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        buttonsContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        newsContainer: {
            flex: 1,
            backgroundColor: 'orange',
        },
        flatListStyle: {
            alignItems: 'center',
        },
    });

    function renderButton(buttonIcon: ButtonIcon) {
        return (
            <AppButtonIcon
                buttonSize={55}
                iconName={buttonIcon.iconName}
                label={buttonIcon.label}
                iconSize={25}
                onPress={() => Alert.alert(buttonIcon.label!)}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <FlatList
                    contentContainerStyle={styles.flatListStyle}
                    data={DATA}
                    renderItem={(button) => renderButton(button.item.item as ButtonIcon)}
                    keyExtractor={item => item.id!}
                    numColumns={4}
                />
            </View>
        </View>
    );
};



export default AppButtonList;

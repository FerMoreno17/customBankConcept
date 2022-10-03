import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ButtonIcon } from '../models/ButtonICon.models';
import { theme } from '../styles/theme.style';
import AppButtonIcon from './appButtonIcon.component';

const DATA = [
    { id: '0', item: new ButtonIcon({ iconName: 'person-outline', label: 'Fe de Vida' }) },
    { id: '1', item: new ButtonIcon({ iconName: 'list-outline', label: 'CPP' }) },
    { id: '2', item: new ButtonIcon({ iconName: 'arrow-forward-circle-outline', label: 'Transferencia' }) },
    { id: '3', item: new ButtonIcon({ iconName: 'cash-outline', label: 'Pagar servicios' }) },
    { id: '4', item: new ButtonIcon({ iconName: 'qr-code-outline', label: 'Pagar con QR' }) },
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
    });

    function renderButton(buttonIcon: ButtonIcon) {
        console.log({ buttonIcon });
        return (
            <AppButtonIcon
                iconName={buttonIcon.iconName}
                label={buttonIcon.label}
                size={30}
                onPress={() => Alert.alert(buttonIcon.label!)}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <FlatList
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={DATA}
                    renderItem={(button) => renderButton(button.item.item as ButtonIcon)}
                    keyExtractor={item => item.id!}
                    numColumns={3}
                />
            </View>
            <View style={styles.newsContainer}>
                <Text>noticias</Text>
            </View>
        </View>
    );
};



export default AppButtonList;

//import liraries
import React from 'react';
import { View, Text, StyleSheet, Modal, Alert } from 'react-native';
import { commonWidth } from '../App';
import AppButton from './appButton.component';

interface IProps {
    title?: string;
    description?: string;
    visible: boolean;
    modalVisible: (value: boolean) => void;
}

const AppModal = ({
    title = 'Ingrese un título',
    description,
    visible,
    modalVisible }: IProps) => {

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalView: {
            width: commonWidth,
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    });

    function handlePress() {
        modalVisible(!visible);
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                modalVisible(!visible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <Text>{description}</Text>
                    <AppButton label="cerrar" onPress={handlePress} />
                </View>
            </View>
        </Modal>
    );
};

export default AppModal;

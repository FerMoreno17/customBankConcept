import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
import { mainColor } from '../App';

interface IProps {
    label?: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const AppInput = ({
    label = 'Ingrese label',
    placeholder,
    onChange }: IProps) => {

    const styles = StyleSheet.create({
        container: {
            marginBottom: 10,
        },
        label: {
            marginBottom: 5,
        },
        input: {
            borderColor: mainColor,
            borderWidth: 2,
            borderRadius: 10,
            padding: Platform.OS === 'ios' ? 15 : 10,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onChangeText={onChange}
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    );
};

export default AppInput;

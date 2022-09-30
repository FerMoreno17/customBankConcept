import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { disabledColor, mainColor } from '../App';

interface IProps {
    label?: string;
    disabled?: boolean;
    onPress: () => void;
}

const AppButton = ({
    label = 'Label',
    disabled,
    onPress }: IProps) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            backgroundColor: disabled ? disabledColor : mainColor,
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
        },
        label: {
            color: 'white',
        },
    });

    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.label}>
                {label}
            </Text>
        </Pressable>
    );
};



export default AppButton;

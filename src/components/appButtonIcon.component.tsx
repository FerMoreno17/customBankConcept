import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { theme } from '../styles/theme.style';

interface IProps {
    iconName?: string;
    size?: number;
    color?: string;
    label?: string;
    onPress: () => void;
}

const AppButtonIcon = ({
    iconName = 'person-outline',
    color = theme.DARK_GREY,
    size = 30,
    label = 'label',
    onPress,
}: IProps) => {

    const styles = StyleSheet.create({
        container: {
            width: 80,
            height: 80,
            margin: 5,
            padding: 5,
            borderColor: theme.DARK_GREY,
            borderWidth: 1.2,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textAlign: {
            color: theme.DARK_GREY,
            textAlign: 'center',
        }
    });

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Ionicon name={iconName} size={size} color={color} />
            <Text style={styles.textAlign} adjustsFontSizeToFit>{label}</Text>
        </Pressable>
    );
};



export default AppButtonIcon;

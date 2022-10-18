import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { theme } from '../styles/theme.style';

interface IProps {
    buttonSize?: number;
    backgroudColor?: string;
    iconName?: string;
    iconSize?: number;
    borderColor?: string;
    label?: string;
    labelColor?: string;
    labelSize?: number;
    onPress: () => void;
}

const AppButtonIcon = ({
    buttonSize = 50,
    backgroudColor = theme.WHITE,
    iconName = 'person-outline',
    borderColor = theme.DARK_GREY,
    iconSize = 30,
    label = 'label',
    labelColor = theme.DARK_GREY,
    labelSize = 12,
    onPress,
}: IProps) => {

    const styles = StyleSheet.create({
        container: {
            width: buttonSize,
            height: buttonSize,
            marginHorizontal: 15,
            padding: 3,
            borderColor: borderColor,
            borderWidth: 1.2,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroudColor,
        },
        label: {
            color: labelColor,
            textAlign: 'center',
            fontSize: labelSize,
            marginTop: 10,
        },

    });

    return (
        <View>
            <Pressable style={styles.container} onPress={onPress}>
                <Ionicon name={iconName} size={iconSize} color={borderColor} />
            </Pressable>
            <Text style={styles.label} >{label}</Text>
        </View>
    );
};



export default AppButtonIcon;

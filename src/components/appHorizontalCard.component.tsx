import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppStyle from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../styles/theme.style';

interface IProps {
    icon?: string;
    description?: string;
    amount?: string;
    currency?: string;
}

const AppHorizontalCard = ({
    icon = 'credit-card',
    description = 'XXXXXX-XXXX',
    amount = '0.00',
    currency = '$' }: IProps) => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 350,
            height: 60,
            padding: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            marginBottom: 10,
            alignItems: 'center',
        },
        icon: {
            flex: 1,
        },
        description: {
            flex: 4,
        },
        amount: {
            flex: 2,
            alignItems: 'flex-end',
        },
    });

    return (
        <View style={[styles.container, AppStyle.shadow]}>
            <View style={styles.icon}>
                <Icon name={icon} size={30} color={theme.DARK_GREY} />

            </View>
            <View style={styles.description}>
                <Text>{description}</Text>
            </View>
            <View style={styles.amount}>
                <Text>{currency + '  ' + amount}</Text>
            </View>
        </View>
    );
};

export default AppHorizontalCard;

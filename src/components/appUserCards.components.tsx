import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppHorizontalCard from './appHorizontalCard.component';

const AppUserCards = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <AppHorizontalCard
                icon="cc-visa"
                currency="$"
                description="0000 2340 XXXX XXXX"
                amount="5682,56"
                key={1}
            />
            <AppHorizontalCard
                icon="cc-mastercard"
                currency="U$D"
                description="4522 3698 XXXX XXXX"
                amount="2000,52"
                key={2}
            />
        </View>
    );
};

export default AppUserCards;

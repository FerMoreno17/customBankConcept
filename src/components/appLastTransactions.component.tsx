import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppHorizontalCard from './appHorizontalCard.component';

const AppLastTransactions = () => {
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
                icon="shopping-cart"
                currency="$"
                description="Set vajilla x 12"
                amount="12.5892,12"
                key={1}
            />
            <AppHorizontalCard
                icon="receipt"
                currency="$"
                description="Edesur ..."
                amount="2300,00"
                key={2}
            />
        </View>
    );
};

export default AppLastTransactions;

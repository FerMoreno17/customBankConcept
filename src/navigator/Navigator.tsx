import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';

//hay que mejorar la navegacion, aprender como manejar la nueva forma de typescript en ReacNavig v6
export type RootStackParamList = {
    LoginScreen: { name: string };
    DrawerNavigator: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    const mostrar = false;

    return (
        <RootStack.Navigator>
            {mostrar && <RootStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />}
            <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        </RootStack.Navigator>
    );
};

export default Navigator;

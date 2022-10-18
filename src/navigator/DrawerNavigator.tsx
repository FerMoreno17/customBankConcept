import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { mainColor } from '../App';
import AppLogo from '../components/appLogo.components';
import AppCustomDrawer from '../components/appCustomDrawer.components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const options: DrawerNavigationOptions = {
    headerStyle: {
        backgroundColor: mainColor,
    },
    headerTitle: () => <AppLogo />,
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    drawerLabelStyle: {
        marginLeft: -25,
    },
    drawerActiveBackgroundColor: mainColor,
    drawerInactiveBackgroundColor: '#fff',
    drawerActiveTintColor: '#fff',
    drawerInactiveTintColor: '#333',
}
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={options}
            drawerContent={props => <AppCustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            {/*si aca va algo como fe de vida, tiene que tener su propio stack*/}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

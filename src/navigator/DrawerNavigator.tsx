import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { mainColor } from '../App';
import AppLogo from '../components/appLogo.components';
import AppCustomDrawer from '../components/appCustomDrawer.components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: mainColor,
                },
                headerTitle: () => <AppLogo />,
                headerTintColor: '#fff',
            }}
            drawerContent={props => <AppCustomDrawer {...props} />}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            {/*si aca va algo como fe de vida, tiene que tener su propio stack*/}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

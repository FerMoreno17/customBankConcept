import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './navigator/Navigator';
import 'react-native-gesture-handler';
import { Dimensions, StatusBar } from 'react-native';

const { width } = Dimensions.get('screen');
export const commonWidth = width * 0.9;
export const mainColor = 'red';
export const disabledColor = '#FF7B7B';

function App() {

  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} backgroundColor={mainColor} />
      <Navigator />
    </NavigationContainer>
  );
}

export default App;

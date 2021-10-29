import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';

import MainRoute from './src/routes';
import { Store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <StatusBar hidden={true} />
      <MainRoute />
    </NavigationContainer>
    </Provider>
  );
}

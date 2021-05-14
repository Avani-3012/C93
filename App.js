import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import EnterItemsScreen from './screens/EnterItemsScreen';

export default function App() {
  return (
    <View>
     
     <AppContainer/>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
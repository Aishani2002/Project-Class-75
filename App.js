import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadScreen from './screens/ReadScreen.js';
import WriteScreen from './screens/WriteScreen.js';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadScreen},
  Write: {screen: WriteScreen},
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbbfee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
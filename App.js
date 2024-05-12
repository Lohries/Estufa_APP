import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './screen/Weather';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Configuration from './screen/Configuration';

import Tips from './screen/Tips';

const Tab = createBottomTabNavigator();

const  App =() => {
  return (
 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Weather' component={Weather}></Tab.Screen>
        <Tab.Screen name='Tips' component={Tips} ></Tab.Screen>

        <Tab.Screen name='Configuration' component={Configuration} styles={styles.tab}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}




export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tab: {
    paddingBottom: 80,
    fontSize: 40,
    fontFamily: "Helvetica"

  }
});
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Kamate from './Kamate';
import Stednja from './Stednja';
import Renta from './Renta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#f4cc1e',
            },
            headerTintColor: '#fff',
          }}
        />

      <Stack.Screen
          name="Kamate"
          component={Kamate}
          options={{
            title: 'Kamate',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
          name="Stednja"
          component={Stednja}
          options={{
            title: 'Stednja',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        }}
      />

      
      <Stack.Screen
          name="Renta"
          component={Renta}
          options={{
            title: 'Renta',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

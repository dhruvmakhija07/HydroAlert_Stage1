import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome.js'
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from './screens/SignUp.js';
import Login from './screens/Login.js';

const Stack = createStackNavigator();

const StackNav = () => {
  return( 
  <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, gestureEnabled: false }}> 
  <Stack.Screen name="LoginScreen" component={SignUp} /> 
  <Stack.Screen name="SignUpScreen" component={Login} /> 
  <Stack.Screen name="Welcome" component={Welcome} /> 
  </Stack.Navigator>
  )
}

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <StackNav/>
      </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

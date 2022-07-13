import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen5 from './screen5';
import Screen8 from './screen8';
import Screen4 from './screen4';
import Screen3 from './screen3';
import Settings from './settings';
import Screen1 from './screen1';
import { Colors } from '../colours/colors';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor:'#ffeccc' } }}>
      <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Screen1"
          component={Screen1}
         options={{title:'Settings'}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen8"
          component={Screen8}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;

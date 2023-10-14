import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from "react";

import PreLoad from "./screens/PreLoad";
import Home from "./screens/Home";
import Tab from "./assets/BottomTab";
import User from './screens/User';
import Setting from './screens/Setting';
import Notification from './screens/Notification';
import NewJob from './screens/NewJob';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PreLoad" component={PreLoad} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="NewJob" component={NewJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// src/navigation/AppNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PreLoaderScreen from "../screens/PreLoaderScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import HomePageScreen from "../screens/HomePageScreen";
import NewPostScreen from "../screens/NewPostScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PreLoader"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PreLoader" component={PreLoaderScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="NewPost" component={NewPostScreen} />
    </Stack.Navigator>
  );
}
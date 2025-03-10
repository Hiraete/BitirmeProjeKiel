import React from "react";
import "'..\\global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen"; // Login ekranını dahil et

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider mode="light"><NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer></GluestackUIProvider>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Button , } from "react-native"
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator();




function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function Header() {
  return (
   
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#633689' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="TabStack" component={HomeScreen} options={{ title: 'Tab Stack' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
  }  

function createMaterialTopTabNavigator() {
  throw new Error("Function not implemented.");
}

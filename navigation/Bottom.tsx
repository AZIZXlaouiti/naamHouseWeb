import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default function BottomNav(){
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Feed"
            >
            {/* <Tab.Screen
              name="HomeStack"
            />
            <Tab.Screen
              name="Home"
            />
            <Tab.Screen
              name="SettingsStack"
            /> */}
          </Tab.Navigator>
        </NavigationContainer>
      );
}
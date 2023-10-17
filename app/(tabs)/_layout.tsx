import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

import Icon from '../../components/Icon';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // color of icons active 
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,

      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon family="FontAwesome" name="home" size={26} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="rooms"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon family="FontAwesome" name="location-arrow" size={24} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon family={"AntDesign"} name="staro" size={24} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="(four)"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon family={"AntDesign"} name="message1" size={22} color={color} />,
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
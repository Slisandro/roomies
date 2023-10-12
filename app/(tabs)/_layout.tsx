import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  family: "AntDesign" | "FontAwesome"
  name: React.ComponentProps<typeof FontAwesome | typeof AntDesign>['name'];
  color: string;
  size?: number
}) {
  // @ts-expect-error
  return props.family === "FontAwesome" ? <FontAwesome size={props.size || 28} style={{ marginTop: 2 }} {...props} /> :
    // @ts-expect-error
    <AntDesign size={props.size || 28} style={{ marginTop: 2 }} {...props} />;
}

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
          tabBarIcon: ({ color }) => <TabBarIcon family="FontAwesome" name="home" size={26} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon family="FontAwesome" name="location-arrow" size={24} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon family={"AntDesign"} name="staro" size={24} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="(four)"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon family={"AntDesign"} name="message1" size={22} color={color} />,
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Provider } from "react-redux";
import CounterStore from "@/context/Slice";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Provider store={CounterStore}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="like"
          options={{
            title: "Like",
            tabBarActiveTintColor: "red",
            tabBarIcon: ({ _, focused }) => (
              <TabBarIcon
                name={focused ? "heart" : "heart-outline"}
                color={focused ? "red" : "grey"}
              />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
}

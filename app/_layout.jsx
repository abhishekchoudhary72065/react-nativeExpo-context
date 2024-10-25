import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { Provider } from "react-redux";
import Store from "@/context/Slice";
// import Ionicons from "@expo/vector-icons/Ionicons";

const RootLayout = () => {
  return (
    <Provider store={Store}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_bottom",
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
  // return (
  //   <Provider store={Store}>
  //     <Tabs
  //       screenOptions={{
  //         headerShown: false,
  //         tabBarVisibilityAnimationConfig: { bouncing: true },
  //       }}
  //     >
  //       <Tabs.Screen
  //         name="index"
  //         options={{
  //           tabBarLabel: "Home",
  //           tabBarIcon: ({ color, focused }) => (
  //             <Ionicons
  //               color={color}
  //               size={20}
  //               name={focused ? "home-sharp" : "home-outline"}
  //             />
  //           ),
  //         }}
  //       />
  //       <Tabs.Screen
  //         name="test"
  //         options={{
  //           tabBarLabel: "Test",
  //           tabBarIcon: ({ color, focused }) => (
  //             <Ionicons
  //               color={color}
  //               size={20}
  //               name={focused ? "at-sharp" : "at-outline"}
  //             />
  //           ),
  //         }}
  //       />
  //     </Tabs>
  //   </Provider>
  // );
};

export default RootLayout;

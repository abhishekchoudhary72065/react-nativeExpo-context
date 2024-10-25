import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const test = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "aqua" }}>
      <SafeAreaView
        style={{ paddingHorizontal: 30, marginVertical: 50, gap: 10 }}
      >
        <Pressable onPress={() => router.back()}>
          <AntDesign name="leftcircleo" size={40} color="black" />
        </Pressable>
        <Text style={{ fontSize: 50, color: "black", fontWeight: "bold" }}>
          Test Page
        </Text>
        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  );
};

export default test;

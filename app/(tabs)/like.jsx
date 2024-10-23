import React from "react";
import { View, Text } from "react-native";

const like = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black", fontSize: 50, fontWeight: "700" }}>
        Like Page
      </Text>
    </View>
  );
};

export default like;

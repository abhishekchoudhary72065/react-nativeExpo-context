import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../context/Slice";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "hotpink" }}>
      <SafeAreaView
        style={{
          marginVertical: 50,
          paddingHorizontal: 30,
          flex: 1,
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          This is the value of counter : {counter}
        </Text>
        <View style={{ gap: 15 }}>
          <TouchableOpacity
            onPress={() => dispatch(increment())}
            style={styles.buttonStyles}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonTextStyles}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(decrement())}
            style={styles.buttonStyles}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonTextStyles}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/test")}
            style={styles.buttonStyles}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonTextStyles}>Go to Test Page</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyles: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Index;

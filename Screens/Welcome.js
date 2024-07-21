import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#17153B", flex: 1, padding: 20 }}>
      <Text style={{ color: "white", top: 60, fontSize: 70 }}>Welcome</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{
          width: 300,
          height: 70,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#536493",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          top: 600,
          flexDirection: "row",
        }}
      >
        <Text style={{ flex: 1, fontSize: 20, color: "white" }}>
          Get Started
        </Text>
        <MaterialCommunityIcons name="arrow-right" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

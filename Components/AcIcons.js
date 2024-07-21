import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AcIcons = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: "#536493",
          borderRadius: 50,
        }}
      >
        <MaterialCommunityIcons
          name="coolant-temperature"
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <Text style={{ alignSelf: "center", color: "white" }}>AC 1</Text>
    </View>
  );
};

export default AcIcons;

const styles = StyleSheet.create({});

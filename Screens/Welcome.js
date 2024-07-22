import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#070945", flex: 1, padding: 20 }}>
      <Text style={{ color: "#e9cdb3", fontSize: 60, alignSelf: "center" }}>
        Welcome
      </Text>
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 200, height: 200, alignSelf: "center" }}
          source={require("../assets/icon2.png")}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{
          width: "100%",
          height: 70,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#e9cdb3",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",

          flexDirection: "row",
          position: "relative",
        }}
      >
        <Text style={{ flex: 1, fontSize: 20, color: "#070945" }}>
          Get Started
        </Text>
        <MaterialCommunityIcons name="arrow-right" size={30} color="#070945" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

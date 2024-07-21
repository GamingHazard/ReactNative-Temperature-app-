import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import LivingRooms from "../Components/LivingRooms";
import BedRooms from "../Components/BedRoom";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AcIcons from "../Components/AcIcons";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 10, top: 30 }}>
      <View
        style={{
          height: 380,
          width: "100%",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          padding: 16,
          backgroundColor: "#17153B",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 70,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
          }}
        >
          {/* Lights Icon (Navigates to the Lights page) */}
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Lights")}
              style={{
                padding: 10,
                backgroundColor: "#536493",
                borderRadius: 50,
              }}
            >
              <MaterialCommunityIcons
                name="outdoor-lamp"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <Text style={{ alignSelf: "center", color: "white" }}>Lights</Text>
          </View>

          <Text style={{ flex: 1 }}></Text>

          {/* Buttons for toggling light and dark theme */}
          <View
            style={{
              padding: 10,
              backgroundColor: "#536493",
              borderRadius: 50,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* Light Theme */}
            <Feather
              style={{ marginHorizontal: 4 }}
              name="sun"
              size={24}
              color="white"
            />
            {/* Dark Theme */}
            <Feather
              style={{ marginHorizontal: 4 }}
              name="moon"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 160,
            alignItems: "center",
            padding: 10,
          }}
        >
          {/* User Name saved on Registration */}
          <Text style={{ fontSize: 25, color: "#7D8ABC" }}>HELLO , JOEL</Text>

          <Text style={{ fontSize: 40, color: "white", marginVertical: 15 }}>
            CONNECTED {"\n"} {"  "}DEVICES
          </Text>
        </View>

        <View
          style={{
            height: 100,
            width: "100%",
            flexDirection: "row",
            padding: 10,
          }}
        >
          {/* Icons of Connected Devices */}
          <ScrollView horizontal>
            <AcIcons />
            <AcIcons />
            <AcIcons />
            <AcIcons />
            <AcIcons />
            <AcIcons />
            <AcIcons />
          </ScrollView>
        </View>

        <View
          style={{
            top: 5,
            alignSelf: "center",
            backgroundColor: "whitesmoke",
            padding: 5,
            borderRadius: 50,
          }}
        >
          {/* Icon for adding tabs of rooms if necessary */}
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={50} color="#17153B" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 70,
          flexDirection: "row",
          padding: 10,

          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 28, color: "#17153B" }}>
          Your Rooms
        </Text>
      </View>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <LivingRooms navigating={() => navigation.navigate("Living Room")} />
        <BedRooms navigating={() => navigation.navigate("Bed Room")} />
        <View style={{ height: 70, width: "100%" }} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

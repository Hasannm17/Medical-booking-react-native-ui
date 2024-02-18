import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }} initialRouteName="index">
        <Tabs.Screen
          name="index"
          options={{
            title: "Home Page",
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
            tabBarActiveTintColor: "#1A998E",
            tabBarInactiveTintColor: "gray",
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="bookings"
          options={{
            title: "Bookings Page",
            tabBarIcon: ({ color }) => (
              <AntDesign name="calendar" size={24} color={color} />
            ),
            tabBarActiveTintColor: "#1A998E",
            tabBarInactiveTintColor: "gray",
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile Page",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            tabBarActiveBackgroundColor: "#1A998E",
            tabBarShowLabel: false,
          }}
        />
      </Tabs>

    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});

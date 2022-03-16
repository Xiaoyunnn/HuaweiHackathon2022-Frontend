import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import MyTrips from "../screens/myTrips";
import Notifications from "../screens/notifications";
import Explore from "../screens/explore";
import Profile from "../screens/profile";
import HeaderRightAdd from "../components/headerRightAdd";
import ProfileSetup from "../screens/profileSetup";
import Schedule from "../screens/schedule";
import Preferences from "../screens/preferences";
import GeneratedItinerary from "../screens/generatedItinerary";
import { StyleSheet } from "react-native";
import Loading from "../screens/loading";
import HitchGroup from "../screens/hitchGroup";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  const [isGuide, setIsGuide] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="My Trips"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#FFA62B",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#FFA62B",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 55,
          paddingBottom: 6,
          paddingTop: 6,
        },
      })}
    >
      <Tab.Screen
        name={isGuide ? "Schedule" : "My Trips"}
        component={isGuide ? Schedule : HitchGroup}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            isGuide ? (
              <FontAwesome5 name="calendar-alt" size={24} color={color} />
            ) : (
              <FontAwesome name="plane" size={24} color={color} />
            ),
          headerRight: () => (
            <Ionicons
              name="ios-add-circle-outline"
              size={32}
              color="#fff"
              style={styles.addBtn}
              onPress={() => navigation.navigate("Create Itinerary")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="map-o" size={20} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="ios-add-circle-outline"
              size={32}
              color="#fff"
              style={styles.addBtn}
              onPress={() => navigation.navigate("Create Post")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          // tabBarBadge: "",
          // tabBarBadgeStyle: {
          //   backgroundColor: "#ffa62b",
          // },
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "ios-notifications" : "ios-notifications-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    padding: 7,
    zIndex: 2,
  },
});

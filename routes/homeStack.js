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

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  // const rotateAnimation = new Animated.Value(0);

  // const handleRotateAnimation = () => {
  //   setIsAdding(!isAdding);
  //   Animated.timing(rotateAnimation, {
  //     toValue: 1,
  //     duration: 300,
  //     useNativeDriver: true, // <-- Add this
  //   }).start(() => {
  //     rotateAnimation.setValue(0);
  //   });
  // };

  // const interpolateRotating = rotateAnimation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "45deg"],
  // });

  // const animatedStyle = {
  //   transform: [
  //     {
  //       rotate: interpolateRotating,
  //     },
  //   ],
  // };

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
        name="My Trips"
        component={Schedule}
        // options={{
        // tabBarIcon: ({ focused, color, size }) => (
        //   <FontAwesome name="plane" size={24} color={color} />
        // ),
        //   headerRight: () => (
        //     <HeaderRightAdd/>
        //   ),
        // }}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="plane" size={24} color={color} />
          ),
          headerRight: () => (
            <HeaderRightAdd
              handlePressItinerary={() =>
                navigation.navigate("PopularAttractions")
              }
              handlePressPost={() =>
                navigation.navigate("CreatePost")
              }
            />
          ),
        })}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="map-o" size={20} color={color} />
          ),
        }}
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

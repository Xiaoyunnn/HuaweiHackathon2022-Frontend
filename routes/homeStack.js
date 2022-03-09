import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-web";
import { TouchableOpacity, Animated, View } from "react-native";
import MyTrips from "../screens/myTrips";
import Notifications from "../screens/notifications";
import Me from "../screens/me";
import Explore from "../screens/explore";
import CreateItineraryBtn from "../components/createItineraryBtn";
import CreatePostBtn from "../components/createPostBtn";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  const [isAdding, setIsAdding] = useState(false);
  const rotateAnimation = new Animated.Value(0);
  const fadeAnimation = new Animated.Value(0);

  const handleRotateAnimation = () => {
    setIsAdding(!isAdding);
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 300,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <Tab.Navigator
      initialRouteName="Explore"
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
        component={MyTrips}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="plane" size={24} color={color} />
          ),
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => handleRotateAnimation()}>
              <View>
                <Animated.View style={animatedStyle}>
                  <Ionicons
                    name="ios-add-circle-outline"
                    size={30}
                    color="#fff"
                    style={isAdding ? styles.crossBtn : styles.addBtn}
                  />
                </Animated.View>
                {isAdding && <CreateItineraryBtn />}
                {isAdding && <CreatePostBtn/>}
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
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
        name="Me"
        component={Me}
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
  tabs: {
    paddingVertical: 20,
  },
  addBtn: {
    padding: 10,
  },
  crossBtn: {
    padding: 10,
    transform: "rotate(45deg)",
  },
});

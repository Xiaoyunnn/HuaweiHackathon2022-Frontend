import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native-web";
import MyTrips from "../screens/myTrips";
import Notifications from "../screens/notifications";
import Me from "../screens/me";
import Explore from "../screens/explore";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Trips"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#FFA62B",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold"
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
            <Ionicons name="md-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="user-friends" size={20} color={color} />
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
});

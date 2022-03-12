import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup";
import Login from "../screens/login";
import HomeStack from "./homeStack";
import ProfileSetup from "../screens/profileSetup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Setup" component={ProfileSetup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;

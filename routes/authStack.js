import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup";
import Login from "../screens/login";
import HomeStack from "./homeStack";
import ProfileSetup from "../screens/profileSetup";
import PopularAttractions from "../screens/popularAttractions";
import CreatePost from "../screens/createPost";
import Preferences from "../screens/preferences";
import GeneratedItinerary from "../screens/generatedItinerary";
import RoutesHeaderBar from "../components/generatedItinerary/routesHeaderBar";
import FindGuide from "../screens/findGuide";
import GuideOverview from "../screens/guideOverview";
import AttractionOverview from "../screens/attractionOverview";
import { HeaderBackButton } from "@react-navigation/elements";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FFA62B",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setup"
        component={ProfileSetup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create Itinerary" component={PopularAttractions} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen
        name="Generated Itinerary"
        component={GeneratedItinerary}
        // options={{ headerTitle: () => <RoutesHeaderBar /> }}
      />
      <Stack.Screen name="Find Tour Guide" component={FindGuide} />
      <Stack.Screen
        name="Guide Overview"
        component={GuideOverview}
      />
      <Stack.Screen name="Attraction Overview" component={AttractionOverview} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default AuthStack;

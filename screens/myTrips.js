import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import ItineraryCard from "../components/itinerary/itineraryCard";
import ItineraryCardSmall from "../components/itinerary/itineraryCardSmall";
import CreatePostBtn from "../components/createPostBtn";
import CreateItineraryBtn from "../components/createItineraryBtn";

export default function MyTrips({ route, navigation }) {
  const handleView = (title) => () => {
    navigation.navigate("View Itinerary", {
      title: title
    })
  }

  const handlePressAttraction = (name) => () => {
    navigation.navigate("Attraction Overview", {
      attraction: name
    })
  }

  return (
    <ScrollView style={globalStyles.tripsContainer}>
      <ItineraryCard handleView={handleView}/>
      <Text style={globalStyles.font20Orange}>Discover New Adventures</Text>
      <View style={globalStyles.adventuresContainer}>
        <ItineraryCardSmall handlePress={handlePressAttraction}/>
        <ItineraryCardSmall handlePress={handlePressAttraction}/>
        <ItineraryCardSmall handlePress={handlePressAttraction}/>
      </View>
    </ScrollView>
  );
}


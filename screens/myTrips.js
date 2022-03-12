import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import ItineraryCard from "../components/itinerary/itineraryCard";
import ItineraryCardSmall from "../components/itinerary/itineraryCardSmall";
import CreatePostBtn from "../components/createPostBtn";
import CreateItineraryBtn from "../components/createItineraryBtn";

export default function MyTrips({ route }) {
  console.log(route);
  return (
    <ScrollView style={globalStyles.tripsContainer}>
      <ItineraryCard />
      <Text style={globalStyles.font20Orange}>Discover New Adventures</Text>
      <View style={globalStyles.adventuresContainer}>
        <ItineraryCardSmall />
        <ItineraryCardSmall />
        <ItineraryCardSmall />
      </View>
    </ScrollView>
  );
}


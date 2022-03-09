import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from "../styles/global";
import ItineraryCard from '../components/itinerary/itineraryCard';
import ItineraryCardSmall from '../components/itinerary/itineraryCardSmall';
import CreatePostBtn from '../components/createPostBtn';
import CreateItineraryBtn from '../components/createItineraryBtn';
import { ScrollView } from 'react-native-web';

export default function MyTrips({route}) {
  console.log(route);
  return (
    <ScrollView style={globalStyles.tripsContainer}>
      <ItineraryCard/>
      <Text style={globalStyles.font20Orange}>Discover New Adventures</Text>
      <View style={styles.adventuresContainer}>
        <ItineraryCardSmall/>
        <ItineraryCardSmall/>
        <ItineraryCardSmall/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  adventuresContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
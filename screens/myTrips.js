import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from "../styles/global";
import ItineraryCard from '../components/itinerary/itineraryCard';

export default function MyTrips() {
  return (
    <View style={globalStyles.tripsContainer}>
      <ItineraryCard/>
      <Text style={globalStyles.font20Orange}>Discover New Adventures</Text>
    </View>
  )
}
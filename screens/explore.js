import React from 'react';
import { ScrollView } from 'react-native-web';
import ExploreCard from '../components/explore/exploreCard';
import { globalStyles } from '../styles/global';

export default function Explore() {
  return (
    <ScrollView style={globalStyles.tripsContainer}>
      <ExploreCard/>
      <ExploreCard/>
      <ExploreCard/>
      
    </ScrollView>
  )
}

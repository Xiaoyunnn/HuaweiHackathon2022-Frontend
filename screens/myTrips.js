import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ReactChild, useEffect } from "react";
import { globalStyles } from "../styles/global";
import ItineraryCard from "../components/itinerary/itineraryCard";
import ItineraryCardSmall from "../components/itinerary/itineraryCardSmall";
import CreatePostBtn from "../components/createPostBtn";
import CreateItineraryBtn from "../components/createItineraryBtn";

import { connect } from "react-redux";
import { getItinerary } from "../redux/actions/itinerary.js"
import { getAllAttractions } from "../redux/actions/attractions";

function MyTrips({ 
  route, 
  currItineraryId, 
  getItinerary, 
  itinerary, 
  getAllAttractions,
  attractions
}) {
  useEffect(() => {
    if (currItineraryId != null) {
      getItinerary(user.currentItineraryId);
    }
  }, [getItinerary, currItineraryId]);

  useEffect(() => {
    getAllAttractions();
  }, [getAllAttractions])

  var attractionList = attractions.map(att => {
    return <ItineraryCardSmall attraction={att} />
  });

  const condRender = () => {
    if (itinerary) {
      return <ItineraryCard />
    }
  }
  
  return (
    <ScrollView style={globalStyles.tripsContainer}>
      {condRender()}
      <Text style={globalStyles.font20Orange}>Discover New Adventures</Text>
      <View style={globalStyles.adventuresContainer}>
        {attractionList}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = state => {
  return {
    currItineraryId: state.user.currentItinerary,
    userId: state.user.userId,
    itinerary: state.itinerary.current,
    attractions: state.attractions.all
  }
}

export default connect(mapStateToProps, { getItinerary, getAllAttractions })(MyTrips);

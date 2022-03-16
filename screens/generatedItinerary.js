import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { globalStyles } from "../styles/global";
import RoutesHeaderBar from "../components/generatedItinerary/routesHeaderBar";
import DestinationList from "../components/generatedItinerary/destinationList";

import { connect } from "react-redux";
import { getGeneratedAttractions } from "../redux/actions/attractions";

function GeneratedItinerary({ route, navigation, getGeneratedAttractions, itineraries, attractions }) {
  const sampleDestination = [
    "Trick Eye Museum",
    "Universal Studios",
    "Night Safari",
  ];
  const sampleDestination2 = [
    "Trick Eye Museum",
    "Universal Studios",
    "Night Safari",
    "RWS",
  ];
  const [active, setActive] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState(sampleDestination);

  useEffect(() => {
    getGeneratedAttractions(itineraries.days[0].attractions);
  }, [getGeneratedAttractions])

  const handleActive = (index) => {
    setActive(index);
  };

  const handleNavigateBooking = (attraction) => {
    navigation.navigate("Find Tour Guide", {
      attraction: attraction,
    });
  };

  const handleNavigateAttraction = (attraction) => {
    navigation.navigate("Attraction Overview", {
      attraction: attraction
    })
  }

  const handleNavigateHitch = (attraction) => {
    navigation.navigate("Hitch a Group", {
      attraction: attraction
    })
  }

  const handleConfirm = () => {
    console.log("confirm itinerary");
    navigation.navigate("My Trips")
  };

  // console.log(route.params)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <RoutesHeaderBar active={active} setActive={handleActive} />
      ),
    });
  }, [navigation, active]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFAFA" }}>
      {active == 1 ? (
        <DestinationList
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
          handleNavigateHitch={handleNavigateHitch}
          isEditing={isEditing}
        />
      ) : active == 2 ? (
        <DestinationList
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
          handleNavigateHitch={handleNavigateHitch}
          isEditing={isEditing}
        />
      ) : (
        <DestinationList
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
          handleNavigateHitch={handleNavigateHitch}
          isEditing={isEditing}
        />
      )}
      <View style={[globalStyles.twoBtnContainer, { marginHorizontal: 10 }]}>
        <TouchableOpacity
          style={globalStyles.btnContainerAltSmall}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={globalStyles.btnTextAlt}>{isEditing ? "Save" : "Edit"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.btnContainerSmall}
          onPress={handleConfirm}
        >
          <Text style={globalStyles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    attractions: state.attractions.generated
  }
};

export default connect(mapStateToProps, { getGeneratedAttractions })(GeneratedItinerary);

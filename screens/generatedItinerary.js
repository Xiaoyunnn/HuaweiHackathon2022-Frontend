import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { globalStyles } from "../styles/global";
import RoutesHeaderBar from "../components/generatedItinerary/routesHeaderBar";
import DestinationList from "../components/generatedItinerary/destinationList";

import { connect } from "react-redux";
import { getGeneratedAttractions } from "../redux/actions/attractions";
import Loading from "./loading";

function GeneratedItinerary({ route, navigation, getGeneratedAttractions, attractions, generated, loading }) {
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

  console.log("itineraries", attractions);
  console.log("generated", generated);

  useEffect(() => {
    if (generated) {  
      for (i = 0; i < generated.length; i++) {
        console.log(generated[i]);
        getGeneratedAttractions(generated[i].attractions);
      }
    }
  }, [getGeneratedAttractions, generated])

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

  if (loading) {
    return <Loading />
  } else {
    return (
    <View style={{ flex: 1, backgroundColor: "#FFFAFA" }}>
      {active == 1 ? (
        <DestinationList
          tripTitle={route.params.tripTitle}
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
          handleNavigateHitch={handleNavigateHitch}
          isEditing={isEditing}
        />
      ) : active == 2 ? (
        <DestinationList
          tripTitle={route.params.tripTitle}
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
          handleNavigateHitch={handleNavigateHitch}
          isEditing={isEditing}
        />
      ) : (
        <DestinationList
          tripTitle={route.params.tripTitle}
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
}

const mapStateToProps = state => {
  return {
    attractions: state.attractions.generated,
    generated: state.itinerary.generated,
    loading: state.itinerary.loading
  }
};

export default connect(mapStateToProps, { getGeneratedAttractions })(GeneratedItinerary);

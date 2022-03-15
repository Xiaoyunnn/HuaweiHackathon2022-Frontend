import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { globalStyles } from "../styles/global";
import RoutesHeaderBar from "../components/generatedItinerary/routesHeaderBar";
import DestinationList from "../components/generatedItinerary/destinationList";

export default function GeneratedItinerary({ route, navigation }) {
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

  const handleConfirm = () => {
    console.log("confirm itinerary");
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
          isEditing={isEditing}
        />
      ) : active == 2 ? (
        <DestinationList
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
          isEditing={isEditing}
        />
      ) : (
        <DestinationList
          destinations={selectedDestinations}
          setSelectedDestinations={setSelectedDestinations}
          handleNavigateBooking={handleNavigateBooking}
          handleNavigateAttraction={handleNavigateAttraction}
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

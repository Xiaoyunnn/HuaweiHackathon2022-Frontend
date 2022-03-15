import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { globalStyles } from "../styles/global";
import DestinationList from "../components/generatedItinerary/destinationList";
import BottomBtn from "../components/bottomBtn";

export default function ViewItinerary({ route, navigation }) {
  const sampleDestination = [
    "Trick Eye Museum",
    "Universal Studios",
    "Night Safari",
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDestinations, setSelectedDestinations] =
    useState(sampleDestination);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation]);

  const handleNavigateBooking = (attraction) => {
    navigation.navigate("Find Tour Guide", {
      attraction: attraction,
    });
  };

  const handleNavigateAttraction = (attraction) => {
    navigation.navigate("Attraction Overview", {
      attraction: attraction,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // connect with backend
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFAFA" }}>
      <DestinationList
        destinations={selectedDestinations}
        setSelectedDestinations={setSelectedDestinations}
        handleNavigateBooking={handleNavigateBooking}
        handleNavigateAttraction={handleNavigateAttraction}
        isEditing={isEditing}
      />
      <TouchableOpacity style={{ marginHorizontal: 10 }}>
        {isEditing ? (
          <BottomBtn action={"Save"} handlePress={handleSave} />
        ) : (
          <BottomBtn action={"Edit"} handlePress={() => setIsEditing(true)} />
        )}
      </TouchableOpacity>

      {/* <View style={[globalStyles.twoBtnContainer, { marginHorizontal: 10 }]}>
        <TouchableOpacity
          style={globalStyles.btnContainerAltSmall}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={globalStyles.btnTextAlt}>
            {isEditing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.btnContainerSmall}
          onPress={handleConfirm}
        >
          <Text style={globalStyles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

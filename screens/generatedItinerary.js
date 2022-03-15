import { View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { globalStyles } from "../styles/global";
import RoutesHeaderBar from "../components/generatedItinerary/routesHeaderBar";
import DestinationList from "../components/generatedItinerary/destinationList";

export default function GeneratedItinerary({ route, navigation }) {
  const [active, setActive] = useState(1);
  const sampleDestination = ["Trick Eye Museum", "Universal Studios", "Night Safari"];
  const sampleDestination2 = ["Trick Eye Museum", "Universal Studios", "Night Safari", "RWS"];

  const handleActive = (index) => {
    setActive(index);
  };

  const handleNavigateBooking = (attraction) => {
    navigation.navigate("Find Tour Guide", {
      attraction: attraction
    });
  }

  // console.log(route.params)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <RoutesHeaderBar active={active} setActive={handleActive} />
      ),
    });
  }, [navigation, active]);

  return (
    <View style={{flex: 1, backgroundColor: "#FFFAFA"}}>
      {active == 1 ? (
        <DestinationList destinations={sampleDestination} handleNavigateBooking={handleNavigateBooking}/>
      ) : active == 2 ? (
        <DestinationList destinations={sampleDestination2} handleNavigateBooking={handleNavigateBooking}/>
      ) : (
        <DestinationList destinations={sampleDestination} handleNavigateBooking={handleNavigateBooking}/>
      )}
    </View>
  );
}

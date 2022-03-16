import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import DayTabBar from "./dayTabBar";
import DestinationCard from "./destinationCard";

import { connect } from "react-redux";
import RoutesHeaderBar from "./routesHeaderBar";

function DestinationList({
  tripTitle,
  attractions,
  setSelectedDestinations,
  handleNavigateBooking,
  handleNavigateAttraction,
  handleNavigateHitch,
  isEditing,
}) {
  const numDays = 1;
  const [daySelected, setDaySelected] = useState(0);

  console.log("destination list", attractions);

  const handleSelectDay = (day) => {
    setDaySelected(day);
    console.log(daySelected);
  };

  const handleRemoveDestination = (key) => () => {
    const arr = attractions.filter((item) => item !== key);
    setSelectedDestinations(arr);
  };

  const renderSelectedDay = () => {
    for (let i = 0; i < numDays; i++) {
      if (i == daySelected && attractions.length != 0) {
        // map the destination card for different days
        return (
          <View>
            {attractions[0].map((destination, i) => {
              console.log("destination map", destination);
              return (
                <DestinationCard
                  tripTitle={tripTitle}
                  key={i}
                  dest={destination}
                  handleNavigateBooking={handleNavigateBooking}
                  handleNavigateAttraction={handleNavigateAttraction}
                  handleNavigateHitch={handleNavigateHitch}
                  isEditing={isEditing}
                  handleRemove={handleRemoveDestination(destination)}
                />
              );
            })}
          </View>
        );
      }
    }
  };

  const imageSrc =
    attractions.length != 0 && attractions[0][0].imageUrls != null
      ? { uri: attractions[0][0].imageUrls }
      : require("../../night-safari.jpeg");

  return (
    <ScrollView>
      <Image source={imageSrc} style={styles.coverImg} />
      <Text style={styles.tripTitle}>{tripTitle}</Text>
      {/* <Text style={styles.tripSubtitle}>3 Days | 8 attractions</Text> */}
      <DayTabBar
        numDays={numDays}
        daySelected={daySelected}
        setDaySelected={handleSelectDay}
      />
      {renderSelectedDay()}
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    attractions: state.attractions.generated,
  };
};

export default connect(mapStateToProps)(DestinationList);

const styles = StyleSheet.create({
  coverImg: {
    height: 240,
    resizeMode: "cover",
  },
  tripTitle: {
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    top: 180,
    paddingHorizontal: 15,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  tripSubtitle: {
    position: "absolute",
    color: "#fff",
    top: 200,
    paddingHorizontal: 15,
    paddingVertical: 7,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

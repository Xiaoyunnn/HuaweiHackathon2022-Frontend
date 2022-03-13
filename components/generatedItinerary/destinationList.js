import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import DayTabBar from "./dayTabBar";
import { globalStyles } from "../../styles/global";
import DestinationCard from "./destinationCard";

export default function DestinationList() {
  const numDays = 3;
  const [daySelected, setDaySelected] = useState(0);

  const handleSelectDay = (day) => {
    setDaySelected(day);
    console.log(daySelected);
  };

  const renderSelectedDay = () => {
    for (let i = 0; i < numDays; i++) {
      if (i == daySelected) {
        return <View>
          <DestinationCard/>
        </View>
      }
    }
  }

  return (
    <ScrollView>
      <Image
        source={require("../../night-safari.jpeg")}
        style={styles.coverImg}
      />
      <Text style={styles.tripTitle}>Family Trip</Text>
      <Text style={styles.tripSubtitle}>3 Days | 8 attractions</Text>
        <DayTabBar
          numDays={numDays}
          daySelected={daySelected}
          setDaySelected={handleSelectDay}
        />
        {renderSelectedDay()}
        
      
    </ScrollView>
  );
}

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

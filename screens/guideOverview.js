import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import GuideItem from "../components/guide/guideItem";
import { globalStyles } from "../styles/global";
import GuideItemInfo from "../components/guide/guideItemInfo";
import Timeslot from "../components/guide/timeslot";

export default function GuideOverview({ route, navigation }) {
  // pass date from create itinerary page
  const date = "3 Mar 2022";
  const [selectTimeslot, setSelectTimeslot] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.guide.name,
    });
  }, [navigation]);

  const handleToggleTimeslot = (key) => () => {
    if (!selectTimeslot.includes(key)) {
      const arr = [...selectTimeslot, key];
      setSelectTimeslot(arr);
    } else {
      const arr = selectTimeslot.filter(
      (item) => item !== key
    );
    setSelectTimeslot(arr);
    }
  };


  const timeslots = [
    "1100 - 1200",
    "1200 - 1300",
    "1300 - 1400",
    "1400 - 1500",
    "1500 - 1600",
    "1600 - 1700",
    "1700 - 1800",
    "1800 - 1900",
  ];

  return (
    <ScrollView contentContainerStyle={globalStyles.tripsContainer}>
      <GuideItemInfo guide={route.params.guide} />
      <Text style={globalStyles.greyHeader}>Availability on {date}</Text>
      {timeslots.map((timeslot, i) => (
        <Timeslot
          timeslot={timeslot}
          key={i}
          selected={selectTimeslot.includes(timeslot)}
          handleToggleTimeslot={handleToggleTimeslot(timeslot)}
        />
      ))}
    </ScrollView>
  );
}

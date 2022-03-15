import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { globalStyles } from "../styles/global";
import GuideItemInfo from "../components/guide/guideItemInfo";
import Timeslot from "../components/guide/timeslot";
import BottomBtn from "../components/bottomBtn";
import ReviewSummary from "../components/review/reviewSummary";

export default function GuideOverview({ route, navigation }) {
  // pass date from create itinerary page
  // console.log(route.params.guide)
  const date = "3 Mar 2022";
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
  const sampleReviews = [
    {
      username: "alice",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 5,
    },
    {
      username: "betty",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 4,
    },
    {
      username: "tricia",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 3,
    },
    {
      username: "elf",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 2,
    },
    {
      username: "dave",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 1,
    },
  ];
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
      const arr = selectTimeslot.filter((item) => item !== key);
      setSelectTimeslot(arr);
    }
  };

  return (
    <View style={[globalStyles.tripsContainer, { paddingHorizontal: 0 }]}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
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
        <ReviewSummary
          sampleReviews={sampleReviews}
          rating={route.params.guide.rating}
        />
      </ScrollView>
      <TouchableOpacity style={{ marginHorizontal: 10 }}>
        <BottomBtn
          action={"Book"}
          handlePress={() => navigation.navigate("Generated Itinerary")}
        />
      </TouchableOpacity>
    </View>
  );
}

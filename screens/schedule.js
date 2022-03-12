import { FlatList } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import ExploreCard from "../components/explore/exploreCard";
import ScheduleCard from "../components/schedule/scheduleCard";

export default function Schedule() {
  const sample = [
    { id: 1, title: "a" },
    { id: 2, title: "b" },
    { id: 3, title: "c" },
  ];
  const renderItem = ({ item }) => <ScheduleCard />;
  return (
    <FlatList
      style={globalStyles.tripsContainer}
      data={sample}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

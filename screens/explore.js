import React from "react";
import { ScrollView, FlatList } from "react-native";
import ExploreCard from "../components/explore/exploreCard";
import { globalStyles } from "../styles/global";

export default function Explore() {
  const sample = [
    { id: 1, title: "a" },
    { id: 2, title: "b" },
    { id: 3, title: "c" },
  ];
  const renderItem = ({ item }) => <ExploreCard />;
  return (
    <FlatList
      style={globalStyles.tripsContainer}
      data={sample}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

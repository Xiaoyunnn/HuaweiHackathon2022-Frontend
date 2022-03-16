import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Searchbar from "../components/searchbar/searchbar";
import { globalStyles } from "../styles/global";
import GuideItem from "../components/guide/guideItem";

export default function FindGuide({ navigation, route }) {
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("rating");
  const [sample, setSample] = useState(
    [
      { name: "alice", rating: 4.5, hourlyRates: 20 },
      { name: "betty", rating: 4.2, hourlyRates: 10 },
      { name: "carol", rating: 4.1, hourlyRates: 30 },
      { name: "dave", rating: 4.0, hourlyRates: 30 },
      { name: "elsa", rating: 4.5, hourlyRates: 40 },
      { name: "felix", rating: 4.6, hourlyRates: 50 },
      { name: "george", rating: 4.7, hourlyRates: 60 },
      { name: "holger", rating: 4.8, hourlyRates: 70 },
      { name: "ida", rating: 4.9, hourlyRates: 80 },
      { name: "john", rating: 4.5, hourlyRates: 90 },
      { name: "klare", rating: 4.5, hourlyRates: 35 },
      { name: "luna", rating: 4.5, hourlyRates: 37 },
    ].sort((a, b) => b.rating - a.rating)
  );

  const renderGuide = ({ item }) => {
    return <GuideItem guide={item} handleSelectGuide={handlePress} />;
  };

  const handlePress = (guide) => {
    console.log("NAVIGATE");
    console.log(guide);
    navigation.navigate("Guide Overview", {
      guide: guide,
      attraction: route.params.attraction
    });
  };

  const handleSortRating = () => {
    setOrder("rating");
    setSample([...sample].sort((a, b) => b.rating - a.rating));
  };

  const handleSortHourlyRates = () => {
    setOrder("hourly-rates");
    setSample([...sample].sort((a, b) => a.hourlyRates - b.hourlyRates));
  };

  return (
    <View style={[globalStyles.tripsContainer, { paddingHorizontal: 0 }]}>
      <View style={{ paddingHorizontal: 10 }}>
        <Searchbar
          input={searchInput}
          setInput={setSearchInput}
          type={"guide"}
          handleSelectGuide={handlePress}
        />
      </View>
      <View style={styles.orderWrapper}>
        <Text
          style={order === "rating" ? styles.active : styles.orderText}
          onPress={handleSortRating}
        >
          ↓ Rating
        </Text>
        <Text
          style={order === "hourly-rates" ? styles.active : styles.orderText}
          onPress={handleSortHourlyRates}
        >
          ↑ Hourly Rates
        </Text>
      </View>
      <FlatList
        data={sample}
        keyExtractor={(item) => item.name}
        renderItem={renderGuide}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orderWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#A3B3C5",
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  orderText: {
    marginHorizontal: 5,
    color: "#A3B3C5",
  },
  active: {
    marginHorizontal: 5,
    color: "orange",
    fontWeight: "bold",
  },
});

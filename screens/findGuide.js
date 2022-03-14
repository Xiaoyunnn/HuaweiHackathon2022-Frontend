import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Searchbar from "../components/searchbar/searchbar";
import { globalStyles } from "../styles/global";

export default function FindGuide({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("rating");

  const handlePress = (guide) => {
    navigation.navigate("Guide Overview", {
      guide: guide,
    });
  };

  return (
    <View style={globalStyles.tripsContainer}>
      <Searchbar
        input={searchInput}
        setInput={setSearchInput}
        type={"guide"}
        handleSelectGuide={handlePress}
      />
      <View style={styles.orderWrapper}>
        <Text
          style={
            order === "rating"
              ? styles.active
              : styles.orderText
          }
          onPress={() => setOrder("rating")}
        >
          ↓ Rating
        </Text>
        <Text
          style={
            order === "hourly-rates"
              ? styles.active
              : styles.orderText
          }
          onPress={() => setOrder("hourly-rates")}
        >
          ↑ Hourly Rates
        </Text>
      </View>
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
    color: "#A3B3C5"
  },
  active: {
    marginHorizontal: 5,
    color: "orange",
    fontWeight: "bold",
  },
});

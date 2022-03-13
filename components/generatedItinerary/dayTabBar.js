import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function DayTabBar({ numDays, daySelected, setDaySelected }) {
  const renderDays = () => {
    return Array(numDays)
      .fill(0)
      .map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setDaySelected(i)}
          style={daySelected == i && styles.activeWrapper}
        >
          <Text
            style={daySelected == i ? styles.dayTextActive : styles.dayText}
          >
            Day {i + 1}
          </Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={{ flexDirection: "row", padding: 10, paddingHorizontal: 15 }}>
      {renderDays()}
    </View>
  );
}

const styles = StyleSheet.create({
  dayTextActive: {
    color: "#FF9900",
    fontSize: 16,
    fontWeight: "bold",
  },
  dayText: {
    color: "#A3B3C5",
    fontWeight: "bold",
    marginRight: 15,
    fontSize: 16,
  },
  activeWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF9900",
    paddingBottom: 5,
    marginRight: 15
  },
});

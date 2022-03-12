import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import ScheduleCard from "./scheduleCard";

export default function DateScheduleList({ schedule }) {

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <Text style={styles.dateTitle}>{schedule.date}</Text>
      {schedule.slots.map((slot, i) => (
        <ScheduleCard key={i} slot={slot} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dateTitle: {
    fontSize: 16,
    color: "#647A91",
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 4,
  },
});

import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/global";

export default function ScheduleCard({ slot }) {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState(slot.note);

  return (
    <View style={styles.scheduleCardContainer}>
      <View style={styles.editContainer}>
        <View style={styles.timeContainer}>
          <View style={styles.dot} />
          <Text style={styles.noteText}>{slot.time}</Text>
        </View>
        {isEditing ? (
          <Text style={styles.saveText} onPress={() => setIsEditing(false)}>
            Save
          </Text>
        ) : (
          <Text style={styles.noteText} onPress={() => setIsEditing(true)}>
            Edit
          </Text>
        )}
      </View>
      <Text style={styles.locationText}>{slot.location}</Text>
      {isEditing ? (
        <TextInput
          value={note}
          onChangeText={setNote}
          style={{ width: "100%", lineHeight: 18 }}
        />
      ) : (
        <Text style={styles.noteText}>{note}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleCardContainer: {
    marginBottom: 13,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#FF9900",
    marginRight: 5,
  },
  locationText: {
    color: "#647A91",
    paddingVertical: 3,
    fontWeight: "bold",
    fontSize: 16,
  },
  noteText: {
    color: "#647A91",
    fontSize: 12,
    lineHeight: 17,
  },
  saveText: {
    color: "#FF9900",
    fontSize: 12,
    lineHeight: 17,
  },
});

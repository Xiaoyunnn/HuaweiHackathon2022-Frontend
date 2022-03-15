import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/global";
import { AntDesign } from "@expo/vector-icons";

export default function Timeslot({ timeslot, selected, handleToggleTimeslot }) {
  // const [selected, setSelected] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={handleToggleTimeslot}
      underlayColor="#fff"
    >
      <View style={styles.slotContainer}>
        <View style={styles.slotWrapper}>
          <Text style={globalStyles.greyText}>{timeslot}</Text>
        </View>
        <AntDesign
          name="checkcircle"
          size={25}
          color={selected ? "#FFA62B" : "#A3B3C5"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  slotContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 7,
  },
  slotWrapper: {
    borderRadius: 12,
    borderColor: "#647A91",
    borderWidth: 0.5,
    width: "80%",
    paddingVertical: 5,
    alignItems: "center",
  },
});

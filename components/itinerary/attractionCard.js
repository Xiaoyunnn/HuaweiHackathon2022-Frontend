import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function AttractionCard({isSelected, handleSelect, index, attraction}) {
  const [selected, setSelected] = useState(isSelected);
  // console.log(isSelected);

  const toggleSelect = () => {
    handleSelect(index);
    setSelected(!selected);
  }

  return (
    <TouchableWithoutFeedback onPress={toggleSelect}>
      <View style={styles.attractionWrapper}>
        <Image
          source={require("../../night-safari.jpeg")}
          style={styles.attractionImg}
        />
        <Text style={styles.attractionText}>{attraction.attractionName}</Text>
        {selected && (
          <AntDesign
            name="checkcircle"
            size={24}
            color="#FFA62B"
            style={styles.checkmark}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  attractionImg: {
    height: 110,
    width: "100%",
    borderRadius: 12,
  },
  attractionWrapper: {
    marginBottom: 10,
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
    flexBasis: "32%",
  },
  attractionText: {
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    bottom: 5,
    textAlign: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  checkmark: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});

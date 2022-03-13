import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function ExpectationInput({ expectation, handleSelect }) {
  const [isSelected, setIsSelected] = useState(expectation.isSelected);

  const handlePress = () => {
    handleSelect();
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity
      style={
        isSelected
          ? [styles.expectationInput, styles.expectationInputActive]
          : styles.expectationInput
      }
      onPress={handlePress}
    >
      <Text
        style={isSelected ? styles.whiteCenterText : styles.orangeCenterText}
      >
        {expectation.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  expectationInput: {
    borderWidth: 0.5,
    borderColor: "#FF9900",
    borderRadius: 12,
    flexBasis: "32%",
    paddingVertical: 7,
    marginTop: 5,
  },
  expectationInputActive: {
    backgroundColor: "#FF9900",
  },
  orangeCenterText: {
    color: "#FF9900",
    textAlign: "center",
  },
  whiteCenterText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

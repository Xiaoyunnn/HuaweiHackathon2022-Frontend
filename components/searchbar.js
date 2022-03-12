import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function Searchbar({ input, setInput }) {
  const sampleData = [
    "sentosa",
    "merlion park",
    "marina bay sands",
    "universal studios",
    "tiong bahru",
  ];
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (value) => {
    setInput(value);
    const filteredData = sampleData.filter((d) =>
      d.toLowerCase().includes(value.toLowerCase())
    );
    // console.log(filteredData);

    if (value == "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  return (
    <View style={globalStyles.inputWrapper}>
      <View style={globalStyles.iconWrapper}>
        <MaterialIcons name="search" size={20} color="#d4af95" />
      </View>
      <TextInput
        style={globalStyles.input}
        placeholderTextColor="#a17556"
        placeholder="Search for an attraction"
        value={input}
        onChangeText={handleFilter}
        returnKeyType="search"
      />
      {input != "" && (
        <TouchableWithoutFeedback onPress={() => setInput("")}>
          <Entypo
            name="cross"
            size={19}
            color="#d4af95"
            style={styles.cancelIcon}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cancelIcon: {
    paddingVertical: 13,
  },
});

import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import SearchAttractionItem from "./searchAttractionItem";
import SelectedItem from "./selectedItem";

export default function Searchbar({
  input,
  setInput,
  selectSearchAttraction,
  setSelectSearchAttraction,
}) {
  const sampleData = [
    {attractionName: "sentosa"},
    {attractionName: "merlion park"},
    {attractionName: "marina bay sands"},
    {attractionName: "universal studios"},
    {attractionName: "tiong bahru"},
  ];
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (value) => {
    setInput(value);
    const filteredData = sampleData.filter((d) =>
      d.attractionName.toLowerCase().includes(value.toLowerCase())
    );

    if (value == "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  const handleSelect = (key) => (event) => {
    if (!selectSearchAttraction.includes(key)) {
      const arr = [...selectSearchAttraction, key];
      setSelectSearchAttraction(arr);
    }
  };

  const handleRemove = (key) => (event) => {
    const arr = selectSearchAttraction.filter((item) => item.attractionName !== key);
    setSelectSearchAttraction(arr);
  };

  const renderSelectedSearchItems = () => {
    if (selectSearchAttraction.length > 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {selectSearchAttraction.map((item, i) => (
            <SelectedItem
              key={item.attractionName}
              handleRemove={handleRemove(item.attractionName)}
              item={item}
            />
          ))}
        </View>
      );
    }
  };

  return (
    <View>
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

      {input != "" && (
        <ScrollView
          style={[
            styles.searchResultContainer,
            { borderWidth: filteredData.length == 0 ? 0 : 0.5 },
          ]}
        >
          {filteredData.map((item, i) => (
            <SearchAttractionItem
              key={item.attractionName}
              handleSelect={handleSelect(item)}
              item={item.attractionName}
            />
          ))}
        </ScrollView>
      )}
      {renderSelectedSearchItems()}
    </View>
  );
}

const styles = StyleSheet.create({
  cancelIcon: {
    paddingVertical: 13,
  },

  searchResultContainer: {
    maxHeight: 200,
    width: "100%",
    borderColor: "#A3B3C5",
    borderRadius: 5,
    marginBottom: 5,
  },
});

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import BottomBtn from "../components/bottomBtn";
import Searchbar from "../components/searchbar/searchbar";
import AttractionCard from "../components/itinerary/attractionCard";

export default function PopularAttractions({ navigation }) {
  const [attraction, setAttraction] = useState("");

  const sampleData = [
    { attractionName: "Night Safari" },
    { attractionName: "sentosa" },
    { attractionName: "National Gallery" },
  ];
  // initialize to an array of false, size = num of attractions shown
  const [attractionSelected, setAttractionSelected] = useState([
    false,
    false,
    false,
  ]);

  const [selectSearchAttraction, setSelectSearchAttraction] = useState([]);

  useEffect(() => {}, [attractionSelected]);

  const handleSelect = (i) => {
    attractionSelected[i] = !attractionSelected[i];
  };

  const navigateNext = () => {
    let attractionsArr = [];
    for (let i = 0; i < sampleData.length; i++) {
      if (attractionSelected[i]) {
        attractionsArr.push(sampleData[i]);
      }
    }

    for (let i = 0; i < selectSearchAttraction.length; i++) {
      if (!attractionsArr.includes(selectSearchAttraction[i])) {
        attractionsArr.push(selectSearchAttraction[i]);
      }
    }

    navigation.navigate("Preferences", {
      attractionsArr: attractionsArr,
    });
  };

  return (
    <View style={globalStyles.tripsContainer}>
      <Searchbar
        input={attraction}
        setInput={setAttraction}
        selectSearchAttraction={selectSearchAttraction}
        setSelectSearchAttraction={setSelectSearchAttraction}
      />
      <Text style={styles.title}>You might want to go</Text>
      <ScrollView
        contentContainerStyle={[
          globalStyles.adventuresContainer,
          { paddingBottom: 15 },
        ]}
      >
        {sampleData.map((data, i) => (
          <AttractionCard
            handleSelect={handleSelect}
            index={i}
            isSelected={attractionSelected[i]}
            key={i}
            attraction={data}
          />
        ))}
      </ScrollView>
      <BottomBtn action={"Next"} handlePress={navigateNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  cancelIcon: {
    paddingVertical: 13,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FF9900",
    marginTop: 7,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
});

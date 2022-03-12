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
import Searchbar from "../components/searchbar";
import AttractionCard from "../components/itinerary/attractionCard";

export default function PopularAttractions({ navigation }) {
  const [attraction, setAttraction] = useState("");

  const sampleData = [
    { attractionName: "Night Safari" },
    { attractionName: "Sentosa" },
    { attractionName: "National Gallery" },
  ];
  // initialize to an array of false, size = num of attractions shown
  const [attractionSelected, setAttractionSelected] = useState([
    false,
    false,
    false,
  ]);

  useEffect(() => {

  }, [attractionSelected])

  const handleSelect = (i) => {
    let attractionArr = attractionSelected;
    attractionArr[i] = !attractionArr[i];
    setAttractionSelected(attractionArr);
    // console.log(attractionSelected);
  };

  return (
    <View style={globalStyles.tripsContainer}>
      <Searchbar input={attraction} setInput={setAttraction} />
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
      <BottomBtn action={"Next"} />
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
    marginVertical: 5,
    paddingHorizontal: 5,
  },
});

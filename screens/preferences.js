import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import DatePicker from "react-native-date-picker";
import CalendarPicker from "react-native-calendar-picker";
import { Entypo } from "@expo/vector-icons";
import BottomBtn from "../components/bottomBtn";
import ExpectationInput from "../components/itinerary/expectationInput";

export default function Preferences({ route, navigation }) {
  // console.log(route.params.attractionsArr);
  const ONE_DAY_IN_MS = 24 * 3600 * 1000;
  const minDate = new Date(); // Today
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numPeople, setNumPeople] = useState(1);
  const [title, setTitle] = useState("");
  const travelExpectations = [
    { title: "Family", isSelected: false },
    { title: "Kids", isSelected: false },
    { title: "Couple", isSelected: false },
    { title: "Foodie", isSelected: false },
    { title: "Adventural", isSelected: false },
    { title: "Cultural", isSelected: false },
    { title: "Sporty", isSelected: false },
    { title: "Casual", isSelected: false },
    { title: "Museumn", isSelected: false },
  ];

  const handleDataChange = (date, type) => {
    if (type === "END_DATE") {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const handleIncrease = () => {
    setNumPeople(numPeople + 1);
  };

  const handleDecrease = () => {
    if (numPeople > 1) {
      setNumPeople(numPeople - 1);
    }
  };

  const handleChangeNum = (text) => {
    const num = parseInt(text.replace(/[^0-9]/g, ""));
    setNumPeople(num);
  };

  const handleSelect = (index) => () => {
    travelExpectations[index].isSelected =
      !travelExpectations[index].isSelected;
    console.log(travelExpectations);
  };

  const handleGenerate = () => {
    // submit preferences for itinerary generation
    // navigate to next generated itinerary page with the data fetched
    const numDays =
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        ONE_DAY_IN_MS +
      1;
    navigation.navigate("Generated Itinerary", {
      itineraries: [],
      tripTitle: title,
      numDays: numDays,
    });
  };

  return (
    <View style={globalStyles.tripsContainer}>
      <ScrollView>
        <CalendarPicker
          allowRangeSelection={true}
          minDate={minDate}
          todayBackgroundColor="#FECF72"
          selectedDayColor="#FFA62B"
          selectedDayTextColor="#FFFFFF"
          onDateChange={handleDataChange}
          previousTitle="←"
          nextTitle="→"
          textStyle={{
            color: "#647A91",
          }}
        />
        <View style={styles.preferenceInputContainer}>
          <Text style={styles.font18Orange}>No. of People</Text>
          <View style={styles.numInputWrapper}>
            <Entypo
              name="minus"
              size={24}
              color="#FF9900"
              style={{ marginRight: 3 }}
              onPress={handleDecrease}
            />

            <TextInput
              keyboardType="number-pad"
              style={styles.numInput}
              onChangeText={handleChangeNum}
              value={numPeople.toString()}
            />
            <Entypo
              name="plus"
              size={24}
              color="#FF9900"
              style={{ marginLeft: 3 }}
              onPress={handleIncrease}
            />
          </View>
        </View>
        <Text style={styles.font18Orange}>Travel Expectations</Text>
        <View style={globalStyles.adventuresContainer}>
          {travelExpectations.map((expectation, i) => (
            <ExpectationInput
              key={i}
              expectation={expectation}
              handleSelect={handleSelect(i)}
            />
          ))}
        </View>

        <View style={styles.preferenceInputContainer}>
          <Text style={styles.font18Orange}>Trip Title</Text>
          <View style={styles.numInputWrapper}>
            <TextInput
              keyboardType="number-pad"
              style={styles.titleInput}
              onChangeText={setTitle}
              value={title}
              placeholder="Enter trip title"
            />
          </View>
        </View>
      </ScrollView>
      <BottomBtn action={"Generate Itinerary"} handlePress={handleGenerate} />
    </View>
  );
}

const styles = StyleSheet.create({
  preferenceInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numInputWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 5,
  },
  font18Orange: {
    color: "#FF9900",
    fontWeight: "bold",
    fontSize: 16,
  },
  numInput: {
    borderWidth: 0.5,
    borderColor: "#FF9900",
    color: "#FF9900",
    borderRadius: 12,
    width: 62,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "500",
  },
  titleInput: {
    borderWidth: 0.5,
    borderColor: "#FF9900",
    color: "#FF9900",
    borderRadius: 12,
    width: "80%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "500",
  },
});

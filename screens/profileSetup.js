import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import ProfileInfo from "../components/profile/profileInfo";

export default function ProfileSetup({route, navigation}) {
  const isGuide = true;
  const [rate, setRate] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [interest, setInterest] = useState("");

  const submitSave = () => {
    console.log("submit setup");
    navigation.navigate("Home", { screen: "My Trips" });
  };


  return (
    <View style={globalStyles.profileSetupContainer}>
      <ProfileInfo
        username={route.params.username}
        age={age}
        setAge={setAge}
        nationality={nationality}
        setNationality={setNationality}
        interest={interest}
        setInterest={setInterest}
        isEditing={true}
        isGuide={isGuide}
        rate={rate}
        setRate={setRate}
      />

      <TouchableOpacity
        style={globalStyles.btnContainerSq}
        onPress={submitSave}
      >
        <Text style={globalStyles.btnText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.btnContainerSqAlt}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.btnTextAlt}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}


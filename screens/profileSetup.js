import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import ProfileInfo from "../components/profile/profileInfo";

export default function ProfileSetup({navigation}) {
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
        age={age}
        setAge={setAge}
        nationality={nationality}
        setNationality={setNationality}
        interest={interest}
        setInterest={setInterest}
        isEditing={true}
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

const styles = StyleSheet.create({
  userProfileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  usernameTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#647A91",
    marginBottom: 10,
  },
  profileInput: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  twoBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

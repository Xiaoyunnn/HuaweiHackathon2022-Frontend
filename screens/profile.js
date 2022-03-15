import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import ProfileInfo from "../components/profile/profileInfo";

export default function Profile({navigation}) {
  const isGuide = true;
  const [rate, setRate] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [interest, setInterest] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const submitSave = () => {
    setIsEditing(false);
    console.log("submit setup");
  };

  const submitLogout = () => {
    console.log("lgout");
    navigation.navigate("Login")
  };

  return (
    <View style={globalStyles.profileContainer}>
      <ProfileInfo
        age={age}
        setAge={setAge}
        nationality={nationality}
        setNationality={setNationality}
        interest={interest}
        setInterest={setInterest}
        isEditing={isEditing}
        isGuide={isGuide}
        rate={rate}
        setRate={setRate}
      />

      {isEditing ? (
        <View style={[globalStyles.twoBtnContainer, {width: "100%"}]}>
          <TouchableOpacity
            style={globalStyles.btnContainerAltSmall}
            onPress={() => setIsEditing(false)}
          >
            <Text style={globalStyles.btnTextAlt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.btnContainerSmall}
            onPress={submitSave}
          >
            <Text style={globalStyles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            style={globalStyles.btnContainerSq}
            onPress={() => setIsEditing(true)}
          >
            <Text style={globalStyles.btnText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.btnLogoutContainer}
            onPress={submitLogout}
          >
            <Text style={globalStyles.btnLogoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
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
  
});

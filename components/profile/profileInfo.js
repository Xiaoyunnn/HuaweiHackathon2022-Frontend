import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { globalStyles } from "../../styles/global";

export default function ProfileInfo({username, age, setAge, nationality, setNationality, interest, setInterest, isEditing}) {
  
  return (
    <View style={{width: "100%", alignItems: "center"}}>
      <Image source={require("../../uss.jpeg")} style={styles.userProfileImg} />
      <Text style={styles.usernameTitle}>{username}</Text>
      <TextInput
        label="Age"
        mode="outlined"
        value={age}
        onChangeText={(age) => setAge(age)}
        style={styles.profileInput}
        activeOutlineColor="#FFA62B"
        outlineColor="#A3B3C5"
        placeholderTextColor="#A3B3C5"
        keyboardType="numeric"
        disabled={!isEditing}
      />
      <TextInput
        label="Nationality"
        mode="outlined"
        value={nationality}
        onChangeText={(nationality) => setNationality(nationality)}
        style={styles.profileInput}
        activeOutlineColor="#FFA62B"
        outlineColor="#A3B3C5"
        placeholderTextColor="#A3B3C5"
        disabled={!isEditing}
      />
      <TextInput
        label="Interest"
        mode="outlined"
        value={interest}
        onChangeText={(interest) => setInterest(interest)}
        style={styles.profileInput}
        activeOutlineColor="#FFA62B"
        outlineColor="#A3B3C5"
        placeholderTextColor="#A3B3C5"
        disabled={!isEditing}
      />
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
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import { Button, TextInput } from "react-native-paper";

export default function CreatePost({ navigation }) {
  const [text, setText] = useState("");

  const handleCreatePost = () => {
    console.log("create post");
  };

  return (
    <View style={globalStyles.tripsContainer}>
      <TextInput
        label="Write your review here"
        value={text}
        onChangeText={(text) => setText(text)}
        activeUnderlineColor="#FF9900"
        underlineColor="#A3B3C5"
        multiline={true}
        style={{ backgroundColor: "transparent", marginVertical: 5 }}
      />
      <Button
        mode="contained"
        color="#FFA62B"
        // loading={true}
        labelStyle={{ color: "#fff" }}
        onPress={handleCreatePost}
      >
        Create
      </Button>
    </View>
  );
}

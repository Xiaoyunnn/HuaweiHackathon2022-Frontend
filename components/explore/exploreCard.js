import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useCallback } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-web";
import { globalStyles } from "../../styles/global";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PostStatsBar from "./postStatsBar";

export default function ExploreCard() {
  const NUM_OF_LINES = 2;
  // const onTextLayout = useCallback(e =>{
  //   setShowMore(e.nativeEvent.lines.length > NUM_OF_LINES);
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
      <View style={styles.exploreCardContainer}>
        <View>
          <Image
            source={require("../../national-gallery.jpeg")}
            style={globalStyles.itineraryImageSmall}
          />
          <Text style={styles.postTitle}>National Gallery</Text>
          <Text
            style={styles.postText}
            numberOfLines={NUM_OF_LINES}
            ellipsizeMode="tail"
            // onTextLayout={onTextLayout}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ...
          </Text>
        </View>
        <View style={styles.userDetailsContainer}>
          <View style={styles.userTextContainer}>
            <Image
              source={require("../../national-gallery.jpeg")}
              style={styles.userDp}
            />
            <Text style={styles.userText}>Username</Text>
          </View>
          <PostStatsBar />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  exploreCardContainer: {
    marginBottom: 12,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  postTitle: {
    color: "#647A91",
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 12,
    fontWeight: "bold",
    fontSize: 16,
  },
  postText: {
    color: "#647A91",
    paddingBottom: 10,
    paddingHorizontal: 12,
    width: "100%"
  },
  userDp: {
    width: 16,
    height: 16,
    borderRadius: "50%",
  },
  userTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  userText: {
    marginLeft: 5,
    color: "#647A91",
    fontSize: 12,
    fontWeight: "bold",
  },
  userDetailsContainer: {
    flexDirection: "row",
    // alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
});

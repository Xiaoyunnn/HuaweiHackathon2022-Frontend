import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useCallback } from "react";
import { globalStyles } from "../../styles/global";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PostStatsBar from "./postStatsBar";

export default function ExploreCard() {
  const [isShowMore, setIsShowMore] = useState(false);
  const NUM_OF_CHAR = 80;
  const postDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam,";

  return (
    <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
      <View style={styles.exploreCardContainer}>
        <View style={{width: "100%"}}>
          <Image
            source={require("./national-gallery.jpeg")}
            style={styles.exploreImg}
          />
          <Text style={styles.postTitle}>National Gallery</Text>
          {postDescription.length > NUM_OF_CHAR ? (
            isShowMore ? (
              <TouchableWithoutFeedback
                onPress={() => setIsShowMore(!isShowMore)}
              >
                <View  style={{ width: "100%"}}>
                  <Text style={styles.postText}>{postDescription}</Text>
                  <View style={styles.readMoreContainer}>
                    <Text style={styles.dateText}>1 hour ago</Text>
                    <Text style={styles.readMore}>show less</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => setIsShowMore(!isShowMore)}
              >
                <View  style={{ width: "100%"}}>
                  <Text style={styles.postText}>
                    {`${postDescription.slice(0, NUM_OF_CHAR)}... `}
                  </Text>
                  <View style={styles.readMoreContainer}>
                    <Text style={styles.dateText}>1 hour ago</Text>
                    <Text style={styles.readMore}>read more</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )
          ) : (
            <View  style={{ width: "100%"}}>
              <Text style={styles.postText}>{postDescription}</Text>
              <View style={styles.readMoreContainer}>
                <Text style={styles.dateText}>1 hour ago</Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.userDetailsContainer}>
          <View style={styles.userTextContainer}>
            <Image
              source={require("./national-gallery.jpeg")}
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
  exploreImg: {
    height: 250,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
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
    paddingHorizontal: 12,
    // width: "50%",
  },
  userDp: {
    width: 24,
    height: 24,
    borderRadius: 13,
  },
  userTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
  },
  userText: {
    marginLeft: 5,
    color: "#647A91",
    fontSize: 14,
    fontWeight: "bold",
  },
  userDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  readMoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 5,
    paddingTop: 3,
  },
  readMore: {
    color: "#647A91",
    fontWeight: "600",
    alignSelf: "flex-end",
  },
  dateText: {
    color: "#8B97A5",
    fontSize: 12,
  },
});

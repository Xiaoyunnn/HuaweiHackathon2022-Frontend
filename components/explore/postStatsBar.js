import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-web";
import { globalStyles } from "../../styles/global";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function PostStatsBar() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(123);
  const [commentCount, setCommentCount] = useState(45);

  return (
    <View style={styles.statsContainer}>
      {isLiked ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setIsLiked(!isLiked);
            setLikeCount(likeCount - 1);
          }}
        >
          <Ionicons name="md-heart-sharp" size={ 20} color="#E16060" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setIsLiked(!isLiked);
            setLikeCount(likeCount + 1);
          }}
        >
          <Ionicons name="md-heart-outline" size={ 20} color="#E16060"  />
        </TouchableWithoutFeedback>
      )}
      <Text style={styles.statsText}>{likeCount}</Text>
      <MaterialCommunityIcons
        name="comment-processing"
        size={ 20}
        color="#A3B3C5"
      />
      <Text style={styles.statsText}>{commentCount}</Text>

      {isBookmarked ? (
        <TouchableWithoutFeedback
          onPress={() => setIsBookmarked(!isBookmarked)}
        >
          <Ionicons name="bookmark" size={ 20} color="#FFA62B"  />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => setIsBookmarked(!isBookmarked)}
        >
          <Ionicons name="bookmark-outline" size={ 20} color="#FFA62B"  />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5
  },
  statsText: {
    marginLeft: 2,
    marginRight: 5,
    color: "#647A91",
    fontSize: 12,
  }
})

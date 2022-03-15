import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import { Rating, RatingProps } from "react-native-elements";

export default function GuideReview({ review }) {
  return (
    <View style={styles.reviewWrapper}>
      <Text style={globalStyles.greyText}>{review.body}</Text>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5}}>
        <Rating
          imageSize={12}
          type="custom"
          ratingColor="#FECF72"
          ratingCount={5}
          readonly
          startingValue={review.rating}
        />
        <Text style={styles.usernameText}>- {review.username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewWrapper: {
    borderBottomColor: "#A3B3C5",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  usernameText: {
    color: "#647A91",
    fontWeight: "600",
  },
});

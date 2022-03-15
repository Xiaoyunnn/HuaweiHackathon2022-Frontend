import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/global";
import RatingBar from "./ratingBar";
import { Rating } from "react-native-elements";
import Review from "./review";
import { Button, TextInput } from "react-native-paper";

export default function ReviewSummary({ sampleReviews, rating }) {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(sampleReviews);

  const handleFilterReviews = (rating) => () => {
    const arr = [...sampleReviews].filter((item) => item.rating === rating);
    setReviews(arr);
  };

  const handleSendReview = () => {
    console.log("send review");
  };

  return (
    <View>
      <Text style={globalStyles.greyHeader}>Review Summary</Text>
      <View style={styles.ratingContainer}>
        <View style={{ width: "60%", marginRight: 15 }}>
          <RatingBar
            rating={5}
            width={"98%"}
            handlePress={handleFilterReviews(5)}
          />
          <RatingBar
            rating={4}
            width={"80%"}
            handlePress={handleFilterReviews(4)}
          />
          <RatingBar
            rating={3}
            width={"10%"}
            handlePress={handleFilterReviews(3)}
          />
          <RatingBar
            rating={2}
            width={"5%"}
            handlePress={handleFilterReviews(2)}
          />
          <RatingBar
            rating={1}
            width={"2%"}
            handlePress={handleFilterReviews(1)}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.ratingNumBig}>{rating}</Text>
          <Rating
            imageSize={20}
            type="custom"
            ratingColor="#FECF72"
            readonly
            fractions={1}
            startingValue={rating}
          />
        </View>
      </View>
      <View style={styles.reviewsWrapper}>
        <Text
          style={styles.allReviewsText}
          onPress={() => setReviews(sampleReviews)}
        >
          All Reviews &gt;&gt;{" "}
        </Text>
        <Text
          style={styles.writeReviewText}
          onPress={() => setIsWritingReview(!isWritingReview)}
        >
          Write Review{" "}
        </Text>
      </View>
      {isWritingReview && (
        <View>
          <Rating
            imageSize={20}
            type="custom"
            ratingColor="#FFA62B"
            startingValue={userRating}
            onFinishRating={(n) => setUserRating(n)}
          />
          <TextInput
            label="Write your review here"
            value={review}
            onChangeText={(text) => setReview(text)}
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
            onPress={handleSendReview}
          >
            Send
          </Button>
        </View>
      )}
      <View style={styles.allReviewsContainer}>
        {reviews.map((review, i) => (
          <Review key={i} review={review} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingNumBig: {
    color: "#647A91",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
  },
  allReviewsText: {
    color: "#647A91",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 5,
  },
  allReviewsContainer: {
    paddingBottom: 10,
    borderTopColor: "#A3B3C5",
    borderTopWidth: 1,
    marginTop: 7,
  },
  writeReviewText: {
    color: "#3683DE",
    fontSize: 14,
    marginBottom: 5,
  },
  reviewsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

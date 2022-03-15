import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import GuideItem from "../components/guide/guideItem";
import { globalStyles } from "../styles/global";
import GuideItemInfo from "../components/guide/guideItemInfo";
import Timeslot from "../components/guide/timeslot";
import { Rating, RatingProps } from "react-native-elements";
import RatingBar from "../components/guide/ratingBar";
import GuideReview from "../components/guide/guideReview";

export default function GuideOverview({ route, navigation }) {
  // pass date from create itinerary page
  console.log(route.params.guide);
  const date = "3 Mar 2022";
  const timeslots = [
    "1100 - 1200",
    "1200 - 1300",
    "1300 - 1400",
    "1400 - 1500",
    "1500 - 1600",
    "1600 - 1700",
    "1700 - 1800",
    "1800 - 1900",
  ];
  const sampleReviews = [
    {
      username: "alice",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 5,
    },
    {
      username: "betty",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 4,
    },
    {
      username: "tricia",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 3,
    },
    {
      username: "elf",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 2,
    },
    {
      username: "dave",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore",
      rating: 1,
    },
  ];
  const [selectTimeslot, setSelectTimeslot] = useState([]);
  const [reviews, setReviews] = useState(sampleReviews);

  const handleFilterReviews = (rating) => {
    switch (rating) {
      case 1:
        setReviews(reviews.filter((item) => item.rating === 1));
        return;

      case 2:
        setReviews(reviews.filter((item) => item.rating === 2));
        return;

      case 3:
        setReviews(reviews.filter((item) => item.rating === 3));
        return;

      case 4:
        setReviews(reviews.filter((item) => item.rating === 4));
        return;

      case 5:
        setReviews(reviews.filter((item) => item.rating === 5));
        return;

      default:
        return;
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.guide.name,
    });
  }, [navigation]);

  const handleToggleTimeslot = (key) => () => {
    if (!selectTimeslot.includes(key)) {
      const arr = [...selectTimeslot, key];
      setSelectTimeslot(arr);
    } else {
      const arr = selectTimeslot.filter((item) => item !== key);
      setSelectTimeslot(arr);
    }
  };

  return (
    <View style={globalStyles.tripsContainer}>
      <ScrollView>
        <GuideItemInfo guide={route.params.guide} />
        <Text style={globalStyles.greyHeader}>Availability on {date}</Text>
        {timeslots.map((timeslot, i) => (
          <Timeslot
            timeslot={timeslot}
            key={i}
            selected={selectTimeslot.includes(timeslot)}
            handleToggleTimeslot={handleToggleTimeslot(timeslot)}
          />
        ))}
        <Text style={globalStyles.greyHeader}>Review Summary</Text>
        <View style={styles.ratingContainer}>
          <View style={{ width: "60%", marginRight: 15 }}>
            <RatingBar
              rating={5}
              width={"98%"}
              handlePress={() => handleFilterReviews(5)}
            />
            <RatingBar
              rating={4}
              width={"80%"}
              handlePress={() => handleFilterReviews(4)}
            />
            <RatingBar
              rating={3}
              width={"10%"}
              handlePress={() => handleFilterReviews(3)}
            />
            <RatingBar
              rating={2}
              width={"5%"}
              handlePress={() => handleFilterReviews(2)}
            />
            <RatingBar
              rating={1}
              width={"2%"}
              handlePress={() => handleFilterReviews(1)}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.ratingNumBig}>{route.params.guide.rating}</Text>
            <Rating
              imageSize={20}
              type="custom"
              ratingColor="#FECF72"
              readonly
              fractions={1}
              startingValue={route.params.guide.rating}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.allReviewsText}>All Reviews &gt;&gt; </Text>
          <Text style={styles.writeReviewText}>Write Review </Text>
        </View>
        <View style={styles.allReviewsContainer}>
          {sampleReviews.map((review, i) => (
            <GuideReview key={i} review={review} />
          ))}
        </View>
      </ScrollView>
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
    borderTopColor: "#A3B3C5",
    borderTopWidth: 1,
    paddingBottom: 10,
  },
  writeReviewText: {
    color: "#3683DE",
    fontSize: 14,
    marginBottom: 5,
  },
});

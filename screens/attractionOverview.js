import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { globalStyles } from "../styles/global";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import IconsBar from "../components/generatedItinerary/iconsBar";
import ReviewSummary from "../components/review/reviewSummary";

export default function AttractionOverview({ route, navigation, attraction }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
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

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.attraction,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFAFA" }}>
      <ScrollView>
        <Image
          source={require("../night-safari.jpeg")}
          style={styles.coverImg}
        />
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.tagsContainer}>
            {isBookmarked ? (
              <Ionicons
                name="bookmark"
                size={24}
                color="#FFA62B"
                style={styles.bookmark}
                onPress={handleBookmark}
              />
            ) : (
              <Ionicons
                name="bookmark-outline"
                size={24}
                color="#FFA62B"
                style={styles.bookmark}
                onPress={handleBookmark}
              />
            )}
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>Theme Park</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>Adventural</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>Adventural</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>Adventural</Text>
            </View>
          </View>
          <IconsBar rating={4.5} duration={"2h"} cost={30} />

          <Text style={globalStyles.greyHeader}>About</Text>
          <Text style={globalStyles.greyText}>
            Southeast Asia’s first and only Universal Studios theme park,
            featuring 24 rides, shows and attractions in seven themed zones.
            Test your nerves on the thrilling roller coasters, with themes
            ranging from ancient Egypt to Jurassic Park.
          </Text>

          <View style={styles.infoRowWrapper}>
            <SimpleLineIcons
              name="location-pin"
              size={22}
              color="#647A91"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.greyText}>8 Sentosa Gateway, 098269</Text>
          </View>
          <View style={styles.infoRowWrapper}>
            <MaterialCommunityIcons
              name="clock"
              size={22}
              color="#647A91"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.greyText}>Open Now: 12pm - 7pm</Text>
          </View>
          <View style={styles.infoRowWrapper}>
            <MaterialCommunityIcons
              name="web"
              size={22}
              color="#647A91"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.greyText}>https://www.rwsentosa.com/en/attractions/universal-studios-singapore/explore</Text>
          </View>
          <View style={[styles.infoRowWrapper, {marginBottom: 15}]}>
            <AntDesign
              name="mobile1"
              size={22}
              color="#647A91"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.greyText}>+65 6577 8888</Text>
          </View>
          <ReviewSummary sampleReviews={sampleReviews} rating={4.6}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImg: {
    height: 240,
    resizeMode: "cover",
  },
  tagsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    flexWrap: "wrap",
  },
  tagWrapper: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF9900",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginTop: 5,
  },
  tagText: { color: "#FF9900" },
  bookmark: {
    position: "absolute",
    right: -5,
    top: 10,
  },
  infoRowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    width: "95%"
  },
});

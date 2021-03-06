import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";

export default function ItineraryCardSmall({handlePress, attraction}) {
  const imageSrc =
    attraction.imageUrls != null
      ? { uri: attraction.imageUrls }
      : require("../../ussv2.jpeg");

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.ItineraryCardSmallContainer}>
        <Image
          source={imageSrc}
          style={globalStyles.itineraryImageSmall}
        />
        <Text style={styles.newAdventureTitle}>
          {attraction.attractionName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  ItineraryCardSmallContainer: {
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
    // maxWidth: "48%",
    flexBasis: "49%",
  },
  newAdventureTitle: {
    color: "#647A91",
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontWeight: "500",
  },
});

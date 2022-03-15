import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";

export default function GuideItemInfo({ guide }) {
  // to show phone number only after the guide has accepted the booking?
  const [showPhone, setShowPhone] = useState(false);

  return (
    <View style={styles.guideItemInfoContainer}>
      <View style={styles.guideItemContainer}>
        <Image source={require("../../gbb.jpeg")} style={styles.guideImg} />
        <View style={{ width: "80%" }}>
          <Text style={styles.guideName}>{guide.name}</Text>
          <View style={styles.rateItemsWrapper}>
            <AntDesign name="star" size={16} color="#FECF72" />
            <Text style={globalStyles.ratingText}>{guide.rating}</Text>
            <MaterialCommunityIcons
              name="cash-usd-outline"
              size={20}
              color="#52AA6B"
            />
            <Text style={globalStyles.costText}>${guide.hourlyRates}/h</Text>
          </View>

          <View style={styles.rateItemsWrapper}>
            <FontAwesome
              name="mobile-phone"
              size={20}
              color="#647A91"
              style={{ marginLeft: 4 }}
            />
            <Text style={styles.phoneText}>
              {showPhone ? "+65 9123 4567" : "********"}
            </Text>
          </View>
        </View>
      </View>
      <Text style={globalStyles.greyText}>
        “Lorem ipsum dolor sit amet, assssss consectetur adipiscing elitLorem
        ipsum dolor sit amet, assssss consectetur adipiscing elit”
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guideItemInfoContainer: {
    borderBottomColor: "#A3B3C5",
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    paddingBottom: 7,
  },
  guideItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  guideImg: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  rateItemsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  guideName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  phoneText: {
    color: "#647A91",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

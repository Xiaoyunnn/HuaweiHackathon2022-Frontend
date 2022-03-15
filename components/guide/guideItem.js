import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";

export default function GuideItem({guide, handleSelectGuide}) {
  return (
    <TouchableOpacity style={styles.guideItemContainer} onPress={() => handleSelectGuide(guide.name)}>
      <Image source={require("../../gbb.jpeg")} style={styles.guideImg} />
      <View style={{ height: 80 }}>
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
        <Text style={styles.guideDescriptionText} numberOfLines={2}>
          “Lorem ipsum dolor sit amet, assssss consectetur adipiscing elit,...”
        </Text>
      </View>
      <View style={{ position: "absolute", right: 10 }}>
        <Entypo name="chevron-right" size={24} color="#A3B3C5" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  guideItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    paddingHorizontal: 20,
    borderBottomColor: "#A3B3C5",
    borderBottomWidth: 0.5,
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
    marginVertical: 2
  },
  guideName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  guideDescriptionText: {
    color: "#647A91",
    width: "70%",
  },
});

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Dash from "react-native-dash";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5
} from "@expo/vector-icons";

export default function DestinationCard() {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 5,
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name="sign-direction"
          size={24}
          color="#FECF72"
        />
        <Dash
          dashLength={6}
          dashGap={4}
          dashColor="#A3B3C5"
          style={styles.dash}
        />
      </View>
      <View style={styles.destinationCardWrapper}>
        <Image
          source={require("../../night-safari.jpeg")}
          style={styles.destinationImg}
        />
        <View style={{ width: "52%" }}>
          <Text style={styles.cardTitle}>Night Safari</Text>
          <View style={styles.iconsWrapper}>
            <AntDesign name="star" size={16} color="#FECF72" />
            <Text style={styles.ratingText}>4.5</Text>
            <MaterialCommunityIcons name="clock-time-two" size={16} color="#A3B3C5" />
            <Text style={styles.durationText}>2h</Text>
            <MaterialCommunityIcons name="cash-usd-outline" size={20} color="#52AA6B" />
            <Text style={styles.costText}>$30</Text>
          </View>
          <Text style={styles.cardDescription}>Experience a mind-boggling world of 3D adventure at the Trick Eye Museum in Singapore!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dash: {
    width: 1,
    height: 160,
    flexDirection: "column",
  },
  destinationCardWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 9,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: "92%",
    height: 180,
  },
  destinationImg: {
    height: "100%",
    width: "43%",
    borderRadius: 10,
  },
  cardTitle: {
    color:"#647A91",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5
  },
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  ratingText: {
    color: "#FFBD59",
    fontWeight: "bold",
    marginLeft: 3,
    marginRight: 6,
    fontSize: 14
  },
  durationText: {
    color: "#A3B3C5",
    fontWeight: "bold",
    marginLeft: 3,
    marginRight: 6,
    fontSize: 14
  },
  costText: {
    color: "#52AA6B",
    fontWeight: "bold",
    marginLeft: 3,
    marginRight: 6,
    fontSize: 14
  },
  cardDescription: {
    color: "#647A91"
  }
});

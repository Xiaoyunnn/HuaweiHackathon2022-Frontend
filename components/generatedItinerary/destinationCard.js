import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Dash from "react-native-dash";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,Entypo
} from "@expo/vector-icons";
import { globalStyles } from "../../styles/global.js";

export default function DestinationCard({handleNavigateBooking}) {
  // 0 for book tour guide, 1 for pending booking, 2 for booked guide info
  const [bookingStatus, setBookingStatus] = useState(1);

  return (
    <View style={styles.descriptionCardContainer}>
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
        <View style={styles.descriptionWrapper}>
          <TouchableOpacity>
            <Text style={styles.cardTitle}>Night Safari</Text>
            <View style={styles.iconsWrapper}>
              <AntDesign name="star" size={16} color="#FECF72" />
              <Text style={globalStyles.ratingText}>4.5</Text>
              <MaterialCommunityIcons
                name="clock-time-two"
                size={16}
                color="#A3B3C5"
              />
              <Text style={globalStyles.durationText}>2h</Text>
              <MaterialCommunityIcons
                name="cash-usd-outline"
                size={20}
                color="#52AA6B"
              />
              <Text style={globalStyles.costText}>$30</Text>
            </View>
            <Text style={styles.cardDescription} numberOfLines={3}>
              Experience a mind-boggling world of 3D adventure at the Trick Eye
              Museum in Singapore!
            </Text>
          </TouchableOpacity>

          {bookingStatus == 0 ? (
            <TouchableOpacity
              style={[globalStyles.btnContainerSq, styles.bookBtn]}
              onPress={() => handleNavigateBooking("Night Safari")}
            >
              <Text style={[globalStyles.btnText, styles.bookText]}>
                Book Tour Guide
              </Text>
            </TouchableOpacity>
          ) : bookingStatus == 1 ? (
            <TouchableOpacity
              style={[globalStyles.btnContainerSqAlt, styles.guideBtn]}
              // onPress={handlePress}
            >
              <Text style={[globalStyles.btnText, styles.pendingText]}>
                Pending
              </Text>
              <Entypo name="cross" size={18} color="#DE4A4A" onPress={()=> setBookingStatus(0)} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[globalStyles.btnContainerSqAlt, styles.guideBtn]}
              // onPress={handlePress}
            >
              <Text style={[globalStyles.btnText, styles.guideText]}>
                Tour Guide (0800 - 1000)
              </Text>
              <Entypo name="cross" size={18} color="#DE4A4A" onPress={()=> setBookingStatus(0)} />
            </TouchableOpacity>
          )}
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
  descriptionCardContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-around",
    marginBottom: 12,
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
  descriptionWrapper: {
    width: "52%",
    height: "100%",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#647A91",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  
  cardDescription: {
    color: "#647A91",
  },
  bookText: {
    fontSize: 14,
  },
  bookBtn: {
    borderRadius: 12
  },
  guideText: {
    fontSize: 9.5,
    color: "#FF9900",
  },
  guideBtn: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 5,
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pendingText: {
    fontSize: 14,
    color: "#FF9900",
  }
});

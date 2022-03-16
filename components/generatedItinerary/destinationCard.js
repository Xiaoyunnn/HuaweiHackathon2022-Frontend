import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Dash from "react-native-dash";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { globalStyles } from "../../styles/global.js";
import IconsBar from "./iconsBar.js";

export default function DestinationCard({
  dest,
  handleNavigateBooking,
  handleNavigateAttraction,
  handleNavigateHitch,
  isEditing,
  handleRemove,
}) {
  // 0 for book tour guide, 1 for pending booking, 2 for booked guide info
  const [bookingStatus, setBookingStatus] = useState(0);


  const imageSrc = dest.imageUrls != null ? {uri: dest.imageUrls} : require("../../night-safari.jpeg");


  return (
    <View style={styles.descriptionCardContainer}>
      <View style={{ alignItems: "center" }}>
        {isEditing ? (
          <Entypo
            name="circle-with-cross"
            size={24}
            color="#DE4A4A"
            onPress={handleRemove}
          />
        ) : (
          <MaterialCommunityIcons
            name="sign-direction"
            size={24}
            color="#FECF72"
          />
        )}

        <Dash
          dashLength={6}
          dashGap={4}
          dashColor="#A3B3C5"
          style={styles.dash}
        />
      </View>
      <View style={styles.destinationCardWrapper}>
        <Image
          source={imageSrc}
          style={styles.destinationImg}
        />
        <View style={styles.descriptionWrapper}>
          <TouchableOpacity
            onPress={() => handleNavigateAttraction(dest)}
          >
            <Text style={styles.cardTitle}>{dest.attractionName}</Text>
            <IconsBar rating={4.5} duration={"2h"} cost={30} />
            <Text style={styles.cardDescription} numberOfLines={3}>
              {dest.about}
            </Text>
          </TouchableOpacity>

          {bookingStatus == 0 ? (
            <View>
              <TouchableOpacity
                style={[globalStyles.btnContainerSq, styles.bookBtn]}
                onPress={() => handleNavigateBooking("Night Safari", {dest: dest})}
              >
                <Text style={[globalStyles.btnText, styles.bookText]}>
                  Book Tour Guide
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[globalStyles.btnContainerAlt, styles.hitchBtn]}
                onPress={() => handleNavigateHitch("Night Safari")}
              >
                <Text style={[globalStyles.btnText, styles.pendingText]}>
                  Hitch a Group
                </Text>
              </TouchableOpacity>
            </View>
          ) : bookingStatus == 1 ? (
            <View>
              <TouchableOpacity
                style={[globalStyles.btnContainerSqAlt, styles.guideBtn]}
                // onPress={handlePress}
              >
                <Text style={[globalStyles.btnText, styles.pendingText]}>
                  Pending
                </Text>
                <Entypo
                  name="cross"
                  size={18}
                  color="#DE4A4A"
                  onPress={() => setBookingStatus(0)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[globalStyles.btnContainerAlt, styles.hitchBtn]}
                onPress={() => handleNavigateHitch("Night Safari")}
              >
                <Text style={[globalStyles.btnText, styles.pendingText]}>
                  Hitch a Group
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={[globalStyles.btnContainerSqAlt, styles.guideBtn]}
                // onPress={handlePress}
              >
                <Text style={[globalStyles.btnText, styles.guideText]}>
                  Tour Guide (0800 - 1000)
                </Text>
                <Entypo
                  name="cross"
                  size={18}
                  color="#DE4A4A"
                  onPress={() => setBookingStatus(0)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[globalStyles.btnContainerAlt, styles.hitchBtn]}
                onPress={() => handleNavigateHitch("Night Safari")}
              >
                <Text style={[globalStyles.btnText, styles.pendingText]}>
                  Hitch a Group
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dash: {
    width: 1,
    height: 200,
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
    height: 220,
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

  cardDescription: {
    color: "#647A91",
  },
  bookText: {
    fontSize: 14,
    textAlign: "center",
  },
  bookBtn: {
    borderRadius: 12,
    paddingVertical: 9
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
    justifyContent: "space-between",
  },
  hitchBtn: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 5,
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  pendingText: {
    fontSize: 14,
    color: "#FF9900",
  },
});

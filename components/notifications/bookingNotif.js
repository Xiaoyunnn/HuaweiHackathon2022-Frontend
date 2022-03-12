import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const BookingNotif = () => {
  return (
    <TouchableOpacity style={globalStyles.notifItemWrapper}>
      <Text style={globalStyles.notifText}>
        GodHwee wants to book your guide for Haji Lane on 6 Jun 2022 (1100 -
        1200)!
      </Text>
      <View style={styles.reqButtons}>
        <TouchableOpacity
          style={styles.btnContainerAccept}
          // onPress={submitSignup}
        >
          <Text style={styles.btnTextBuddy}>ACCEPT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnContainerReject}
          // onPress={submitSignup}
        >
          <Text style={styles.btnTextBuddy}>REJECT</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerAccept: {
    width: "45%",
    padding: 12,
    marginVertical: 2,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "rgb(80, 170, 80)",
  },
  btnContainerReject: {
    width: "45%",
    padding: 12,
    marginVertical: 2,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "rgb(216, 111, 111)",
  },
  btnTextBuddy: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
  },
  reqButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BookingNotif;

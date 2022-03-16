import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Loading({ description }) {
  return (
    <View
      style={[
        globalStyles.tripsContainer,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <ActivityIndicator size="large" color="#FFA62B" />
      <Text
        style={[
          globalStyles.greyText,
          { width: "60%", marginTop: 8, textAlign: "center" },
        ]}
      >
        {description}
      </Text>
    </View>
  );
}

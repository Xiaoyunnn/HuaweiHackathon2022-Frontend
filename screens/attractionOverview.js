import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { globalStyles } from "../styles/global";

export default function AttractionOverview({ route, navigation }) {
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
        <View style={styles.tagsContainer}>
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
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    flexWrap: "wrap"
  },
  tagWrapper: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF9900",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginTop: 5

  },
  tagText: { color: "#FF9900" },
});

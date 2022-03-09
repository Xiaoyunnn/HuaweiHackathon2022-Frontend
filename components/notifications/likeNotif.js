import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from "../../styles/global";

export default function LikeNotif() {
  return (
    <View style={globalStyles.notifItemWrapper}>
      <Text style={globalStyles.notifText}>Godhwee liked your post!</Text>
    </View>
  )
}


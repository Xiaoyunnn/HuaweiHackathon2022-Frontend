import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from "../../styles/global";

export default function CommentNotif() {
  return (
    <View style={globalStyles.notifItemWrapper}>
      <Text style={globalStyles.notifText}>Godhwee commented on your post!</Text>
    </View>
  )
}


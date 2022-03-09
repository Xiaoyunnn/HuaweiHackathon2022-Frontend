import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from "../../styles/global";
import { TouchableOpacity } from 'react-native-web';

export default function LikeNotif() {
  return (
    <TouchableOpacity style={globalStyles.notifItemWrapper}>
      <Text style={globalStyles.notifText}>Godhwee liked your post!</Text>
    </TouchableOpacity>
  )
}


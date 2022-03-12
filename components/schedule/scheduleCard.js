import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'

export default function ScheduleCard() {
  return (
    <View style={styles.scheduleCardContainer}>
      <Text>ScheduleCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scheduleCardContainer: {
    marginBottom: 12,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#FF9900",
  }
})
import { View, Text, Image } from 'react-native'
import React from 'react'

export default function DestinationCard() {
  return (
    <View>
      <Image source={require('../../assets/ussv2.jpeg')} />
      <Text>destinationCard</Text>
    </View>
  )
}
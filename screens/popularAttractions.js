import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function PopularAttractions({navigation}) {
  return (
    <View>
      <Text>PopularAttractions</Text>
      <TouchableOpacity
        style={globalStyles.btnContainerSqAlt}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.btnTextAlt}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function CreatePost({navigation}) {
  return (
    <View>
      <Text>CreatePost</Text>
      <TouchableOpacity
        style={globalStyles.btnContainerSqAlt}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.btnTextAlt}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}
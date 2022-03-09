import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function createPostBtn() {
  return (
    <View>
      <Image/>
      <Text>Post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: "50%",
        backgroundColor: "#FBF1F1",
    },
    postText: {
        color: "#F0940A",
        fontSize: 9
    }
})
import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'

export default function GuideOverview({route, navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.guide,
    });
  }, [navigation]);
  return (
    <View>
      <Text>GuideOverview</Text>
    </View>
  )
}
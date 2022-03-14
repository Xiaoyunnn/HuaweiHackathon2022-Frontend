import { View, Text } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import Searchbar from '../components/searchbar/searchbar';
import { globalStyles } from '../styles/global';

export default function FindGuide({navigation}) {
  const [searchInput, setSearchInput] = useState("");

  const handlePress = (guide) => {
    navigation.navigate("Guide Overview", {
      guide: guide
    })
  }


  return (
    <View style={globalStyles.tripsContainer}>
      <Searchbar input={searchInput} setInput={setSearchInput} type={"guide"} handleSelectGuide={handlePress}/>
    </View>
  )
}
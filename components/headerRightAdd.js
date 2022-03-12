import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import CreateItineraryBtn from "./createItineraryBtn";
import CreatePostBtn from "./createPostBtn";

export default function HeaderRightAdd() {
  const [isAdding, setIsAdding] = useState(false);
  const rotateAnimation = new Animated.Value(0);

  const handleRotateAnimation = () => {
    setIsAdding(!isAdding);
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true, // <-- Add this
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={async () => handleRotateAnimation()}>
      <View>
        <Animated.View style={animatedStyle}>
          <Ionicons
            name="ios-add-circle-outline"
            size={32}
            color="#fff"
            style={isAdding ? styles.crossBtn : styles.addBtn}
          />
        </Animated.View>
        {/* <Modal visible={isAdding} animationType="fade" transparent={true}> */}
        {isAdding && (
          <View>
            <CreateItineraryBtn />
            <CreatePostBtn />
          </View>
        )}
        {/* <View
            style={{
              backgroundColor: "#fff",
              flex: 1,
              opacity: "0.5",
              marginTop: 65,
              marginBottom: 55,
            }}
          /> */}
        {/* </Modal> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  tabs: {
    paddingVertical: 20,
  },
  addBtn: {
    padding: 7,
    zIndex: 2,
  },
  crossBtn: {
    padding: 7,
    transform: [{ rotate: "45deg" }],
    zIndex: 2,
  },
});

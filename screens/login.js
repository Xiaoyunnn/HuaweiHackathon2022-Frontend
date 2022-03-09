import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import validator from "validator";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const navigation = useNavigation();

  const submitLogin = () => {
    navigation.navigate("Home");
    // let isValidEmail = validator.isEmail(loginEmail);
    // if (!isValidEmail) {
    //   Alert.alert("Invalid Email", "Please enter a valid email.");
    // } else {
    //   Alert.alert("Valid", `Email: ${loginEmail}\nPassword: ${loginPassword}`);
    //   navigation.navigate("Todo");
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.signupLoginContainer}>
        <Text style={globalStyles.titleText}>Login to Punkt.</Text>
        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <MaterialIcons name="email" size={20} color="#d4af95" />
          </View>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Email Address"
            value={loginEmail}
            onChangeText={(value) => setLoginEmail(value)}
          />
        </View>

        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <MaterialIcons name="lock" size={20} color="#d4af95" />
          </View>
          <TextInput
            autoCapitalize="none"
            autoComplete="password"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Password"
            secureTextEntry={true}
            value={loginPassword}
            onChangeText={(value) => setLoginPassword(value)}
          />
        </View>

        <TouchableOpacity
          style={globalStyles.btnContainer}
          onPress={submitLogin}
        >
          <Text style={globalStyles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, marginBottom: 5, color: "#FF9900" }}>
          New Here?
        </Text>

        <TouchableOpacity
          style={globalStyles.btnContainerAlt}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={globalStyles.btnTextAlt}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

// const styles = stylesheet.create({
//   signupLoginContainer: {
//     padding: "10%",
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     backgroundColor: "white",
//   },
//   inputWrapper: {
//     paddingHorizontal: 25,
//     borderRadius: 30,
//     width: "100%",
//     backgroundColor: "#ede7e3",
//     marginBottom: 10,
//     flexDirection: "row",
//   },
//   iconWrapper: {
//     marginRight: 7,
//     paddingVertical: 15,
//   },
//   input: {
//     paddingVertical: 15,
//     color: "#a17556",
//     width: "100%",
//   },
//   titleText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 15,
//     color: "#267b99",
//   },
//   btnContainer: {
//     width: "100%",
//     padding: 17,
//     marginVertical: 5,
//     alignItems: "center",
//     borderRadius: 30,
//     backgroundColor: "#86ccda",
//   },
//   btnContainerAlt: {
//     width: "100%",
//     padding: 15,
//     marginVertical: 5,
//     alignItems: "center",
//     borderRadius: 30,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#86ccda",
//   },
//   btnText: {
//     color: "#16697a",
//     fontWeight: "bold",
//   },
//   btnTextAlt: {
//     color: "#16697a",
//   },
// });

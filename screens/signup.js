import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";
import validator from "validator";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";

export default function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupCfmPassword, setSignupCfmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // const navigation = useNavigation();

  const submitSignup = () => {
    // console.warn("sign up");
    // navigation.navigate("Home", { screen: "My Trips" });
    navigation.navigate("Setup");
    // let isValidEmail = validator.isEmail(signupEmail);
    // if (!isValidEmail) {
    //   Alert.alert("Invalid Email", "Please enter a valid email.");
    // } else if (signupPassword != signupCfmPassword) {
    //   Alert.alert(
    //     "Password Mismatch",
    //     "Please ensure that both passwords are the same"
    //   );
    // } else {
    //   Alert.alert(
    //     "Valid",
    //     `Username: ${username}\nEmail: ${signupEmail}\nPassword: ${signupPassword}`
    //   );
    //   navigation.navigate("Todo");
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.signupLoginContainer}>
        <Text style={globalStyles.titleText}>Create Account</Text>

        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <FontAwesome5
              name="user-alt"
              size={18}
              color="#d4af95"
              style={{
                marginLeft: 2,
              }}
            />
          </View>
          <TextInput
            autoCapitalize="none"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Username"
            value={username}
            onChangeText={(value) => setUsername(value)}
          />
        </View>

        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <MaterialIcons name="email" size={20} color="#d4af95" />
          </View>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Email Address"
            value={signupEmail}
            onChangeText={(value) => setSignupEmail(value)}
          />
        </View>

        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <MaterialIcons name="lock" size={20} color="#d4af95" />
          </View>
          <TextInput
            autoCapitalize="none"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Password"
            secureTextEntry={true}
            value={signupPassword}
            onChangeText={(value) => setSignupPassword(value)}
          />
        </View>

        <View style={globalStyles.inputWrapper}>
          <View style={globalStyles.iconWrapper}>
            <MaterialIcons name="lock" size={20} color="#d4af95" />
          </View>
          <TextInput
            autoCapitalize="none"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={signupCfmPassword}
            onChangeText={(value) => setSignupCfmPassword(value)}
          />
        </View>

        <Text style={globalStyles.passwordHint}>
          Password must be at least 6 characters with at least 1 UPPER case, 1
          lower case and 1 numeric digit.
        </Text>

        <View style={globalStyles.guideCheckbox}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#FFA62B"
          />
          <Text style={globalStyles.input}>Sign up as a tour guide.</Text>
        </View>

        <TouchableOpacity
          style={globalStyles.btnContainer}
          onPress={submitSignup}
        >
          <Text style={globalStyles.btnText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, marginBottom: 5, color: "#FF9900" }}>
          One of Us?
        </Text>

        <TouchableOpacity style={globalStyles.btnContainerAlt}>
          <Text
            style={globalStyles.btnTextAlt}
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

// const styles = Stylesheet.create({
//   signupLoginContainer: {
//     padding: "10%",
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     backgroundColor: "white",
//   },
//   inputWrapper: {
//     paddingVertical: 15,
//     paddingHorizontal: 25,
//     borderRadius: 30,
//     width: "100%",
//     backgroundColor: "#ede7e3",
//     marginBottom: 10,
//     flexDirection: "row",
//   },
//   iconWrapper: {
//     marginRight: 7,
//   },
//   input: {
//     color: "#a17556",
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

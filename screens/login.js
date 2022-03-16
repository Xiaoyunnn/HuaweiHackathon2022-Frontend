import React, { useEffect, useState } from "react";
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
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { getUser, loginUser } from "../redux/actions/user";

function Login({ navigation, loginUser, getUser, user }) {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const navigation = useNavigation();

  useEffect(() => {
    if (user.token && !user.error) {
      getUser(user.userId);
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid Credentials", user.error);
    }
  }, [getUser, user.userId, user.token, user.error]);

  const submitLogin = () => {
    const body = { name: loginName, password: loginPassword };
    loginUser(body);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.signupLoginContainer}>
        <Text style={globalStyles.titleText}>Login to Reisen.</Text>
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
            //keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="username"
            style={globalStyles.input}
            placeholderTextColor="#a17556"
            placeholder="Username"
            value={loginName}
            onChangeText={(value) => setLoginName(value)}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  loginUser,
  getUser,
})(Login);

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

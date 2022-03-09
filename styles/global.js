import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // SIGN UP LOGIN
  signupLoginContainer: {
    padding: "10%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  inputWrapper: {
    paddingHorizontal: 25,
    borderRadius: 30,
    width: "100%",
    backgroundColor: "#FBF1F1",
    marginBottom: 10,
    flexDirection: "row",
  },
  iconWrapper: {
    marginRight: 7,
    paddingVertical: 15,
  },
  input: {
    paddingVertical: 15,
    color: "#a17556",
    width: "100%",
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FF9900",
  },
  btnContainer: {
    width: "100%",
    padding: 17,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#FFA62B",
  },
  btnContainerAlt: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FFA62B",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  btnTextAlt: {
    color: "#FF9900",
  },
  passwordHint: {
    fontSize: 10,
    color: "#808080",
    paddingHorizontal: "3%",
    marginBottom: 10,
  },
  // TODO
  tripsContainer: {
    backgroundColor: "#FFFAFA",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  p: {
    fontSize: 16,
    marginBottom: 16,
    color: "grey",
  },
  container: {
    backgroundColor: "#fff",
  },
  font20Orange: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FF9900",
    marginTop: 10,
    marginBottom: 7
  },
  notifItemWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D2DCE5",
    backgroundColor: "#fff",
  },
  notifText: {
    color: "#647A91",
    lineHeight: 24,
  },
  itineraryImageSmall: {
    height: 160,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
});

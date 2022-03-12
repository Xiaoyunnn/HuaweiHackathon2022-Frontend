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
  guideCheckbox: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  btnContainerSq: {
    width: "100%",
    padding: 17,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#FFA62B",
  },
  btnContainerSqAlt: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FFA62B",
  },
  btnContainerSmall: {
    width: "49%",
    padding: 17,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#FFA62B",
  },
  btnContainerAltSmall: {
    width: "49%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FFA62B",
  },
  btnLogoutContainer: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E46767",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  btnTextAlt: {
    color: "#FF9900",
  },
  btnLogoutText: {
    color: "#E46767",
  },
  passwordHint: {
    fontSize: 10,
    color: "#808080",
    paddingHorizontal: "3%",
  },
  tripsContainer: {
    backgroundColor: "#FFFAFA",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  profileContainer: {
    backgroundColor: "#FFFAFA",
    paddingTop: 10,
    paddingHorizontal: 50,
    flex: 1,
    alignItems:"center"
  },
  profileSetupContainer: {
    backgroundColor: "#FFFAFA",
    justifyContent: "center",
    paddingHorizontal: 50,
    flex: 1,
    alignItems:"center"
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
    height: 175,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
  
});

//=----------- react component ------//
import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";

//=----------- helpers------//
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//=----------- main Component------//
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("SignUp");
  }, 2000);
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../Assets/1-Splash.png")} style={styles.image} />
    </View>
  );
};

//=----------- export Component------//
export default Splash;

//=----------- stylesheet------//
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#101010",
  },

  image: {
    alignSelf: "center",
  },
});

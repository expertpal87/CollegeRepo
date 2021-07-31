import React, { useState } from "react";

/*--------import react native components----------- */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

//=----------- main Component ------//
const Header = ({ navigation,signup, login,onPress }) => {

  return (
    <View style={styles.backIcon}>
      <TouchableOpacity onPress={onPress}>
      <Image
        source={require("../Assets/aero_back.png")}
        style={{ height: 25, width: 25, resizeMode: "contain", marginLeft: 10 }}
      />
      </TouchableOpacity>
      {login && (
        <Text style={styles.LoginText}>Login</Text>
      )}
       {signup && (
        <Text style={styles.LoginText}>SignUp</Text>
      )}
    </View>
  );
};

export default Header;

//=----------- header style ------//
const styles = StyleSheet.create({
  backIcon: { flexDirection: "row", marginTop: 40 },
  LoginText: {
    color: "white",
    alignSelf: "center",
    fontSize: 26,
    marginLeft: 30,
    fontWeight: "bold",
  },
});

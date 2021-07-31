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

/*--------library----------- */
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

/*--------component----------- */
import Header from "../Components/header";

/*--------style---------- */
import styles from "./styles";

/*-------- main component----------- */
const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignUp = () => {
    if (!email || !password || !userName) {
      alert("please add all the field");
      return;
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.container}>
        <Header signup={true} onPress={() => navigation.goBack()} />
        <View style={styles.welcomeLogo}>
          <Image
          source={require("../Assets/logo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.InputFormContainer}>
            <View style={styles.InputView}>
              <Text style={styles.LabelText}>userName</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setUserName(value)}
                placeholder={"userName"}
                value={userName}
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.InputView}>
              <Text style={styles.LabelText}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
                placeholder={"email"}
                value={email}
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.InputView}>
              <Text style={styles.LabelText}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
                placeholder={"password"}
                placeholderTextColor={"white"}
                value={password}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => userSignUp()}>
            <View style={styles.buttonContainer}>
              <Text style={styles.loginText}>Sign Up</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.accountButton}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.haveAccountText}>
                Already Have Account ?<Text style={styles.signUp}> Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

/*-------- export container  ----------*/
export default SignUp;

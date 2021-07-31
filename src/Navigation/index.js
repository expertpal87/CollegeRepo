import React from "react";

/*--------navigation stack---------- */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/*--------import screen---------- */
import Splash from "../Splash";
import Login from "../Login/loginScreen";
import SignUp from "../Signup";
import DashBoard from "../DashBoard";

/*-------- stack---------- */
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            title: "Splash",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "SignUp",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{
            title: "DashBoard",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*-------- export default---------- */
export default Navigation;

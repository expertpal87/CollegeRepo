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

//=----------- helpers css ------//
import styles from "./styles";

import { interpolate } from "react-native-reanimated";

const ListItem = ({ navigation, item,list1 ,list2}) => {
  // const [ login, setLogin]= useState(),

  return (
    <View style={styles.mainComponent}>
      {list1 && <Image source={item.url} style={styles.ImageList} />}
      {list2 && <Image source={item.url2} style={styles.ImageList} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notify Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;


import React, { useState, useEffect } from "react";

//import all the components we are going to use
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
} from "react-native";

//=----------- library ------//
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SliderBox } from "react-native-image-slider-box";
import { Audio, Video } from "expo-av";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

//=----------- helpers css ------//
import styles from "./styles";

//=----------- Component ------//
import ListItem from "./list";

//=----------- list Data ------//
const DATA1 = [
  {
    url: require("../Assets/img-1.png"),
    url2: require("../Assets/img-6.png"),
    title: "The Krishna",
    date: "Saturday, July 31",
    time: "07:30 PM",
  },

  {
    url: require("../Assets/img-2.png"),
    url2: require("../Assets/img-5.png"),
    title: "The Shiv Ji",
    date: "Saturday, July 31",
    time: "07:30 PM",
  },

  {
    url: require("../Assets/img-3.png"),
    url2: require("../Assets/img-4.png"),
    title: "Shri Radhe",
    date: "Saturday, July 31",
    time: "07:30 PM",
  },
  {
    url: require("../Assets/img-4.png"),
    url2: require("../Assets/img-1.png"),
    title: "The Krishna",
    date: "Saturday, July 31",
    time: "07:30 PM",
  },
  {
    url: require("../Assets/img-5.png"),
    url2: require("../Assets/img-3.png"),
    title: "The Ram",
    date: "Saturday, July 31",
    time: "07:30 PM",
  },
  {
    url: require("../Assets/img-6.png"),
    url2: require("../Assets/img-2.png"),
    title: "The Raven",
    date: "Saturday, July 31",
    time: "07:30 PM",
  },
];

//=----------- Slider Data ------//
const images = [
  require("../Assets/photo.png"),
  require("../Assets/img-2.png"),
  require("../Assets/img-4.png"),
  require("../Assets/img-1.png"),
];

//=----------- main Component------//
const DashBoard = ({ route, navigation }) => {
  const [shouldPlay, setShouldPlay] = useState(true);
  const [mute, setMute] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const RenderComponent = ({ item }) => {
    return <ListItem item={item} list1={true} />;
  };

  const SecondList = ({ item }) => {
    return <ListItem item={item} list2={true} />;
  };

  const handlePlayAndPause = () => {
    setShouldPlay(!shouldPlay);
  };
  const handleVolume = () => {
    setMute(!mute);
  };
  //=----------- main Render View ------//

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../Assets/Bar.png")} />
          </TouchableOpacity>
          <Image
            source={require("../Assets/transparent.png")}
            style={styles.middleIcon}
          />
            <TouchableOpacity>
          <Image
            source={require("../Assets/search-bar.png")}
            style={styles.iconHead}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.ImageSlider}>
          <TouchableOpacity>
            <SliderBox
              images={images}
              onCurrentImagePressed={(index) => {
                console.warn(`image ${index} pressed`);
                setModalVisible(true);
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listType}>
            <TouchableOpacity onPress={() => alert("live")}>
              <Text style={styles.liveStreamText}>Live Stream</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("see All")}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={DATA1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={RenderComponent}
            horizontal={true}
          />
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listType}>
            <TouchableOpacity
              onPress={() => {
                alert("see All");
              }}
            >
              <Text style={styles.liveStreamText}>Live Classes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("see All")}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={DATA1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={SecondList}
            horizontal={true}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modelComponent}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.backModel}>
              <Image
                source={require("../Assets/aero_back.png")}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                  marginLeft: 10,
                }}
              />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableOpacity>
          <Video
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            shouldPlay={shouldPlay}
            resizeMode="cover"
            style={{ width: "100%", height: 300 }}
            isMuted={mute}
          />
          <View style={styles.controlBar}>
            <MaterialIcons
              name={mute ? "volume-mute" : "volume-up"}
              size={45}
              color="white"
              onPress={handleVolume}
            />
            <MaterialIcons
              name={shouldPlay ? "pause" : "play-arrow"}
              size={45}
              color="white"
              onPress={handlePlayAndPause}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default DashBoard;

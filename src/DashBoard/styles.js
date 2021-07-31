//=----------- helpers css ------//
import { StyleSheet } from "react-native";

//=----------- styleSheet ------//
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  header: {
    flexDirection: "row",
    marginTop: 45,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  iconHead: {
    height: 30,
    width: 30,
  },
  listContainer: {
    marginTop: 20,
  },
  middleIcon: {
    width: 200,
    resizeMode: "contain",
  },
  listType: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    margin: 10,
  },
  liveStreamText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#DDC279",
    fontSize: 16,
    fontWeight: "bold",
  },
  ImageSlider: {
    width: "100%",
    marginTop: 30,
  },

  //=----------- list component styles ------//

  mainComponent: {
    marginLeft: 20,
  },
  ImageList: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    borderRadius: 10,
    marginTop: 5,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  date: {
    color: "grey",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  time: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#C93432",
    justifyContent: "center",
    borderRadius: 5,
    width: 100,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    padding: 5,
  },

  modelComponent: {
    flex: 1,
    backgroundColor: "#101010",
  },
  controlBar: {
    flexDirection: "row",
    alignSelf: "center",
  },
  backModel: {
    flexDirection: "row",
    marginTop: 50,
    marginBottom: "30%",
  },
  backText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
});

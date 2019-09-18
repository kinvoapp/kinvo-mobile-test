import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  titleAndMessageArea: {
    marginLeft: 15,
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  advertisingArea: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DAE0E3",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 15
  },
  message: {
    fontSize: 11
  }
});

export default styles;

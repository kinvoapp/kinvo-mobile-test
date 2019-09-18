import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  registerScreen:{
    flex:1
  },
  exitArea: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: 1,
    borderTopColor: "#DAE0E3",
    borderTopWidth: 1
  },
  exitButton: {
    backgroundColor: "#DAE0E3",
    height: 30,
    width: 30,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  titleArea: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: 1
  },
  titleText: {
    margin: 20,
    color: "#627179",
    fontWeight: "bold"
  }
});

export default styles;

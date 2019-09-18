import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: "#DAE0E3",
    borderWidth: 1,
    flex: 1,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20
  },
  divider: {
    height: 1,
    backgroundColor: "#DAE0E3",
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10
  },
   message: {
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 11
  },
  titleAndIconAndPlusButtonArea: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
    marginBottom: 10
  },
  titleAndIconArea: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15
  },
  iconCard: {
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 15
  },
  plusButton: {
    color: "#DAE0E3",
    fontSize: 30,
    marginRight: 15,
    justifyContent: "center"
  },
  cardName: {
    alignSelf: "center",
    marginLeft: 10
  }
});

export default styles;

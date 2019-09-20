import { StyleSheet } from "react-native";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  registerScreen: {
    flex: 1
  },
  closeArea: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: metrics.border,
    borderTopColor: "#DAE0E3",
    borderTopWidth: metrics.border,
    height: metrics.bottomNavigationBarHeight
  },
  closeButton: {
    backgroundColor: "#DAE0E3",
    height: 35,
    width: 35,
    borderRadius: 50,
    marginTop: metrics.spaceX,
    marginBottom: metrics.space2X,
    alignItems: "center",
    justifyContent: "center"
  },
  titleArea: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: metrics.border
  },
  titleText: {
    margin: metrics.space2X,
    color: "#627179",
    fontWeight: "bold"
  },
  closeIcon: {
    color: "white",
    fontSize: 20
  }
});

export default styles;

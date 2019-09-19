import { StyleSheet } from "react-native";
import metrics from "../../../../../../styles/metrics";

const styles = StyleSheet.create({
  container: {
    borderColor: "#DAE0E3",
    borderWidth: metrics.border,
    flex: 1,
    marginTop: metrics.spaceX,
    marginLeft: metrics.space2X,
    marginRight: metrics.space2X,
    borderRadius: metrics.radius3X
  },
  message: {
    alignSelf: "center",
    marginLeft: metrics.spaceX,
    fontSize: 11
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: metrics.space3X,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: metrics.spaceX
  },
  lastRegister: {
    flexDirection: "row",
    marginTop: metrics.spaceX,
    marginBottom: metrics.spaceX
  }
});

export default styles;

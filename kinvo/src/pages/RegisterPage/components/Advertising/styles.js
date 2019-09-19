import { StyleSheet } from "react-native";
import metrics from '../../../../styles/metrics'

const styles = StyleSheet.create({
  container: {},
  titleAndMessageArea: {
    marginLeft: metrics.space2X,
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: metrics.spaceX
  },
  advertisingArea: {
    flexDirection: "row",
    borderWidth: metrics.border,
    borderColor: "#DAE0E3",
    borderRadius: metrics.radius2X,
    marginTop: metrics.space2X,
    marginBottom: metrics.spaceX,
    marginLeft: metrics.space2X,
    marginRight: metrics.space2X,
    padding: metrics.space15X
  },
  message: {
    fontSize: 11
  }
});

export default styles;

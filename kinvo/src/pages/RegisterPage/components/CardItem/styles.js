import { StyleSheet } from "react-native";
import metrics from '../../../../styles/metrics'

const styles = StyleSheet.create({
  container: {
    borderColor: "#DAE0E3",
    borderWidth: metrics.border,
    flex: 1,
    marginTop: metrics.spaceX,
    marginLeft: metrics.space2X,
    marginRight: metrics.space2X,
    borderRadius: metrics.radius2X
  },
  divider: {
    height: 1,
    backgroundColor: "#DAE0E3",
    width: "90%",
    alignSelf: "center",
    marginBottom: metrics.space15X,
    marginTop: metrics.space15X
  },
   message: {
    marginLeft: metrics.space15X,
    marginBottom: metrics.space15X,
    fontSize: 11
  },
  titleAndIconAndPlusButtonArea: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
    marginTop: metrics.space15X

  },
  titleAndIconArea: {
    flex: 1,
    flexDirection: "row",
  },
  iconCard: {
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: metrics.space15X
  },
  plusButton: {
    color: "#DAE0E3",
    fontSize: 30,
    marginRight: metrics.space15X,
    justifyContent: "center"
  },
  cardName: {
    alignSelf: "center",
    marginLeft: metrics.spaceX
  }
});

export default styles;

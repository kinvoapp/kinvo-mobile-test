import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 15,
    margin: 1
  },
  header: {
    flex: 1,
    marginLeft: 2
  },
  body: {
    flex: 1,
    borderTopStartRadius: 3,
    borderBottomStartRadius: 3,
    borderRadius: 5,
    borderLeftWidth: 5
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyTextStyle: {
    fontWeight: "900",
    fontSize: 14,
    color: "#707B81",
    paddingLeft: 5
  },
  profitabilityContainerStyle: {
    alignItems: "flex-end"
  },
  equityContainerStyle: {
    alignItems: "flex-start"
  },
  equityTextStyle: {
    fontSize: 10,
    color: "#707B81"
  },
  profitabilityTextStyle: {
    fontSize: 10,
    color: "#707B81"
  },
  valueTextStyle: {
    fontSize: 20
  },
  textHeaderstyle: {
    fontWeight: "bold",
    fontSize: 10
  }
});

export default styles;

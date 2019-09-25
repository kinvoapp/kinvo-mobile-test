import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FA"
  },
  searchBarContainer: {
    margin: 8,
    alignItems: "center"
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    width: "95%",
    borderRadius: 0,
    elevation: 0,
    alignSelf:'center'
  },
  searchBarInputContainer: {
    height: 43,
    borderRadius: 20,
    backgroundColor: "#FFFFFF"
  },
  textEmptyProductList: {
    alignSelf: "center"
  },
  textError: {
    alignSelf: "center"
  }
});

export default styles;

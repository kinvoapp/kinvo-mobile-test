import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: "#DAE0E3",
    borderWidth: 1,
    flex: 1,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 30 
  },
message: {
    alignSelf: "center", marginLeft: 10, fontSize: 11
},
icon: {
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 15
},
lastRegister:{
    flexDirection: "row", marginTop: 10, marginBottom: 10 
}
});

export default styles;

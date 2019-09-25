import { StyleSheet } from "react-native";
import metrics from '../../../../styles/metrics'

const styles = StyleSheet.create({
  container: {
    padding:metrics.space2X,
    paddingBottom:metrics.spaceX
  },
  titleAndMessageArea: {
    marginLeft: metrics.space2X,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: metrics.spaceX
  },
  advertisingArea: {
    zIndex:1,
    flexDirection: "row",
    backgroundColor:'#FFFFFF',
    borderWidth: metrics.border,
    borderColor: "#DAE0E3",
    borderRadius: metrics.radius2X,    
    padding: metrics.space15X,
  },
  message: {
    fontSize: 11
  },
  closeAdvertisingArea: {
    zIndex:0,
    flexDirection: "row",    
    width:'100%',
    backgroundColor:'#FF9B52',
    borderRadius: metrics.radius2X, 
    padding: metrics.space3X,
    justifyContent:'flex-end',
    marginLeft:'-80%'

  }
});

export default styles;

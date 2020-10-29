import { StyleSheet } from 'react-native';

const styles = StyleSheet.create
({
  list: {
   paddingHorizontal: 10,
  },
  listItem: {
   backgroundColor: '#ffffff',
   marginTop: 10,
   padding: 30,
  },
  row:
  {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  bottomCard:
  {
    flex:0.1,
    flexDirection: 'column'
  },
  nomeInst:
  {
    fontSize: 12,
    fontWeight: 'bold',
  },
  insideText:
  {
    fontWeight: 'bold',
    color: '#777777'
  },
  bottomCardLowerText:
  {
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottomCardUpperText:
  {
    color: '#BBBBBB',
    fontWeight: 'bold'
  }
});

export default styles;

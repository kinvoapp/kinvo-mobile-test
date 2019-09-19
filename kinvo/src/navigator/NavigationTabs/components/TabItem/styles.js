import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 109,
    height: 49,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  tabItemTitle: {
    fontSize: 16,
    color: '#707B81',
  },

  active: {
    backgroundColor: '#F4F6F7',
  },

  inactive: {
    backgroundColor: '#FFF',
  },
});

export default styles;

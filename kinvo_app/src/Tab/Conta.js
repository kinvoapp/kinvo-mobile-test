import React, { useState, useEffect } from 'react';
import {
  Text, StyleSheet, View, Image, Alert,
} from 'react-native';
import { CommonStyles } from '../commonValues';
import userDefaultImage from '../../assets/Icons/user-default.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.backGroundColor,
  },
  text: {
    fontSize: 30,
    fontFamily: CommonStyles.fontBlack,
    marginTop: 20,
    color: CommonStyles.selectedColor,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 360,
    borderColor: CommonStyles.selectedColor,
    borderWidth: 1,
  },
});
const Conta = () => {
  const [image, setImage] = useState(userDefaultImage);
  const isMounted = React.useRef(true);

  fetch('https://api.github.com/users/RafaelNeveZ', {
    method: 'GET',
  })
    .then(response => response.json())
    .then((responseJson) => {
      if (isMounted.current) { setImage({ uri: responseJson.avatar_url }); }
    })
    .catch((error) => {
      Alert.alert('ERRO', JSON.stringify(error));
    });

  useEffect(() => () => {
    isMounted.current = false;
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>Rafael Neves</Text>
    </View>
  );
};

export default Conta;

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CommonStyles, maskMoney } from '../../commonValues';
import { firebaseDatabase } from '../../../utils/firebase';
import '../../fixtimerbug'; // <<<<<<<<<<<<<<<<<<

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
    color: 'green',
  },
  textSaldo: {
    fontSize: 30,
    fontFamily: CommonStyles.fontMedium,
    color: 'green',
  },
});
const Carteira = () => {
  const [mySaldo, setMySaldo] = useState(0);
  useEffect(() => {
    firebaseDatabase.ref('user').on('value', (dataSnapshot) => {
      const { saldo } = dataSnapshot.val();
      setMySaldo(saldo);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SALDO</Text>
      <Text style={styles.textSaldo}>{`R$${maskMoney(mySaldo)}`}</Text>
    </View>
  );
};
export default Carteira;

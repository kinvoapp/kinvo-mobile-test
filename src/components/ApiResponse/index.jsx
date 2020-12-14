import React, { useEffect }  from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import ListValues from '../ListValues';

/*
* this file render the redirect the response in case of sucess to <ListValues />.
* if something went wrong hrow an error.
*/

const getInfos = async (add, api) => add(await api());

function ApiResponse({ apiGet, valueAdd, valueState, order=false }) {
  useEffect(() => {
    //making this Conditional rendering, my aplication makes only one request on the database
    valueState.length === 0 && getInfos(valueAdd, apiGet)
    //case order value is true we are gona sort de array response
    order
      &&
    valueState.success
      &&
    valueState.data == valueState.data.sort((a,b) => (a.name > b.name) ? 1 : -1)
  }, [valueState]);

  return (
    <View>
      <View>
        {valueState.error && <Text>algo deu errado</Text>}
      </View>
      <ScrollView style={styles.container}>
        {valueState.success && valueState.data.map((stock) => <ListValues stock={stock} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    alignSelf: 'center',
    margin: 10,
    width: '90%',
    borderColor: '#DAE0E3',
  },
});

export default ApiResponse;

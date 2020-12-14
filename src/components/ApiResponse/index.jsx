import React, { useEffect }  from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import ListValues from '../ListValues';

const getInfos = async (add, api) => add(await api());

function ApiResponse({ apiGet, valueAdd, valueState }) {
  useEffect(() => {
    //making this Conditional rendering, my aplication makes only one request on the database
    valueState.length === 0 && getInfos(valueAdd, apiGet)
  }, []);

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

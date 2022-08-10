import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import api from '../../service/api';

import { PensionCard } from '../../components/PensionCard';
import { FilterButton, FilterList, TextButton } from './styles';

import NetInfo from "@react-native-community/netinfo";
import { Error } from '../../components/Error';
import { Loading } from '../../components/Loading';
import { Empty } from '../../components/Empty';

interface PensionsProps {
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

const options = [
  {
    slug: 'taxfree',
    title: 'SEM TAXAS',
  },
  {
    slug: 'minvalue',
    title: 'R$ 100,00',
  },
  {
    slug: 'redemption',
    title: 'D+1',
  },
]

export function Pension() {
  const [pensions, setPensios] = useState<PensionsProps[]>([]);
  const [filterdPensions, setFilteredPensios] = useState<PensionsProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [Conn, setConn] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function getPensions() {
      const { data } = await api
        .get('pension')
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      setPensios(data);
    }
    getPensions();

  }, []);

  NetInfo.fetch().then(state => {
    setConn(state.isConnected);
  });

  return (
    <View>
      {isLoading === true && <Loading />}

      {Conn === false ? (<Error local='Pension' />)
        : (<View style={
          isLoading ? { display: 'none' } : { display: 'flex', height: "100%" }
        }>
          <FilterList
            data={options}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <FilterButton key={index} onPress={() => {
                  setActive(!active)
                }} style={
                  (index === 1) ? styles.button : {
                    marginHorizontal: 0,
                    marginVertical: 20
                  }}>
                  <TextButton>
                    {item.title}
                  </TextButton>
                </FilterButton>
              );
            }}
          />
          {
            pensions.length > 0 ?
              <FlatList
                data={pensions.sort(
                  (a, b) =>
                    a.name.localeCompare(b.name)
                )}
                renderItem={({ item, index }) => {
                  return (
                    <PensionCard
                      key={index}
                      name={item.name}
                      type={item.type}
                      minimumValue={item.minimumValue}
                      tax={item.tax}
                      redemptionTerm={item.redemptionTerm}
                      profitability={item.profitability}
                    />
                  );
                }}
              />
              :
              (
                <Empty />
              )
          }
        </View>)
      }

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

});

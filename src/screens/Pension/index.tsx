import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import api from '../../service/api';

import { PensionCard } from '../../components/PensionCard';
import { FilterButton, FilterBox, TextButton } from './styles';

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

export function Pension() {
  const [pensions, setPensios] = useState<PensionsProps[]>([]);
  const [filterdPensions, setFilteredPensios] = useState<PensionsProps[]>([]);

  const [activeTax, setActiveTax] = useState(false);
  const [activeValue, setActiveValue] = useState(false);
  const [activeRedmp, setActiveRedemp] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [Conn, setConn] = useState(true);

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

  const handleTax = () => {
    setActiveTax(!activeTax)
    setActiveValue(false)
    setActiveRedemp(false)
    setFilteredPensios(pensions.filter(item => item.tax === 0))
  }
  const handleValue = () => {
    setActiveValue(!activeValue)
    setActiveTax(false)
    setActiveRedemp(false)
    setFilteredPensios(pensions.filter(item => item.minimumValue === 100))
  }
  const handleRedemp = () => {
    setActiveRedemp(!activeRedmp)
    setActiveTax(false)
    setActiveValue(false)
    setFilteredPensios(pensions.filter(item => item.redemptionTerm === 1))
  }

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
          <FilterBox>
            <FilterButton onPress={handleTax} style={activeTax ? styles.activeBg : false}>
              <TextButton style={activeTax ? styles.activeFont : false}>SEM TAXAS</TextButton>
            </FilterButton>

            <FilterButton onPress={handleValue} style={activeValue ? styles.activeBg : false}>
              <TextButton style={activeValue ? styles.activeFont : false}>R$ 100,00</TextButton>
            </FilterButton>

            <FilterButton onPress={handleRedemp} style={activeRedmp ? styles.activeBg : false}>
              <TextButton style={activeRedmp ? styles.activeFont : false}>D+1</TextButton>
            </FilterButton>
          </FilterBox>
          {
            activeRedmp || activeTax || activeValue ?
              filterdPensions.length > 0 ?
                <FlatList
                  data={filterdPensions.sort(
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
              :
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
  activeBg: {
    backgroundColor: '#6F4DBF',
  },
  activeFont: {
    color: '#fff'
  },
});
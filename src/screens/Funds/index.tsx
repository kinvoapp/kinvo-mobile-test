
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import api from '../../service/api';

import { FundCard } from '../../components/FundCard';
import { ClosedFund } from '../../components/FundCard/ClosedFund';

import NetInfo from "@react-native-community/netinfo";
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
import { Empty } from '../../components/Empty';

interface FundProps {
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}
export function Funds() {
  const [funds, setFunds] = useState<FundProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [Conn, setConn] = useState(true);

  useEffect(() => {
    async function getPensions() {
      const { data } = await api
        .get('funds')
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      setFunds(data);
    }
    getPensions();

  }, []);

  NetInfo.fetch().then(state => {
    setConn(state.isConnected);
  });

  return (
    <View>
      {isLoading === true && <Loading />}

      {Conn === false ? (<Error local='Funds' />)
        : (<View style={isLoading ? { display: 'none' } : { display: 'flex' }}>

          {
            funds.length > 0 ?
              <FlatList
                data={funds.sort(
                  (a, b) =>
                    a.name.localeCompare(b.name)
                )}
                renderItem={({ item, index }) => {

                  if (item.status === 2) {
                    return (
                      <ClosedFund
                        key={index}
                        name={item.name}
                        type={item.type}
                        minimumValue={item.minimumValue}
                        rating={item.rating}
                        status={item.status}
                        profitability={item.profitability}
                      />
                    );
                  } else {
                    return (
                      <FundCard
                        key={index}
                        name={item.name}
                        type={item.type}
                        minimumValue={item.minimumValue}
                        rating={item.rating}
                        status={item.status}
                        profitability={item.profitability}
                      />
                    )
                  }
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







import React, {useEffect, useState} from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './ActionsScreen.style'
import Header from '../Components/Header'
import ActionItem from '../Components/ActionItem'
import api from '../../../services/api'
import { Props } from '../Entities'
import Error from '../Components/Error'

const ActionScreen: React.FC = () => {
  const navigation = useNavigation();
  const styles = getStyles()
  const [stocks, setStocks] = useState<Props[]>([])
  const [isFetching, setIsFetching] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)
  const [itsLiked, setItsLiked] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    setTryAgain(false)

    api.get('/stocks').then(response => {
      setStocks(response.data.data)
      setIsFetching(false)

    }).catch((error) => {
      console.log("Api call error")
      console.log(error)
    })
  }, [tryAgain])

  return (
    <>
      <Header title={'Ações'} comeBack={navigation.goBack} />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} bounces={false} >
        {isFetching && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'#6F4DBF'} />
          </View>
        )}
        {!isFetching && hasError && (
          <Error onTryAgain={() => setTryAgain(true)} />
        )}
        {!isFetching && !hasError && (
          <>
            {stocks.map((item, index) => (
              <ActionItem
                key={index}
                disabled={false}
                name={item.name}
                onPressItem={() => {}}
                minimumValue={item.minimumValue}
                profitability={item.profitability}
                ticker={item.ticker}
              />
            ))}
          </>
        )}
      </ScrollView>
    </>
  )
}

export default ActionScreen;

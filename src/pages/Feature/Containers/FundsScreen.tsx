import React, {useState, useEffect} from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './FundsScreen.style'
import Header from '../Components/Header'
import ActionItem from '../Components/ActionItem';
import { Props } from '../Entities'
import api from '../../../services/api'
import Error from '../Components/Error'

const ActionScreen: React.FC = () => {
  const navigation = useNavigation();
  const styles = getStyles()
  const [funds, setFunds] = useState<Props[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    setTryAgain(false)

    api.get('/funds').then(response => {
      setFunds(response.data.data)
      setIsFetching(false)

    }).catch((error) => {
      console.log("Api call error")
      console.log(error)
    })
  }, [tryAgain])

  return (
    <>
      <Header title={'Fundos'} comeBack={navigation.goBack} />
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
          {funds.map((item, index) => (
            <ActionItem
              key={index}
              disabled={true}
              name={item.name}
              type={item.type}
              minimumValue={item.minimumValue}
              rating={item.rating}
              profitability={item.profitability}
              status={item.status}
            />
          ))}
          </>
        )}
      </ScrollView>
    </>
  )
}

export default ActionScreen;

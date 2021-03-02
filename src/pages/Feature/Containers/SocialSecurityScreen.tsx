import React, {useState, useEffect} from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './SocialSecurityScreen.style'
import Header from '../Components/Header'
import FilterButton from '../Components/FilterButton'
import Separator from '../Components/Separator'
import api from '../../../services/api'
import ActionItem from '../Components/ActionItem';
import { Props } from '../Entities'
import Error from '../Components/Error'
import ItemFilterNotFound from '../Components/ItemFilterNotFound';
import { has } from 'lodash';

const ActionScreen: React.FC = () => {
  const styles = getStyles()
  const navigation = useNavigation();
  const [pension, setPension] = useState<Props[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)
  const [hasFilter, setHasFilter] = useState([''])

  const filters = [
    {
      title: "SEM TAXA"
    },
    {
      title: "R$ 100"
    },
    {
      title: "D+1"
    }]

  useEffect(() => {
    setIsFetching(true)
    setTryAgain(false)

    api.get('/pension').then(response => {
      setPension(response.data.data)
      setIsFetching(false)
    }).catch((error) => {
      console.log("Api call error")
      console.log(error)
    })

  }, [tryAgain])

  return (
    <>
      <Header title={'Previdências'} comeBack={navigation.goBack} />
      <View style={styles.filterContainer}>
        {filters.map((item,index) => (
          <FilterButton
          key={index}
          title={item.title}
          onPress={() => setHasFilter([item.title])}
        />
        ))}
      </View>
      <Separator style={styles.separator} />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} bounces={false} >
        {isFetching && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'#6F4DBF'} />
          </View>
        )}
        {!isFetching && hasError && (
        <Error onTryAgain={() => setTryAgain(true)} />
      )}
        {!isFetching && !hasError && hasFilter && (
          <>
          {pension.map((item, index) => (
            <ActionItem
              key={index}
              name={item.name}
              type={item.type}
              minimumValue={item.minimumValue}
              tax={item.tax}
              redemptionTerm={item.redemptionTerm}
              profitability={item.profitability}
              disabled={true}
            />
          ))}
          </>
        )}
        {!isFetching && !hasError && !hasFilter && (
          <>
          {pension.map((item, index) => (
            <ActionItem
              key={index}
              name={item.name}
              type={item.type}
              minimumValue={item.minimumValue}
              tax={item.tax}
              redemptionTerm={item.redemptionTerm}
              profitability={item.profitability}
              disabled={true}
            />
          ))}
          </>
        )}
      </ScrollView>
    </>
  )
}

export default ActionScreen;

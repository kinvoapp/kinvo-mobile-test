import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import { getStyles } from './ActionItem.style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Separator from './Separator';
import image from '../../../Themes/Images'
import { Props } from '../Entities'
import Stars from './Stars'
import addOpacity from '../Utils/addOpacity';

const ActionItem: React.FC<Props> = ({
  name,
  onPressItem,
  minimumValue,
  profitability,
  disabled,
  status,
  redemptionTerm,
  type,
  ticker,
  tax,
  rating,
}) => {
  const styles = getStyles()
  const [itsLiked, setItsLiked] = useState(false)

  const liked = () => {
    if (itsLiked === true) {
      setItsLiked(false)
    }
    if (itsLiked === false) {
      setItsLiked(true)
    }
  }

  return (
    <TouchableOpacity
      style={[styles.mainContainer, status === 2 && {backgroundColor: '#DAE0E3'}]}
      disabled={disabled}
      onPress={liked}
    >
      <View style={styles.higherContent}>
        <View style={[!!status && styles.viewTitle, !!ticker && styles.viewTitle]}>
          <Text style={[styles.title, status === 2 && styles.closedItem]}>{name}</Text>
          {ticker ? (
            <Text style={styles.subtitle}>{ticker}</Text>
          ) : (
            <Text style={[styles.subtitle, status === 2 && styles.closedItem]}>{type}</Text>
          )}
        </View>
        {ticker ? (
          itsLiked ? <Image source={image.hearth} style={styles.hearth} /> :
          <Image source={image.emptyHearth} style={styles.emptyHearth} />
        ) : (
          <>
            {!!status && (
              <View style={[styles.status, status === 2 && {backgroundColor: '#818181'}]}>
                <Text style={styles.itemStatus}>{status === 2 ? 'Fechado' : status === 1 ? 'Novo' : ''}</Text>
              </View>
            )}
          </>
        )}
      </View>
      <Separator style={{marginBottom: 10}}/>
      {!!rating || rating === 0 ? (
        <View style={styles.bottomContent}>
          <Text style={[styles.textDetails, status === 2 && styles.closedItem]}>Classificação:</Text>
          <Stars
          data={rating}
          styleStar={status === 2 ? {tintColor: addOpacity('#627179',0.5)}: {tintColor:'#F8C22E'}}
        />
        </View>

      ) : (<View/>)}
      <View style={styles.bottomContent}>
        <Text style={[styles.textDetails, status === 2 && styles.closedItem]}>Valor mínimo:</Text>
        <Text style={[styles.valueDetail, status === 2 && styles.closedItem]}>R$ {minimumValue}</Text>
      </View>
      {!!tax || tax === 0 ? (
        <View style={styles.bottomContent}>
          <Text style={[styles.textDetails, status === 2 && styles.closedItem]}>Taxa:</Text>
          <Text style={[styles.valueDetail, status === 2 && styles.closedItem]}>{tax}%</Text>
        </View>
      ) : (<View/>)}
      {!!redemptionTerm && (
        <View style={styles.bottomContent}>
          <Text style={[styles.textDetails, status === 2 && styles.closedItem]}>Resgate:</Text>
          <Text style={[styles.valueDetail, status === 2 && styles.closedItem]}>{redemptionTerm}</Text>
        </View>
      )}
      <View style={styles.bottomContent}>
        <Text style={[styles.textDetails, status === 2 && styles.closedItem]}>Rentabilidade:</Text>
        <Text
          style={[styles.profitabilityDetail,
            profitability > 0 ?
            {color: '#AED335'} :
            profitability < 0 ?
            {color: '#E85D1F'} :
            {color: '#627179'}]
          }>
          {profitability > 0 ? (
            <Image source={image.topArrow} style={[styles.arrow, {tintColor: '#AED335'}]} />
          ) : profitability < 0 ? (
            <Image source={image.downArrow} style={styles.arrow}/>
          ) : ''}
          {' ' + profitability}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ActionItem

import React, {useState} from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getStyles } from './FilterButton.style'

interface Props {
  title: string
  onPress: () => void
  styleButton?: StyleMedia
  styleText?: StyleMedia
}

const FilterButton: React.FC<Props> = ({ title, onPress}) => {
  const styles = getStyles()
  const [filter, setFilter] = useState(false)

  const filtered = () => {
    if (filter === true) {
      setFilter(false)
    }
    if (filter === false) {
      setFilter(true)
    }
  }

  return (
    <TouchableOpacity style={[styles.status, filter === true && styles.buttonFilter]} onPress={filtered}>
      <Text style={[styles.itemStatus, filter === true && styles.textFilter]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FilterButton

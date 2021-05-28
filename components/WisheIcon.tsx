import React, {FC} from 'react'
import {WisheProps} from './types'
import Hearth from '../assets/icons/hearth.svg'
import HearthFilled from '../assets/icons/hearth-filled.svg'

const WisheIcon : FC<WisheProps> = ({isFavorite}) => {
    return isFavorite ? <HearthFilled/> : <Hearth/> ;
}

export default WisheIcon
import React, { useEffect, useState } from 'react'

import { Entypo } from '@expo/vector-icons'
import { Container } from './styles'

interface ratingProps {
  value: number
  color: string
}

export default function Rating({ value, color }: ratingProps) {
  const [starsRatingValue, setStarsRatingValue] = useState<Array<number>>([])
  const [starCompleteRatingValue, setStarCompleteRatingValue] = useState<
    Array<number>
  >([])

  useEffect(() => {
    const ratingValue: Array<number> | null = []
    for (let i = 1; i <= value; i++) {
      ratingValue.push(i)
    }

    setStarsRatingValue(ratingValue)

    const completeRatingValue: Array<number> | null = []
    for (let i = 1; i <= 5 - value; i++) {
      completeRatingValue.push(i)
    }

    setStarCompleteRatingValue(completeRatingValue)
  }, [])

  return (
    <Container>
      {starsRatingValue.map((value) => {
        return <Entypo name="star" size={24} color={color} key={value} />
      })}

      {starCompleteRatingValue.map((value) => {
        return (
          <Entypo name="star-outlined" size={24} color={color} key={value} />
        )
      })}
    </Container>
  )
}

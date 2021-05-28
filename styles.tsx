import styled from 'styled-components/native'
import colors from './constants/colors'

export const Card = styled.View`
    border: 1px solid #DAE0E3;
    width: 320px;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
`

export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: montserrat-bold;
`

export const Screen = styled.View`
    flex: 1;
`

export const RowView = styled.View`
    flex-direction: row;
`

export const RowAlignCenterView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const RowSpacedView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const GainText = styled.Text`
    color: ${colors.gain};
    font-size: 12px;
    font-family: montserrat-semibold;
`

export const LossText = styled.Text`
    color: ${colors.loss};
    font-size: 12px;
    font-family: montserrat-semibold;
`
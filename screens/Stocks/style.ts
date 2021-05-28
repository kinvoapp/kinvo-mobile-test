import styled from 'styled-components/native'
import {Screen, CardTitle, Card, RowSpacedView} from "../../styles"
import Colors from '../../constants/colors'

// TODO organizar ordem dos estilos

export const StockScreen = styled(Screen)`
    align-items: center;
`

export const StockCardContainer = styled(Card)`
    padding: 16px 14px 32px 21px;
    margin-top: 20px;
    height: 145px;
`

export const StockCardTitle = styled(CardTitle)`
    color: ${Colors.secondary};
`
export const StockCardSubtitle = styled.Text`
    font-size: 12px;
    color: ${Colors.secondary};
    font-family: montserrat-semibold;
`
export const Text = styled.Text`
    color: ${Colors.secondary};
    font-family: montserrat-medium;
    font-size: 10px;
`

export const StockTextContainer = styled.View`
    border-bottom-color:${Colors.border};
    border-bottom-width: 1px;
    padding-bottom: 15px;
`
export const ValuesTextContainer = styled.View`
    padding-top: 10px;
    padding-right: 6px;
`
export const ProfitabilityView = styled(RowSpacedView)`
    margin-top: 15px;
`

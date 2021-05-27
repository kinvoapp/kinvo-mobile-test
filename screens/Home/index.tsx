import React, {FC} from 'react'
import {Screen} from '../../styles'
import {HomeScreen} from './style'
import {NavigationCard} from "./components/"
import FundLogo from '../../assets/icons/fund.svg'
import ForesightLogo from '../../assets/icons/foresight.svg'
import StockLogo from '../../assets/icons/stock.svg'

const Home : FC = () => {
    return(
        <HomeScreen>
            <NavigationCard logo={<StockLogo/>}  title="Ações" subtitle="Nacionais"/>
            <NavigationCard logo={<FundLogo/>} title="Fundos" subtitle="De investimentos"/>
            <NavigationCard logo={<ForesightLogo/>}  title="Previdências" subtitle="Privadas"/>
        </HomeScreen>
    )
}

export default Home
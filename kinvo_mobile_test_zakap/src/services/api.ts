import { StocksForm } from '../models/StocksForm';
import { PensionForm } from '../models/PensionForm';
import axios from "axios";
import { FundsForm } from '../models/FundsForm';

const api = axios.create({
    baseURL: "https://6266f62263e0f382568936e4.mockapi.io/",
    headers: {},
});

export const getStocks = () => {
    return api.get<{data: StocksForm[]}>('stocks')
}

export const getPension = () => {
    return api.get<{data: PensionForm[]}>('pension')
}

export const getFunds = () => {
    return api.get<{data: FundsForm[]}>('funds')
}
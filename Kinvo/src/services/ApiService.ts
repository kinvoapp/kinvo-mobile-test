import axios from "axios";

export const get = async (url: string) => {
    if (url === "funds") {
        const endpoint: string = "https://6266f62263e0f382568936e4.mockapi.io/funds";
        return await api(endpoint);
    }
    if (url === "pension") {
        const endpoint: string = "https://6266f62263e0f382568936e4.mockapi.io/pension";
        return await api(endpoint);
    }
    if (url === "stocks") {
        const endpoint: string = "https://6266f62263e0f382568936e4.mockapi.io/stocks";
        return await api(endpoint);
    }
    else {
        console.log("O endpoint informado não existe")
        return { "error": "Não foi possível se conectar ao banco de dados." }
    }
}


const api = async (endpoint: string) => {
    const response = await axios.get(endpoint)
        .then((response) => {
            console.log("Conectado ao banco de dados")

            let listInAlphOrder = [...response.data.data];
            listInAlphOrder.sort((currentItem, nextItem) => (currentItem.name > nextItem.name) ? 1 : (nextItem.name > currentItem.name) ? -1 : 0)

            response.data.data = listInAlphOrder

            return response.data
        })
        .catch((error) => {
            console.log(error)
            return { error: "Não foi possível se conectar ao banco de dados." }
        })
    return response
}
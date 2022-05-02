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
        return { "error": "O endpoint informado não existe." }
    }
}


const api = async (endpoint: string) => {


    const response = await axios.get(endpoint)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error)
            return { error: "Não foi possível se conectar ao banco de dados." }
        })
    return response
}
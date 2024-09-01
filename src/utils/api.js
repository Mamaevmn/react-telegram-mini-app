import { CURRENCY_DATA_URL, WEATHER_DATA_URL, checkResponse } from "./constants"

export const getWeathrData = (city) => request(`${WEATHER_DATA_URL}&q=${city}`, null);
export const getCurrencyData = () => request(CURRENCY_DATA_URL, null);

function request(url, options) {
    return fetch(url, options).then(checkResponse)
}
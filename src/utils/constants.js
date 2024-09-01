export const WEATHER_API_KEY = 'b8ac80b23d3c4e369f495016240109';
export const WEATHER_DATA_URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;

export const LOAD_COUNT_ITEMS = 5;

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}
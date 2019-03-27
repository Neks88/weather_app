import axios from 'axios';

const API_KEY = 'c78c1823d1aadcd8b7ff3c2f5ca5c85d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url =`${ROOT_URL}&q=${city},rs`;
    const request = axios.get(url);


    // console.log('Request:',request);

    return {
        type:FETCH_WEATHER,
        payload:request
    };
}
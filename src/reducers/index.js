import { combineReducers } from 'redux';
import WeatherApp from './reducer_weather.js';

const rootReducer = combineReducers({
  weather:WeatherApp
});

export default rootReducer;

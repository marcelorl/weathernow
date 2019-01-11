import { createAction } from 'redux-actions'

import api from '../services/request'

export const requestWeather = createAction('WEATHER_REQUEST_FETCH')
export const requestWeatherFail = createAction('WEATHER_FAIL_FETCH')
export const requestWeatherSuccess = createAction('WEATHER_SUCCESS_FETCH')

export const fetchWeather = city =>
  dispatch => {
    dispatch(requestWeather(city))

    api()
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_OPENWEATHER_APPID}&units=metric`)
      .then(({data}) => dispatch(requestWeatherSuccess({ city, data })))
      .catch(err => dispatch(requestWeatherFail(new Error(err))))
  }

import { createAction } from 'redux-actions'

import axios from '../services/request'

export const requestWeatherFail = createAction('WEATHER_FAIL_FETCH')
export const requestWeatherSuccess = createAction('WEATHER_SUCCESS_FETCH')

export const fetchWeather = city =>
  dispatch =>
    axios.get(`/weather?q=${city}&APPID=${process.env.REACT_APP_APPID}`)
      .then(({ data }) => dispatch(requestWeatherSuccess({ city, data })))
      .catch(err => dispatch(requestWeatherFail(new Error(err))))

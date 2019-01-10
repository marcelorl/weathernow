import { createAction } from 'redux-actions'

import api from '../services/request'

export const requestWeatherFail = createAction('WEATHER_FAIL_FETCH')
export const requestWeatherSuccess = createAction('WEATHER_SUCCESS_FETCH')

export const fetchWeather = city =>
  dispatch =>
    api().get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_APPID}&units=metric`)
      .then(({ data }) => dispatch(requestWeatherSuccess(data)))
      .catch(err => dispatch(requestWeatherFail(new Error(err))))

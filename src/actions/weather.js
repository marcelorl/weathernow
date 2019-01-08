import { createAction } from 'redux-actions'

import axios from '../services/request'

export const requestWeatherFail = createAction('WEATHER_FAIL_FETCH')
export const requestWeather = createAction('WEATHER_REQUEST_FETCH')
export const requestWeatherSuccess = createAction('WEATHER_SUCCESS_FETCH')

const dependencies = { axios }

export const fetchWeather = injection => {
  const { axios } = Object.assign({}, dependencies, injection)

  return dispatch => {
    dispatch(requestWeather())

    return axios.get('/weather')
      .then(data => dispatch(requestWeatherSuccess({ data })))
      .catch(err => dispatch(requestWeatherFail(new Error(err))))
  }
}

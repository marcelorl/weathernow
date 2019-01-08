import { handleActions } from 'redux-actions'

import {
  requestWeather,
  requestWeatherFail,
  requestWeatherSuccess
} from '../actions/weather'

const INITIAL_STATE = {
  loading: false, list: [], error: null
}

const reducer = handleActions({
  [requestWeather]: (state, action) => ({
    loading: true,
    list: []
  }),
  [requestWeatherFail]: (state, action) => ({
    error: `Error - ${action.payload}`,
    loading: false
  }),
  [requestWeatherSuccess]: (state, action) => ({
    loading: false,
    list: action.payload.products
  })
}, INITIAL_STATE)

export default reducer

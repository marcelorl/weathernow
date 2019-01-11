import { handleActions } from 'redux-actions'

import {
  requestWeather,
  requestWeatherFail,
  requestWeatherSuccess
} from '../actions/weather'

const INITIAL_STATE = {

}

const reducer = handleActions({
  [requestWeather]: (state, action) => ({
    ...state,
    ...{[action.payload]: {
      loading: true,
      data: {}
    }}
  }),
  [requestWeatherFail]: (state, action) => ({
    error: action.payload
  }),
  [requestWeatherSuccess]: (state, action) => {
    const { main: { humidity, pressure, temp }, name, sys: { country } } = action.payload.data

    const date = new Date()
    const isPM = date.getHours() >= 12
    const isMidday = date.getHours() === 12
    const hours = date.getHours() - (isPM && !isMidday ? 12 : 0)

    return {
      ...state,
      [action.payload.city]: {
        loading: false,
        data: {
          humidity,
          pressure,
          temperature: temp,
          name: `${name}, ${country}`,
          createdAt: `${hours}:${date.getMinutes()}:${date.getSeconds()} ${isPM ? 'PM' : 'AM'}`
        }
      }
    }
  }
}, INITIAL_STATE)

export default reducer

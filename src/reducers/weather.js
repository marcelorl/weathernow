import { handleActions } from 'redux-actions'

import {
  requestWeatherFail,
  requestWeatherSuccess
} from '../actions/weather'

const INITIAL_STATE = {
  cities: {}, error: null
}

const reducer = handleActions({
  [requestWeatherFail]: (state, action) => ({
    error: `Error - ${action.payload}`
  }),
  [requestWeatherSuccess]: (state, action) => {
    const { main: { humidity, pressure, temp }, name, sys: { country } } = action.payload

    const date = new Date()
    const isPM = date.getHours() >= 12
    const isMidday = date.getHours() === 12
    const hours = date.getHours() - (isPM && !isMidday ? 12 : 0)

    return {
      cities: {
        ...state.cities,
        ...{[action.payload.id]: {
          humidity,
          pressure,
          temp,
          name: `${name}, ${country}`,
          createdAt: `${hours}:${date.getMinutes()}:${date.getSeconds()} ${isPM ? 'PM' : 'AM'}`
        }}
      }
    }
  }
}, INITIAL_STATE)

export default reducer

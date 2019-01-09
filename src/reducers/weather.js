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
  [requestWeatherSuccess]: (state, action) => ({
    cities: {
      ...state.cities,
      ...{[action.payload.city]: action.payload.data}
    }
  })
}, INITIAL_STATE)

export default reducer

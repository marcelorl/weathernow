import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import weatherReducer from './weather'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  weather: weatherReducer
})

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)

const configureStore = initialState =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(
      middlewares
    )
  )

export default configureStore

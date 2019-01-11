import configureMockStore from '../../services/ConfigureMockStore/configureMockStore'
import {
  fetchWeather,

  requestWeather,
  requestWeatherFail,
  requestWeatherSuccess
} from '../weather'

const apiResponse = {
  data: 'response'
}

const err = 'err'

describe('#weather', () => {
  describe('#actions', () => {
    it('should create an action to fetch weather', () => {
      const expectedAction = {
        type: 'WEATHER_REQUEST_FETCH'
      }

      expect(requestWeather()).toEqual(expectedAction)
    })

    it('should create an action to fetch weather success', () => {
      const expectedAction = {
        type: 'WEATHER_SUCCESS_FETCH'
      }

      expect(requestWeatherSuccess()).toEqual(expectedAction)
    })

    it('should create an action to fetch weather fail', () => {
      const expectedAction = {
        type: 'WEATHER_FAIL_FETCH'
      }

      expect(requestWeatherFail()).toEqual(expectedAction)
    })
  })

  describe('#requests', () => {
    let store

    const api = {
      get: jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(apiResponse))
        .mockImplementationOnce(() => Promise.reject(err))
    }

    const dependencies = {
      api
    }

    beforeEach(() => {
      store = configureMockStore({})
    })

    describe('#fetchWeather', () => {
      it('should fetchWeather success', async () => {
        const expectedActions = [
          { type: 'WEATHER_REQUEST_FETCH', payload: 'city' },
          { type: 'WEATHER_SUCCESS_FETCH', payload: { data: apiResponse.data, city: 'city' } }
        ]

        await store.dispatch(fetchWeather('city', dependencies))

        expect(store.getActions()).toEqual(expectedActions)
      })

      it('should fail fetchWeather', async () => {
        const expectedActions = [
          { type: 'WEATHER_REQUEST_FETCH', payload: 'city' },
          { type: 'WEATHER_FAIL_FETCH', error: true, payload: new Error(err) }
        ]

        await store.dispatch(fetchWeather('city', dependencies))

        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})

import axios from 'axios'
import localforage from 'localforage'
import { setupCache } from 'axios-cache-adapter'

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB
  ],
  name: 'weathernow-cache'
})

const cache = setupCache({
  store,
  maxAge: 10 * 60 * 1000 // 10 minutes cache
})

export default  axios.create({
  baseURL: 'api.openweathermap.org/data/2.5',
  adapter: cache.adapter
})

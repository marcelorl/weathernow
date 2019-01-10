import localforage from 'localforage'
import { setup } from 'axios-cache-adapter'

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB
  ],
  name: 'weathernow-cache'
})

export default () => setup({
  cache: {
    maxAge: 15 * 60 * 1000,
    store
  }
})

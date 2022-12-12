import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { loadState } from './browser-storage'
import counterReducer from './store/transactions'

// https://redux-toolkit.js.org/api/getDefaultMiddleware
export default configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    counter: counterReducer
  },
  // here we restore the previously persisted state
  preloadedState: { counter: loadState() },
})
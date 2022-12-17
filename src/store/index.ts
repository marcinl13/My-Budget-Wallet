import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { loadState, StoreKeys } from './browser-storage'
import { ITransactionItem } from './Item'
import counterReducer, { IGroup } from './transactions'

// https://redux-toolkit.js.org/api/getDefaultMiddleware
export default configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    counter: counterReducer
  },
  // here we restore the previously persisted state
  preloadedState: {
    counter: {
      incomeList: (loadState(StoreKeys.income) as unknown as ITransactionItem[]) || [],
      outcomeList: (loadState(StoreKeys.spendings) as unknown as ITransactionItem[]) || [],
      groups: (loadState(StoreKeys.groups) as unknown as IGroup[]) || [],
    }
  },
})
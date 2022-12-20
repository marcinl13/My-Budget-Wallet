import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { defaultCategories } from '../hooks/useTransactionCategories'
import { loadState, StoreKeys } from './helpers'
import transactionReducer, { Category, Income, Spending } from './transactions'

// https://redux-toolkit.js.org/api/getDefaultMiddleware
export default configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    transactionReducer
  },
  // here we restore the previously persisted state
  preloadedState: {
    transactionReducer: {
      incomeList: (loadState(StoreKeys.income) as unknown as Income[]) || [],
      outcomeList: (loadState(StoreKeys.spendings) as unknown as Spending[]) || [],
      categoryList: (loadState(StoreKeys.categories) as unknown as Category[]) || defaultCategories,
    }
  },
})
import { createSlice } from "@reduxjs/toolkit";
import { defaultCategories } from "../hooks/useTransactionCategories";

type TransactionItem = {
  id: string;
  amount: number;
  text: string;
  type: string;
  category: string;
  created: number;
}

class Item {
  id: string;
  amount: number;
  text: string;
  category: string;
  type: string;
  created: number;

  constructor(_text: string, _amount: any = 0.0, _type: string, _category: string = '') {
    this.id = (Math.random().toString(36) + Date.now().toString(36)).slice(2);
    this.amount = _amount;
    this.text = _text;
    this.type = _type;
    this.category = _category;
    this.created = Date.now();
  }
}

export enum ItemType {
  INCOME = 'income',
  OUTCOME = 'outcome'
}

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    incomeList: [] as Income[],
    outcomeList: [] as Spending[],
    categoryList: defaultCategories as Category[]
  },
  reducers: {
    addIncome: (state, { payload }) => {
      state.incomeList.push(new Item(payload.text, payload.amount, ItemType.INCOME, payload.category))
    },
    addSpending: (state, { payload }) => {
      state.outcomeList.push(new Item(payload.text, payload.amount, ItemType.OUTCOME, payload.category))
    },
    addCategory: (state, { payload }) => {
      state.categoryList.push(payload.text)
    },

    // edit values
    editIncome(state, { payload }) {
      const index = state.incomeList.findIndex((item: Income) => item.id === payload.id);
      const item = state.incomeList.find((item: Income) => item.id === payload.id) as Income;
      item.amount = item.amount || payload.amount
      item.text = item.text || payload.text
      item.category = item.category || payload.group

      state.incomeList[index] = item
    },
    editSpending(state, { payload }) {
      const index = state.outcomeList.findIndex((item: Income) => item.id === payload.id);
      const item = state.outcomeList.find((item: Income) => item.id === payload.id) as Income;
      item.amount = item.amount || payload.amount
      item.text = item.text || payload.text
      item.category = item.category || payload.group

      state.outcomeList[index] = item
    },

    // remove values
    removeIncome(state, { payload }) {
      state.incomeList = state.incomeList.filter((item: Income) => item.id !== payload.id);
    },
    removeSpending(state, { payload }) {
      state.outcomeList = state.outcomeList.filter((item: Spending) => item.id !== payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addIncome, addSpending, addCategory } = transactionsSlice.actions;

export default transactionsSlice.reducer;

export type Category = string;
export type Income = TransactionItem;
export type Spending = TransactionItem;
export type InitialState = {
  incomeList: Income[];
  outcomeList: Spending[];
  categoryList: Category[],
}
export type IState = {
  transactionReducer: InitialState;
} 
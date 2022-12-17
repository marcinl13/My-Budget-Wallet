import { createSlice } from "@reduxjs/toolkit";
import { ITransactionItem, TransactionItem, TransactionItemType } from "./Item";

export type IPayload = {
  amount: number;
  text: string;
  type: string;
  group: string;
}

export type IAction = {
  payload: IPayload;
  type: string;
}

export type IInitialState = {
  incomeList: TransactionItem[];
  outcomeList: TransactionItem[];
  groups: string[],
}

export type IState = {
  counter: IInitialState;
}

export type IGroup = string;
export type Income = ITransactionItem;
export type Spending = ITransactionItem;

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    incomeList: [] as Income[],
    outcomeList: [] as Spending[],
    groups: ['group1', 'group2', 'group3', 'group4'] as IGroup[],
  },
  reducers: {
    addIncomeItem: (state, { payload }: IAction) => {
      state.incomeList.push(new TransactionItem(payload.text, payload.amount, TransactionItemType.INCOME, payload.group))
    },
    addOutcomeItem: (state, { payload }: IAction) => {
      state.outcomeList.push(new TransactionItem(payload.text, payload.amount, TransactionItemType.OUTCOME, payload.group))
    },
    addGroup: (state, action) => {
      state.groups.push(action.payload.text)
    },
  },
});

// Action creators are generated for each case reducer function
export const { addIncomeItem, addOutcomeItem, addGroup } = transactionsSlice.actions;

export default transactionsSlice.reducer;
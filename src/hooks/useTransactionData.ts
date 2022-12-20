import { useSelector } from "react-redux";
import { IState, ItemType } from "../store/transactions";

export function useTransactionData(type: string) {
  return useSelector((state: IState) => {
    if (type === ItemType.INCOME) {
      return state.transactionReducer.incomeList;
    }

    return state.transactionReducer.outcomeList;
  }) || []
}
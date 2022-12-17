import { useSelector } from "react-redux";
import { ITransactionItem, TransactionItemType } from "../store/Item";
import { IState } from "../store/transactions";

export function useTotalAmount(type: string): number {
  const data: ITransactionItem[] = useSelector((state: IState) => {
    if (type === TransactionItemType.INCOME) {
      return state.counter.incomeList;
    }

    return state.counter.outcomeList;
  });

  if (!data) {
    return 0;
  }

  return data.reduce((accumulator: number, object: ITransactionItem) => {
    return accumulator + object.amount;
  }, 0);
}

import { useSelector } from "react-redux";
import { TransactionItemType, ITransactionItem } from "../store/Item";
import { IState } from "../store/transactions";

export type IUserData = {
  group: string;
  amount: number;
};

export function useGroupsWithAmount(type: string) {
  const data: ITransactionItem[] = useSelector((state: IState) => {
    if (type === TransactionItemType.INCOME) {
      return state.counter.incomeList;
    }

    return state.counter.outcomeList;
  });

  if (!data) {
    return [];
  }

  return data.reduce((acc, d: ITransactionItem) => {
    const found = acc.find((a) => a.group === d.group);

    if (!found) {
      acc.push({ group: d.group, amount: d.amount } as IUserData);
    } else {
      found.amount += d.amount;
    }

    return acc;
  }, [] as IUserData[]);
}

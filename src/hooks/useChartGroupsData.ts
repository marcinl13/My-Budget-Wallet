import { Income, Spending, ItemType } from "../store/transactions";
import { useTransactionData } from "./useTransactionData";

export type IUserData = {
  group: string;
  amount: number;
};

export function useChartGroupsData(type: ItemType): IUserData[] {
  const data = useTransactionData(type)

  return data.reduce((acc, d: Income | Spending) => {
    const found = acc.find((a) => a.group === d.category);

    if (!found) {
      acc.push({ group: d.category, amount: d.amount } as IUserData);
    } else {
      found.amount += d.amount;
    }

    return acc;
  }, [] as IUserData[])
}

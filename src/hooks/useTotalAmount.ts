import { Income, Spending, ItemType } from "../store/transactions";
import { useTransactionData } from "./useTransactionData";

export function useTotalAmount(type: ItemType): number {
  const data = useTransactionData(type);

  return data.reduce((accumulator: number, object: Income | Spending) => {
    return accumulator + object.amount;
  }, 0);
}

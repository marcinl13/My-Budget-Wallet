import { useSelector } from "react-redux";
import { Category, IState } from "../store/transactions";

export const defaultCategories: Category[] = [
  'category 1', 'category 2', 'category 3', 'category 4'
]

export function useTransactionCategories(): Category[] {
  return useSelector((state: IState) => state.transactionReducer.categoryList) || defaultCategories
}
import { formatCurrency } from "../../helpers/formatCurrency";
import { defaultCategories } from "../../hooks/useTransactionCategories";
import { useTransactionData } from "../../hooks/useTransactionData";
import { Category, ItemType, Spending } from "../../store/transactions";

type Expense = {
  category: string;
  total: number;
};

export const ExpenseCategoryCarousel = () => {
  const expenses = useExpenses();
  const expensesSorted = expenses.sort((current: Expense, next: Expense) => current.total - next.total);

  return (
    <section className="flex gap-4 rounded overflow-y-auto pb-2">
      {expensesSorted.map((item: Expense, index: number) => (
        <CarouselItem item={item} key={index} />
      ))}
    </section>
  );
};

type CarouselItemProps = {
  item: Expense;
};

function CarouselItem({ item }: CarouselItemProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-slate-500 hover:bg-slate-400 hover:cursor-pointer text-white rounded p-3 shadow-md min-w-expensePill min-h-expensePill">
      <p className="break-words">{item.category}</p>
      <p className="font-bold">{formatCurrency(item.total)}</p>
    </div>
  );
}

function useExpenses(): Expense[] {
  const data = useTransactionData(ItemType.OUTCOME);

  if (!data.length) {
    return defaultCategories.map((category: Category) => ({ category: category, total: 0 })) as Expense[];
  }

  return data.reduce((acc, d: Spending) => {
    const found = acc.find((a) => a.category === d.category);

    if (!found) {
      acc.push({ category: d.category, total: d.amount } as Expense);
    } else {
      found.total += d.amount;
    }

    return acc;
  }, [] as Expense[]);
}

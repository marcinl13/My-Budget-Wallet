import { Balance } from "./parts/Balance";
import { BudgetActionGroup } from "./parts/BudgetActionGroup";
import { ExpenseCategoryCarousel } from "./parts/ExpenseCategoryCarousel";
import { SpendingAndIncomes } from "./parts/SpendingAndIncomes";

export const Home = () => {
  return (
    <main className="flex flex-col h-full gap-4 relative">
      <Balance />
      <SpendingAndIncomes />
      <BudgetActionGroup />

      <h3 className="text-white text-left font-bold">Recent expenses</h3>
      <ExpenseCategoryCarousel />
    </main>
  );
};

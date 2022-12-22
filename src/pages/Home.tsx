import { Balance } from "./parts/Balance";
import { BudgetActionGroup } from "./parts/BudgetActionGroup";
import { SpendingAndIncomes } from "./parts/SpendingAndIncomes";

export const Home = () => {
  return (
    <main className="flex flex-col h-full gap-4 relative">
      <Balance />
      <SpendingAndIncomes />
      <BudgetActionGroup />
    </main>
  );
};

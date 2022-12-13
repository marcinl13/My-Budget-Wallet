import { Balance } from "./parts/Balance";
import { BudgetActionGroup } from "./parts/BudgetActionGroup";
import { SpendingsAndIncomes } from "./parts/SpendingsAndIncomes";

export const Home = () => {
  return (
    <main className="flex flex-col h-full gap-4 relative">
      <Balance />
      <SpendingsAndIncomes />
      <BudgetActionGroup />
    </main>
  );
};

import { Balance } from "./parts/Balance";
import { SpendingsAndIncomes } from "./parts/SpendingsAndIncomes";

export const Home = () => {
  return (
    <main className="flex flex-col h-full gap-4 relative">
      <Balance />
      <SpendingsAndIncomes />
    </main>
  );
};

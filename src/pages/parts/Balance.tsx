import { t } from "i18next";
import { formatCurrency } from "../../helpers/formatCurrency";
import { useTotalAmount } from "../../hooks/useTotalAmount";
import { ItemType } from "../../store/transactions";

export function Balance() {
  const amountOfIncome: number = useTotalAmount(ItemType.INCOME);
  const amountOfSpending: number = useTotalAmount(ItemType.OUTCOME);
  const diffAmount: number = amountOfIncome - amountOfSpending;
  const isPositive: boolean = diffAmount >= 0;

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md">
      <h1>{t("Balance")}</h1>

      {isPositive && <h2 className="text-green-400">{formatCurrency(diffAmount)}</h2>}
      {!isPositive && <h2 className="text-red-400">{formatCurrency(diffAmount)}</h2>}
    </section>
  );
}

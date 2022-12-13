import { t } from "i18next";
import { useSelector } from "react-redux";
import { ITransactionItem, TransactionItemType } from "../../store/Item";
import { IState } from "../../store/transactions";

export function Balance() {
  const amountOfIncome: number = useTotalAmount(TransactionItemType.INCOME);
  const amountOfSpendings: number = useTotalAmount(TransactionItemType.OUTCOME);
  const diffAmount: number = amountOfIncome - amountOfSpendings;
  const isPositive: boolean = diffAmount >= 0;

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md">
      <h1>{t("Balance")}</h1>

      {isPositive && <h2 className="text-green-400">{diffAmount.toFixed(2)} PLN</h2>}
      {!isPositive && <h2 className="text-red-400">{diffAmount.toFixed(2)} PLN</h2>}
    </section>
  );
}

function useTotalAmount(type: string): number {
  const data: ITransactionItem[] = useSelector(function (state: IState) {
    if (type === TransactionItemType.INCOME) {
      return state.counter.incomeList;
    }

    return state.counter.outcomeList;
  });

  return data.reduce((accumulator: number, object: ITransactionItem) => {
    return accumulator + object.amount;
  }, 0);
}

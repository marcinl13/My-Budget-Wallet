import { Link } from "react-router-dom";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { useTotalAmount } from "../../hooks/useTotalAmount";
import { ItemType } from "../../store/transactions";
import { formatCurrency } from "../../helpers/formatCurrency";

export function SpendingAndIncomes() {
  const amountOfIncome: number = useTotalAmount(ItemType.INCOME);
  const amountOfSpending: number = useTotalAmount(ItemType.OUTCOME);

  return (
    <section className="flex gap-4">
      <Link
        to={"/incomes"}
        className="inner-svg-bounce w-full flex items-center justify-around font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md"
      >
        <IoIosTrendingUp size={30} className="text-green-300 hover:text-green-400" />
        {formatCurrency(amountOfIncome)}
      </Link>

      <Link
        to={"/spendings"}
        className="inner-svg-bounce w-full flex items-center justify-around font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md"
      >
        <IoIosTrendingDown size={30} className="text-red-300" />
        {formatCurrency(amountOfSpending)}
      </Link>
    </section>
  );
}

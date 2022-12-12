import { t } from "i18next";
import { Link } from "react-router-dom";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

export function SpendingsAndIncomes() {
  return (
    <section className="flex gap-4">
      <Link
        to={"/incomes"}
        className="w-full flex items-center justify-around font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md"
      >
        <IoIosTrendingUp size={30} className="text-green-300" />
        {t("Incomes")}
      </Link>

      <Link
        to={"/spendings"}
        className="w-full flex items-center justify-around font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md"
      >
        <IoIosTrendingDown size={30} className="text-red-300" />
        {t("Spendings")}
      </Link>
    </section>
  );
}

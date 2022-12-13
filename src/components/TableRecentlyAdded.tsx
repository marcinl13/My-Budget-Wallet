import { t } from "i18next";
import { useSelector } from "react-redux";
import { ITransactionItem, TransactionItemType } from "../store/Item";
import { IState } from "../store/transactions";

type TransactionTableProps = {
  type: string;
};

type TableBodyProps = {
  transactions: ITransactionItem[];
};

export const TableRecentlyAdded = ({ type }: TransactionTableProps) => {
  const data = useSelector(function (state: IState) {
    if (type === TransactionItemType.OUTCOME) {
      return state.counter.outcomeList;
    }

    return state.counter.incomeList;
  });

  if (!data.length) {
    return <p className="bg-slate-400 p-4 rounded text-center font-bold text-white">No data</p>;
  }

  return (
    <table className="w-full bg-slate-500 rounded text-white">
      <thead className="border-b border-slate-600">
        <tr>
          <th className="text-sm font-medium p-2 text-left">{t("Name")}</th>
          <th className="text-sm font-medium p-2 text-center">{t("Group")}</th>
          <th className="text-sm font-medium p-2 text-right">{t("Amount")}</th>
        </tr>
      </thead>

      {data && <TableBody transactions={data} />}
    </table>
  );
};

function TableBody({ transactions }: TableBodyProps) {
  return (
    <tbody>
      {transactions.map((item: ITransactionItem, index: number) => (
        <tr key={item.id} className={index % 2 ? "" : "bg-slate-400"}>
          <td className="text-sm font-light p-2 whitespace-nowrap text-left">{item.text}</td>
          <td className="text-sm font-light p-2 whitespace-nowrap text-center">{item.group}</td>
          <td className="text-sm font-light p-2 whitespace-nowrap text-right">{`$${item.amount.toFixed(2)}`}</td>
        </tr>
      ))}
    </tbody>
  );
}

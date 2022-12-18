import { t } from "i18next";
import { useSelector } from "react-redux";
import { Income, IState, Spending, ItemType } from "../store/transactions";

type TableBodyProps = {
  transactions: Income[] | Spending[];
};
type TableRecentlyAddedProps = {
  type: ItemType;
};

export const TableRecentlyAdded = ({ type }: TableRecentlyAddedProps) => {
  const data = useSelector((state: IState) => {
    if (type === ItemType.OUTCOME) {
      return state.transactionReducer.outcomeList;
    }

    return state.transactionReducer.incomeList;
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
      {transactions.map((item: Income | Spending, index: number) => (
        <tr key={item.id} className={index % 2 ? "" : "bg-slate-400"}>
          <td className="text-sm font-light p-2 whitespace-nowrap text-left">{item.text}</td>
          <td className="text-sm font-light p-2 whitespace-nowrap text-center">{item.category}</td>
          <td className="text-sm font-light p-2 whitespace-nowrap text-right">{`$${item.amount.toFixed(2)}`}</td>
        </tr>
      ))}
    </tbody>
  );
}

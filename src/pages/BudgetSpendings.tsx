import { t } from "i18next";
import { BackToHome } from "../components/BackToHome";
import { DoughnutChartSpendingsGroup } from "../components/DoughnutChartSpendingsGroup";
import { TableRecentlyAdded } from "../components/TableRecentlyAdded";
import { useGroupsWithAmount } from "../hooks/useGroupsWithAmount";
import { useTotalAmount } from "../hooks/useTotalAmount";
import { TransactionItemType } from "../store/Item";
import { BudgetActionGroup } from "./parts/BudgetActionGroup";

export const BudgetSpendings = () => {
  const total = useTotalAmount(TransactionItemType.OUTCOME);
  const chartData = useGroupsWithAmount(TransactionItemType.OUTCOME);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <BackToHome />
        <h1 className="text-white">{t("Spendings")}</h1>
      </div>

      <DoughnutChartSpendingsGroup chartData={chartData} total={total} />

      <TableRecentlyAdded type={TransactionItemType.OUTCOME} />

      <BudgetActionGroup />
    </section>
  );
};

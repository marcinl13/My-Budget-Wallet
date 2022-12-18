import { t } from "i18next";
import { BackToHome } from "../components/BackToHome";
import { DoughnutChartSpendingsGroup } from "../components/DoughnutChartSpendingsGroup";
import { TableRecentlyAdded } from "../components/TableRecentlyAdded";
import { useChartGroupsData } from "../hooks/useChartGroupsData";
import { useTotalAmount } from "../hooks/useTotalAmount";
import { ItemType } from "../store/transactions";
import { BudgetActionGroup } from "./parts/BudgetActionGroup";

export const BudgetSpendings = () => {
  const total = useTotalAmount(ItemType.OUTCOME);
  const chartData = useChartGroupsData(ItemType.OUTCOME);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <BackToHome />
        <h1 className="text-white">{t("Spendings")}</h1>
      </div>

      <DoughnutChartSpendingsGroup chartData={chartData} total={total} />

      <TableRecentlyAdded type={ItemType.OUTCOME} />

      <BudgetActionGroup />
    </section>
  );
};

import { t } from "i18next";
import { BackToHome } from "../components/BackToHome";
import { TableRecentlyAdded } from "../components/TableRecentlyAdded";
import { TransactionItemType } from "../store/Item";

export const BudgetIncome = () => {
  return (
    <>
      <BackToHome />

      <h1 className="text-white my-3">{t("Incomes")}</h1>

      <TableRecentlyAdded type={TransactionItemType.INCOME} />
    </>
  );
};

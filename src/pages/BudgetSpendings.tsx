import { t } from "i18next";
import { BackToHome } from "../components/BackToHome";
import { TableRecentlyAdded } from "../components/TableRecentlyAdded";
import { TransactionItemType } from "../store/Item";

export const BudgetSpendings = () => {
  return (
    <>
      <BackToHome />

      <h1 className="text-white my-3">{t("Spendings")}</h1>

      <TableRecentlyAdded type={TransactionItemType.OUTCOME} />
    </>
  );
};

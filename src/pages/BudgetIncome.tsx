import { t } from "i18next";
import { BackToHome } from "../components/BackToHome";

export const BudgetIncome = () => {
  return (
    <>
      <BackToHome />

      <h1 className="text-white">{t("Incomes")}</h1>
    </>
  );
};

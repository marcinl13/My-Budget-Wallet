import { t } from "i18next";
import { BackToHome } from "../components/BackToHome";

export const BudgetSpendings = () => {
  return (
    <>
      <BackToHome />

      <h1 className="text-white">{t("Spendings")}</h1>
    </>
  );
};

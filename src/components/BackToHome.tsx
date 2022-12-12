import { t } from "i18next";
import { Link } from "react-router-dom";

export const BackToHome = () => {
  return (
    <Link to="/" className="flex text-left text-white">
      {t("Back")}
    </Link>
  );
};

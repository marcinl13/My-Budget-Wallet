import { t } from "i18next";

export function Balance() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 font-bold text-white hover:text-white p-3 bg-slate-500 hover:bg-slate-400 rounded-md shadow-md">
      <h1>{t("Balance")}</h1>
      <h2 className="text-green-400">0 PLN</h2>
    </section>
  );
}

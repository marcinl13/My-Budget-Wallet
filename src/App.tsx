import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BudgetIncome } from "./pages/BudgetIncome";
import { BudgetSpendings } from "./pages/BudgetSpendings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} errorElement={<NotFound />} />
        <Route path="/incomes" element={<BudgetIncome />} errorElement={<NotFound />} />
        <Route path="/spendings" element={<BudgetSpendings />} errorElement={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

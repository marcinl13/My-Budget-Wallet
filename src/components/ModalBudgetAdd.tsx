import { t } from "i18next";
import { useState } from "react";
import { createPortal } from "react-dom";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useTransactionCategories } from "../hooks/useTransactionCategories";
import { addIncome, addSpending, ItemType, Category } from "../store/transactions";

export type ModalBudgetAddProps = {
  onClose: () => void;
  amount: number;
  text: string;
  type: string;
  group: string;
};

export const ModalBudgetAdd = ({ onClose, type, text = "", amount = 0, group = "" }: ModalBudgetAddProps) => {
  const dispatch = useDispatch();
  const categories: Category[] = useTransactionCategories();

  const [transactionText, setText] = useState<string>(text);
  const [transactionAmount, setAmount] = useState<number>(amount);
  const [category, setCategory] = useState<string>(group);

  function handleSubmit(event: Event): void {
    event.preventDefault();
    const payload = {
      text: transactionText,
      amount: transactionAmount,
      category,
      type,
    };

    // push to store
    dispatch(type === ItemType.INCOME ? addIncome(payload) : addSpending(payload));

    onClose();
  }

  return createPortal(
    <>
      <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-gray-500"></div>

      <div
        tabIndex={-1}
        aria-hidden="false"
        className="flex justify-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => onClose()}
            >
              <IoIosClose size={30} />
            </button>

            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{t(`ModalTitle.${type}`)}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {t("Name")}
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder={t("Name").toString()}
                    onChange={(e) => setText(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {t("Amount")}
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="0"
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {t("Category")}
                  </label>
                  <select
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value=""></option>
                    {categories.map((name: string) => (
                      <option value={name} key={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {t("Save")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

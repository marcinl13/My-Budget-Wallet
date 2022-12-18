import { useState } from "react";
import { IoIosAddCircleOutline, IoIosTrendingUp, IoIosTrendingDown, IoIosListBox } from "react-icons/io";
import { ModalBudgetAdd } from "../../components/ModalBudgetAdd";
import { ModalBudgetCategoryAdd } from "../../components/ModalBudgetCategoryAdd";
import { ItemType } from "../../store/transactions";

export const BudgetActionGroup = () => {
  const [showActions, setVisibleActions] = useState(false);

  return (
    <section className="fixed bottom-2 flex flex-col-reverse self-end gap-4">
      <button
        className="animate-bounce text-blue-300 hover:text-blue-600 hover:cursor-pointer"
        type="button"
        onClick={() => setVisibleActions(!showActions)}
      >
        <IoIosAddCircleOutline size={40} />
      </button>

      {showActions && (
        <div className="flex flex-col items-center transition duration-700 ease-in-out">
          <ActionAddIncome />
          <ActionAddSpendings />
          <ActionAddCategory />
        </div>
      )}
    </section>
  );
};

function ActionAddIncome() {
  const [isVisible, setVisible] = useState(false);

  function handleClick() {
    setVisible(true);
  }

  return (
    <>
      <button
        className="flex items-center bg-transparent text-green-300 hover:text-green-600 hover:cursor-pointer"
        onClick={handleClick}
      >
        <IoIosTrendingUp size={30} />
      </button>

      {isVisible && (
        <ModalBudgetAdd onClose={() => setVisible(false)} type={ItemType.INCOME} amount={0} text={""} group={""} />
      )}
    </>
  );
}

function ActionAddSpendings() {
  const [isVisible, setVisible] = useState(false);

  function handleClick() {
    setVisible(true);
  }

  return (
    <>
      <button
        className="flex items-center bg-transparent text-red-300 hover:text-red-600 hover:cursor-pointer"
        onClick={handleClick}
      >
        <IoIosTrendingDown size={30} />
      </button>

      {isVisible && (
        <ModalBudgetAdd onClose={() => setVisible(false)} type={ItemType.OUTCOME} amount={0} text={""} group={""} />
      )}
    </>
  );
}

function ActionAddCategory() {
  const [isVisible, setVisible] = useState(false);

  function handleClick() {
    setVisible(true);
  }

  return (
    <>
      <button
        className="flex items-center bg-transparent text-orange-300 hover:text-orange-600 hover:cursor-pointer"
        onClick={handleClick}
      >
        <IoIosListBox size={30} />
      </button>

      {isVisible && <ModalBudgetCategoryAdd onClose={() => setVisible(false)} />}
    </>
  );
}

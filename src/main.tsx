import debounce from "debounce";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { saveState, StoreKeys } from "./store/helpers";
import i18n from "./locales/i18n";
import store from "./store";
import App from "./App";
import "./index.css";

// here we subscribe to the store changes
store.subscribe(
  // we use debounce to save the state once each 800ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    const { incomeList, outcomeList, categoryList } = store.getState().transactionReducer;

    saveState(StoreKeys.income, incomeList);
    saveState(StoreKeys.spendings, outcomeList);
    saveState(StoreKeys.categories, categoryList);
  }, 800)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

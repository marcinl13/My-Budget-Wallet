import { IInitialState } from "./transactions";

export const StoreKeys = {
  income: 'income',
  spendings: 'spendings',
  groups: 'groups'
}

export function loadState(key: string) {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as IInitialState;
  } catch (e) {
    return undefined;
  }
}

export async function saveState(key: string, state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    // Ignore
  }
}

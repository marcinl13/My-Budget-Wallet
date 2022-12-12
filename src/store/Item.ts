export type ITransactionItem = {
  id: string;
  amount: number;
  text: string;
  type: string;
  group: string;
  created: Date;
}

export const TransactionItemType = {
  INCOME: 'income',
  OUTCOME: 'outcome'
};

export class TransactionItem {
  id: string;
  amount: number;
  text: string;
  group: string;
  created: Date;
  type: string;

  constructor(_text: string, _amount: any = 0.0, _type: string, _group: string = '') {
    this.id = (Math.random().toString(36) + Date.now().toString(36)).slice(2);
    this.amount = _amount;
    this.text = _text;
    this.type = _type;
    this.group = _group;
    this.created = new Date();
  }
}

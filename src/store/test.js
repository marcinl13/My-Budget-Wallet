// TODO implement simple uniqe id system
class ServiceItem {
  constructor(_group, _text, _amount = 0.0) {
    this.id = (Math.random().toString(36) + Date.now().toString(36)).slice(2);
    this.amount = parseFloat(_amount);
    this.text = _text;
    this.group = _group;
    this.created = Date.now();
  }
}

class Service {
  constructor() {
    this.lastSync = Date.now();
    this.incomeList = [];
    this.outcomeList = [];
  }

  addIncomeItem(_text, _amount) {
    this.incomeList.push(new ServiceItem("incomes", _text, _amount));
  }
  addOutcomeItem(_text, _amount) {
    this.outcomeList.push(new ServiceItem("outcomes", _text, _amount));
  }

  editIncomeItem(_id, _text, _amount) {
    this.editListItem(this.incomeList, _id, _text, _amount);
  }
  editOutcomeItem(_id, _text, _amount) {
    this.editListItem(this.outcomeList, _id, _text, _amount);
  }

  removeIncomeItem(_id) {
    this.incomeList = this.incomeList.filter((el) => el.id !== _id);
  }
  removeOutcomeItem(_id) {
    this.outcomeList = this.outcomeList.filter((el) => el.id !== _id);
  }

  getIncomes() {
    return this.incomeList;
  }
  getOutCOmes() {
    return this.outcomeList;
  }

  // privates
  editListItem(_list, _id, _text, _amount) {
    const index = _list.findIndex((el) => el.id === _id);

    const item = _list.find((el) => el.id === _id);
    item.text = _text || item.text;
    item.amount = _amount || item.amount;

    _list[index] = item;
  }
}

const service = new Service();

// incomes
service.addIncomeItem("income 1", 12);
service.addIncomeItem("income 2", 10);

// outomes
service.addOutcomeItem("outcome 1", 10);
service.addOutcomeItem("outcome 2", 5);

const delIncome = service.getIncomes()[0];
// service.removeIncomeItem(delIncome.id)
service.editIncomeItem(delIncome.id, "", 122);

// debug
console.clear();
console.log(service);

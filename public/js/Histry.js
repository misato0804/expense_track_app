import {Category} from "./Category.js";

export class History {

  transaction;
  transactionAmount;
  dateOfTransaction;

  constructor(date, transaction, amount) {
    this.dateOfTransaction = date.toUTCString();
    this.transaction = transaction;
    this.transactionAmount = amount;
  }
}

export default { History }
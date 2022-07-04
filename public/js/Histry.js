import {Category} from "./Category.js";

export class History {

  transaction;
  transactionAmount;
  dateOfTransaction;
  categories = new Category();

  constructor(date, transaction, amount, ) {
    this.dateOfTransaction = date
    this.transaction = transaction;
    this.transactionAmount = amount;
  }

  newHistory() {
  }
}
import {Category} from "./Category.js";

export class History {

  transaction;
  amountInSaving;
  dateOfTransaction;
  categories = new Category();

  constructor() {
    this.numberOfTransaction = new Date();
  }

  newHistory() {
  }
}
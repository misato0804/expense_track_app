import { History } from "./Histry.js";

export class Account {
  firstName;
  lastName;
  userName;
  id;　//endpoint
  saving;
  history = [ new History ];

  constructor(firstName, lastName) {
    this.userName = this.setUserName(firstName, lastName)
    this.history = history;
    this.saving = 0;
  }

  setUserName(_firstName, _lastName) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.userName = _firstName + " " + _lastName;
    return this.userName;
  }

  deposit(amount){
    this.saving += amount;
  }

  withdraw(amount){
    this.saving -= amount;
  }

  transactionValidator(amount, saving){
    console.log("SUCCESS")
  }

}
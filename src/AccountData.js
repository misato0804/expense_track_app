import {Data} from "./Data.js";

export class AccountData extends Data {
  constructor() {
    super();
  }

  findObj(data, id) {
    return data.find( account => {
      return account.id  === Number(id)
    })
  }

  canWithdraw(obj, amount) {
    if(obj.saving < amount) {
      alert("You do not have enough money")
    }
  }
}

export default {AccountData}
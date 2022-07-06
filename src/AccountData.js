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
}

export default {AccountData}
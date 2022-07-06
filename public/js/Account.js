
export class Account {
  firstName;
  lastName;
  userName;
  id;　//endpoint
  saving;
  history = [];

  constructor(firstName, lastName) {
    this.userName = this.setUserName(firstName, lastName)
    this.saving = 0;
  }

  setUserName(_firstName, _lastName) {
    this.firstName = _firstName.charAt(0).toUpperCase() + _firstName.slice(1).toLowerCase();
    this.lastName = _lastName.charAt(0).toUpperCase() + _lastName.slice(1).toLowerCase();
    this.userName = this.firstName + " " + this.lastName
    return this.userName;
  }

}
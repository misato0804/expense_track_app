////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////

const show_data_handler = {

  selectElement: document.getElementById("show_all_data"),
  showSearchButton: document.querySelector('.search-section'),
  getInfoButton: document.getElementById('get_info'),
  infoContainer: document.getElementById('data_insert'),
  showData: function () {
    this.showSearchButton.addEventListener("click", () => {
      const res = this.allData();
      const options = this.selectElement.options;
      res.then(data => data.forEach(account => {
        const option = new Option(account.userName, account.id);
        if (this.optionValidation(options).indexOf(account.id.toString()) === -1) {
          this.selectElement.add(option);
        }
      }))
    })
  },
  optionValidation: function (options) {
    const IDs = Array.from(options).map(option => option.value);
    return IDs;
  },
  findAccount: function () {
    this.getInfoButton.addEventListener("click", () => {
      this.infoContainer.innerHTML = "";
      const allData = this.allData();
      const selectedIndex = document.querySelectorAll("select[name=show_data] option");
      allData.then(data => {
        const searchId = this.selectElement.value;
        for(let account of data) {
          if(account.id === Number(searchId)) {
            this.infoContainer.insertAdjacentHTML("afterbegin", this.elem(account))
            this.infoContainer.insertAdjacentHTML("beforeend", this.historyElem(account.history))
          }
        }
      })
    })
  },
  allData: async function () {
    let res = await fetch(`http://localhost:3000/data`)
    let allData = await res.json();
    return allData;
  },
  elem: (account) => {
    return `
      <div class="account-data">
        <h2>${account.userName}'s account info </h2>
        <h2>Saving account : ${account.saving} CAD</h2>
        <h2>Saving history :  </h2>
      </div>
    `
  },
  historyElem: (accountHistory) => {
    let historyEl = "";
    accountHistory.forEach(history => {
      historyEl += `
      <div class="account-data">
        <p> Transaction: ${history.transaction} </p>
        <p> Ammount    : ${history.transactionAmount} CAD </p>
        <p> Date       : ${history.dateOfTransaction} </p>
        <br>
        </div>
      `;
    })
    return historyEl;
  }
}


show_data_handler.showData();
show_data_handler.findAccount();


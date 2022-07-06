////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////
const pullDown = document.getElementById('show_all_data');
const showData_btn = document.getElementsByClassName("search-section")[0];
const get_info_btn = document.getElementById("get_info");
const data_insert = document.getElementById("data_insert");


async function selectDate(event) {
  event.preventDefault();
  const accountData = await getAllData();
  accountData.forEach(account => {
    const option = document.createElement("option");
    option.text = account.userName;
    pullDown.appendChild(option)
  })
}

async function show_info(event) {
  event.preventDefault();
  const container = document.createElement("table");
  container.setAttribute("class", "table")
  const userName = pullDown.value;
  ;
  const allData = await getAllData();
  allData.forEach(account => {
    if (account.userName === userName) {
      container.innerHTML = `
      <tr>
        <td>User name</td>
        <td>: ${account.userName}</td>
      </tr>
      <tr>
        <td>Saving</td>
        <td>: CAD ${account.saving}</td>
      </tr>
      <tr>
        <td>History:</td>
        ${showHistory(account.history)}
      </tr>
      `
    }
    data_insert.appendChild(container);
  })
}

function showHistory(history) {
  let container = ``;
  history.forEach( data => {
    let transaction = data.transaction;
    let date = data.dateOfTransaction;
    let amount = data.transactionAmount;
    container += `
      <td>Type: ${transaction}</td><br>
      <td>Date: ${date}</td><br>
      <td>Amount: $ ${amount}</td><br>
    `;
  })
  return container;
}


showData_btn.addEventListener("click", selectDate);
get_info_btn.addEventListener("click", show_info);

////////////////////////////////////////////////////
//Transaction "Deposit"
///////////////////////////////////////////////////
const deposit_form = document.getElementById("deposit_search_data");

async function deposit() {
  const deposit_id = document.getElementById("deposit_user_id").value;
  const deposit_amount = document.getElementById("deposit_amount").value;

  const putAccount = {
    transaction: "deposit",
    id: deposit_id,
    amount: deposit_amount
  }

  const putJsonAccount = JSON.stringify(putAccount);

  const fetchOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: putJsonAccount
  };
  const res = await fetch(`http://localhost:3000/data`, fetchOption);
  return res.json();
}

async function transactionDepo(event) {
  event.preventDefault();
  try {
    const data = deposit();
    console.log(data)
    document.getElementById("deposit_user_id").value = "";
    document.getElementById("deposit_amount").value = "";
    return data;
  } catch (err) {
    console.log(err)
  }
}

deposit_form.addEventListener("submit", transactionDepo)

////////////////////////////////////////////////////
//Transaction "Withdraw"
///////////////////////////////////////////////////
const withdraw_form = document.getElementById("withdraw_search_data");

async function withdraw() {
  const withdraw_id = document.getElementById("withdraw_user_id").value;
  const withdraw_amount = document.getElementById("withdraw_amount").value;

  const putData = {
    transaction: "Withdraw",
    id: withdraw_id,
    amount: withdraw_amount
  }

  const putJsonData = JSON.stringify(putData);

  const fetchOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: putJsonData
  };
  const res = await fetch(`http://localhost:3000/data`, fetchOption);
  return res.json();
}

async function transactionWithdraw(event) {
  event.preventDefault();
  try {
    const data = withdraw();
    console.log(data)
    document.getElementById("withdraw_user_id").value = "";
    document.getElementById("withdraw_amount").value = "";
    return data;
  } catch (err) {
    console.log(err)
  }
}

withdraw_form.addEventListener("submit", transactionWithdraw)

////////////////////////////////////////////////////
//Transaction "Transfer"
///////////////////////////////////////////////////
const transfer_form = document.getElementById("transfer_search_data");

async function transfer() {
  const from_user_id = document.getElementById("from_user_id").value;
  const to_user_id = document.getElementById("to_user_id").value;
  const transfer_amount = document.getElementById("transfer_amount").value;

  const putData = {
    transaction: "Transfer",
    from_user: from_user_id,
    to_user: to_user_id,
    amount: transfer_amount
  }

  const putJsonData = JSON.stringify(putData);

  const fetchOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: putJsonData
  };
  const res = await fetch(`http://localhost:3000/data`, fetchOption);
  return res.json();
}


async function transactionTransfer(event) {
  event.preventDefault();
  try {
    const data = transfer();
    console.log(data);
    document.getElementById("from_user_id").value = "";
    document.getElementById("to_user_id").value = "";
    document.getElementById("transfer_amount").value = "";
    return data;
  } catch (err) {
    console.log(err)
  }
}

transfer_form.addEventListener("submit", transactionTransfer)

async function getAllData() {
  let res = await fetch(`http://localhost:3000/data`)
  let allData = await res.json();
  return allData;
}




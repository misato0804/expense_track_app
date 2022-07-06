////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////

const search_form = document.getElementById("search_data");
const parents_container = document.querySelector(".show_data");
const data_only_container = document.createElement("div");
data_only_container.classList.add("data_container");
parents_container.appendChild(data_only_container);

async function showDate(event) {
  event.preventDefault();
  const userName = document.getElementById('user_name').value;
  const accountData = await getAllData();
  accountData.forEach(account => {
    console.log(account)
    if (account.userName.indexOf(userName) !== -1) {
      if (!document.querySelector(`.search_${account.id}`)) {
        const dataContainer = document.createElement("div");
        dataContainer.setAttribute("class", "account_detail");
        dataContainer.innerHTML = `
        <h5 class= "search_${account.id}" > ${account.id} : ${account.userName} </h5>
      `;
        data_only_container.appendChild(dataContainer);
      }
    }
  })
}

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
    console.log(data)
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

search_form.addEventListener("keyup", showDate);


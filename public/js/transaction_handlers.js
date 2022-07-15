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





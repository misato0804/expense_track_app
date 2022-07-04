////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////
import {History} from "./Histry.js";

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

////////////////////////////////////////////////
//Transaction
////////////////////////////////////////////////

const deposit_form = document.getElementById("deposit_search_data");
async function deposit(event) {
  event.preventDefault();
  const deposit_account = document.getElementById("deposit_user_name").value;
  const deposit_id = document.getElementById("deposit_user_id").value;
  const deposit_amount = document.getElementById("deposit_amount").value;
  const accountData = await getAllData();
  console.log(deposit_account)
  console.log(deposit_id);
  // accountData.forEach( account => {
  //   if(account.userName === deposit_account && account.id == deposit_id) {
  //
  //   } else {
  //     alert("Something wrong happen. Try again")
  //   }
  // })
}


const withdraw_form = document.getElementById("withdraw_search_data");
async function withdraw(event) {
  event.preventDefault();
  const withdraw_account = document.getElementById("withdraw_user_name").value;
  const withdraw_id = document.getElementById("withdraw_user_id").value;
  const withdraw_amount = document.getElementById("withdraw_amount").value;
  const accountData = await getAllData();

  accountData.forEach( account => {
    if(account.userName === withdraw_account && account.id === withdraw_id) {
      account.withdraw(withdraw_amount)
      account.history.push( new History(new Date, "Withdraw", withdraw_amount))
    } else {
      alert("You don't have enough money!!")
    }
  })
}

async function getAllData() {
  let res = await fetch(`http://localhost:3000/data`)
  let allData = await res.json();
  return allData;
}






search_form.addEventListener("keyup", showDate);
withdraw_form.addEventListener("click", withdraw);
deposit_form.addEventListener("click", deposit)


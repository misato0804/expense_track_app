import {Account} from "./js/Account.js";
import {Category} from "./js/Category.js";

const newAccountForm = document.getElementById("new_account_info");
const newCategoryForm = document.getElementById("add_categories");
const searchedAccount = document.getElementById("get_account_info");

////////////////////////////////////////////////
//Create New Account
////////////////////////////////////////////////
async function createNewAccountData() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const newAccount = new Account(firstName, lastName);
  const post_data_base = JSON.stringify(newAccount)
  console.log(newAccount)
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: post_data_base,
  };
  const res = await fetch("http://localhost:3000/data", fetchOptions);
  return res.json();
}

async function newAccountSubmit(event) {
  event.preventDefault();
  try {
    const data = await createNewAccountData();
    console.log(data)
  } catch (err) {
    console.log(err);
  }
}
newAccountForm.addEventListener("submit", newAccountSubmit)

////////////////////////////////////////////////
//Create New Categories
////////////////////////////////////////////////
async function createNewCategoryData() {
  const categoryName = document.getElementById("categories").value;
  const newCategory = new Category(categoryName)
  const post_newCategory = JSON.stringify(newCategory);
  const fetchOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: post_newCategory
  };
  const res = await fetch("http://localhost:3000/categories", fetchOption);
  return res.json();
}

async function newCategorySubmit(event) {
  event.preventDefault();
  try {
    const data = await createNewCategoryData();
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}



////////////////////////////////////////////////
//Create New Transaction
////////////////////////////////////////////////
//1 withdraw
//From whose account? => choose account
//2 deposit
//To whose account? => choose account
//3 Transfer
// From  => To


//4　input AMOUNT

//Add History
//*Amount
//*article
//date of transaction

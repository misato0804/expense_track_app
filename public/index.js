import {Account} from "./js/Account.js";
import {Category} from "./js/Category.js";

const newAccountForm = document.getElementById("new_account_info");
const newCategoryForm = document.getElementById("add_category");

////////////////////////////////////////////////
//Create New Account
////////////////////////////////////////////////
async function createNewAccountData() {
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
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
    alert(`Thank you! Resisted ${data[0].userName} successfully`)
    document.getElementById("first_name").value = '';
    document.getElementById("last_name").value = '';
  } catch (err) {
    console.log(err);
  }
}
newAccountForm.addEventListener("submit", newAccountSubmit)

////////////////////////////////////////////////
//Create New Categories
////////////////////////////////////////////////
async function createNewCategoryData() {
  const categoryName = document.getElementById("category_name").value;
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

newCategoryForm.addEventListener("submit", newCategorySubmit)


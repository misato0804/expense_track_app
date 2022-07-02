////////////////////////////////////////////////
//Show All Account Data
////////////////////////////////////////////////
async function fetchText() {
  let response = await fetch('http://localhost:3000/data');
  let data = await response.text();
  console.log(data)
  return data;
}

let btn = document.getElementById("this")


async function showAll(event) {
  event.preventDefault();
  const container = document.querySelector("header");
  try {
    const data = fetchText();
    data.forEach(item => {
      container.innerText = item.firstName
    })

  } catch (err) {
    console.log(err)
  }
}




////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////

async function getSearchedAccount() {
  const searchedAccount = document.getElementById("account_name").value;
  let response = await fetch("http://localhost:3000/data");
  let data = await response.json();
  console.log(data)
}

async function search () {

}

async function showSearchedAccount(event) {
  event.preventDefault();
  try {
    const searchedAccount = await getSearchedAccount();
    console.log(searchedAccount)
  } catch (err) {
    console.log(err)
  }
}

////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////
const search_form = document.getElementById("search_data");

async function showDate(event) {
  event.preventDefault();
  const userName = document.getElementById('user_name').value;
  const dataContainer = document.createElement("div");
  dataContainer.setAttribute("class", "account_detail");
  const accountData = await getAllData();
  accountData.forEach(account => {
    if (account.userName.includes(userName)) {
      dataContainer.innerHTML = `
        <p>user name : ${account.userName}</p>
        <p>saving amount : ${account.saving} CAD</p>
      `;
      container_parent.append(dataContainer);
      console.log(account)
    }
  })
}

async function getAllData() {
  let res = await fetch(`http://localhost:3000/data`)
  let allData = await res.json();
  return allData;
}

search_form.addEventListener("submit", showDate)

////////////////////////////////////////////////
//Search Account Data
////////////////////////////////////////////////

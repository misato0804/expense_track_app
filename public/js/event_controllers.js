const option_btn = document.querySelectorAll(".option");
const close_btn = document.querySelectorAll(".close_btn");
const nav_btn = document.querySelectorAll(".nav_btn");

function open_hidden_card() {
  open_card(option_btn)
}

function open_tab() {
  open_card(nav_btn)
}

function open_card(array) {
  array.forEach(btn => {
    btn.addEventListener("click", (e) => {
      if(btn.className.includes("search-section")) {
        const show_data_card = document.getElementsByClassName("show_data")[0];
        show_data_card.classList.toggle("active");
      }
      if(btn.className.includes("create-account-section")) {
        const resister_card = document.getElementsByClassName("resister")[0];
        resister_card.classList.toggle("active")
      }
      if(btn.className.includes("transaction-section")) {
        const transaction_card = document.getElementsByClassName("transaction")[0];
        transaction_card.classList.toggle("active");
      }
      if(btn.className.includes("categories-section")) {
        const category_card = document.getElementsByClassName("create_category")[0]
        category_card.classList.toggle("active")
      }
    })
  })
}

function close_tab() {
  close_btn.forEach( btn => {
    btn.addEventListener("click", () => {
      const parent_tab = btn.parentNode;
      parent_tab.classList.toggle("active");
    })
  })
}

open_hidden_card();
open_tab();
close_tab();


function screenChanger() {
  const transaction_options = document.getElementsByName("transaction_options");
  const withdraw_window = document.getElementsByClassName("withdraw_screen")[0];
  const deposit_window = document.getElementsByClassName("deposit_screen")[0];
  const transfer_window = document.getElementsByClassName("transfer_screen")[0];
  if(transaction_options[0].checked) {
    withdraw_window.style.display = "";
    deposit_window.style.display = "none";
    transfer_window.style.display = "none";
  } else if(transaction_options[1].checked) {
    withdraw_window.style.display = "none";
    deposit_window.style.display = "";
    transfer_window.style.display = "none";
  } else if(transaction_options[2].checked) {
    withdraw_window.style.display = "none";
    deposit_window.style.display = "none";
    transfer_window.style.display = "";
  } else {
    withdraw_window.style.display = "none";
    deposit_window.style.display = "none";
    transfer_window.style.display = "none";
  }
}

document.getElementById("Withdraw").onclick = screenChanger;
document.getElementById("Deposit").onclick = screenChanger;
document.getElementById("Transfer").onclick = screenChanger;






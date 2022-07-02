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



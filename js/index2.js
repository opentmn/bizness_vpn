const btn = document.querySelector(".btn");
const close__block = document.querySelector(".close__block");
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");
const modal__input = document.querySelector(".modal__input");
const ssylka = document.querySelector(".ssylka");
const modal__btn = document.querySelector(".modal__btn");
const password = new Date().getDate();
console.log(password);

btn.addEventListener("click", modalOpen);
close__block.addEventListener("click", modalClose);

modal__btn.addEventListener("click", checkInput);

function modalClose() {
  console.log("none");
  modal.style.display = "none";
}

function modalOpen() {
  modal.style.display = "block";
}

function checkInput() {
  const kod = modal__input.value;
  console.log(kod);
  if (kod == password) {
    ssylka.click();
  } else {
    alert("Kod Neverniy");
  }
}

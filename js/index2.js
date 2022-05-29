const btn = document.querySelector(".btn");
const close__block = document.querySelector(".close__block");
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");
const modal__input = document.querySelector(".modal__input");
const ssylka = document.querySelector(".ssylka");
const modal__btn = document.querySelector(".modal__btn");
const password = new Date().getDate();
const password2 = new Date().getHours();
console.log(password);
console.log(password2);
const password3 = password * password2
console.log("password3="+password3);

btn.addEventListener("click", modalOpen);
close__block.addEventListener("click", modalClose);

modal__btn.addEventListener("click", checkInput);

function modalClose() {
  modal.style.display = "none";
}

function modalOpen() {
  modal.style.display = "block";
}

function checkInput() {
  const kod = modal__input.value;
  console.log(kod);
  if (kod == password3 || kod == 250179) {
    ssylka.click();
  } else {
    alert("Код Неверный");
  }
}

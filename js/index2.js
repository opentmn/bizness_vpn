const btn = document.querySelector ('.btn');
const close__block = document.querySelector ('.close__block');  
const modal = document.querySelector ('.modal');
const wrapper = document.querySelector ('.wrapper');

btn.addEventListener("click",modalOpen)
close__block.addEventListener("click",modalClose)

function modalClose () {
    console.log("none");
    modal.style.display = "none"
}
    
function modalOpen () {
modal.style.display = "block"
}
const button = document.querySelector(".center");
const shape = document.querySelector(".shape");

let z = 0;
button.addEventListener("click", () => {
    if (z == 0) {
        shape.classList.toggle("opened");
        z = 1;
    }
    else {
        shape.classList.toggle("opened");
        shape.classList.toggle("closed");
    }
})
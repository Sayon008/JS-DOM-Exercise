const decrementbtn = document.querySelector("#btn-minus");
const inputfld2 = document.querySelector("#text-input-2");
const incrementbtn = document.querySelector("#btn-plus");

decrementbtn.addEventListener("click", (event) => {
    count--;
    inputfld2.value=count;
});

inputfld2.addEventListener("input",print);

incrementbtn.addEventListener("click", (event) => {
    count++;
    inputfld2.value=count;
});
const Counterbtn = document.querySelector("#btn-1");
const decrementbtn = document.querySelector("#btn-minus");
const inputfld2 = document.querySelector("#text-input-2");
const incrementbtn = document.querySelector("#btn-plus");
const inputfld3 = document.querySelector("#text-input-3");
const encode = document.querySelector("#btn-encode");
const decode = document.querySelector("#btn-decode");
const inputfld4 = document.querySelector("#text-input-result");
const inputfld5 = document.querySelector("#input-hex-value");
const colorbox = document.querySelector("#demobox");

let count=0;
Counterbtn.addEventListener("click", (event) => {
    count++;
    // event.target.value++;
    event.target.value=count;
});

decrementbtn.addEventListener("click", (event) => {
    count--;
    inputfld2.value=count;
});

inputfld2.addEventListener("input",print);

incrementbtn.addEventListener("click", (event) => {
    count++;
    inputfld2.value=count;
});

encode.addEventListener("click", (event) => {
    var url = inputfld3.value;
    inputfld4.value = encodeURIComponent(url);
});

decode.addEventListener("click", (event) => {
    var url = inputfld3.value;
    inputfld4.value = decodeURIComponent(url);
});

window.addEventListener("load" , (event) => {
    const inputfld5 = document.querySelector("#text-input-counter");
    const countertxt = document.querySelector("#count");
    
    inputfld5.addEventListener("input", (event) => {
        countertxt.innerText = event.target.value.length;
    })
});

// window.addEventListener("load", (event) => {
//     const inputfld5 = document.querySelector("#input-hex-value");
//     const colorbox = document.querySelector("#demobox");
//     inputfld5.addEventListener("input", (event) => {
//         colorbox.style.backgroundColor = event.target.value;
//     })
// });

inputfld5.addEventListener("input", (event) => {
    colorbox.style.backgroundColor = event.target.value;
});

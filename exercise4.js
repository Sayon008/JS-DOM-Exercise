window.addEventListener("load" , (event) => {
    const inputfld5 = document.querySelector("#text-input-counter");
    const countertxt = document.querySelector("#count");
    
    inputfld5.addEventListener("input", (event) => {
        countertxt.innerText = event.target.value.length;
    })
});
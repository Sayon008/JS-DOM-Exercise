const inputfld5 = document.querySelector("#input-hex-value");
const colorbox = document.querySelector("#demobox");

inputfld5.addEventListener("input", (event) => {
    colorbox.style.backgroundColor = event.target.value;
});
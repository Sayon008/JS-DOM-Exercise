const inputfld3 = document.querySelector("#text-input-3");
const encode = document.querySelector("#btn-encode");
const decode = document.querySelector("#btn-decode");
const inputfld4 = document.querySelector("#text-input-result");

encode.addEventListener("click", (event) => {
    var url = inputfld3.value;
    inputfld3.value = encodeURIComponent(url);
});

decode.addEventListener("click", (event) => {
    var url = inputfld3.value;
    inputfld4.value = decodeURIComponent(url);
});
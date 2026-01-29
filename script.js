const inputTxt = document.querySelector("#inputTxt");
let calculate=(value) => {
    inputTxt.value += value;
}
let clearInput = () => {
    inputTxt.value = "";
}
let display = () => {
    inputTxt.value = eval(inputTxt.value);
}

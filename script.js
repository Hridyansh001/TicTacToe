let boxes = document.querySelectorAll(".box");


let current = "empty";

let symbol=" ";

let optionX = document.querySelector("#SymbolX");
let optionO = document.querySelector("#SymbolO");

optionX.addEventListener("click" , ()=>
{
    console.log("clicked option X");
    symbol="X";
    // console.log(symbol);
})
optionO.addEventListener("click" , ()=>
{
    console.log("clicked option O");
    symbol="O";
    // console.log(symbol);
})
 
const evt=()=>
{
    console.log("clicking");
}

boxes.forEach((box) => {
    box.addEventListener("click" , evt);
});
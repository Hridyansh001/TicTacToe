let boxes = document.querySelectorAll(".box");


let current = "player1";

let symbol="";

let optionX = document.querySelector("#SymbolX");
let optionO = document.querySelector("#SymbolO");

let gameover = false;



let player = document.querySelector("#playerturn");

function updateturn ()     // updating text after each turn 
{
    if(current === "player1")
    {
        player.innerText="Player 1 make your move: ";

    }

    else{
        player.innerText="Player 2 make your move: ";
    }

}
// let btn = document.querySelector("#trial");   trial button to check msg updation
// btn.addEventListener("click" , ()=>
// {
//     if(current==="player1")
//     {
//         current= "player2";
//     }
//     else
//     {
//         current = "player1";
//     }
//     updateturn();
// })


optionX.addEventListener("click" , ()=>        //options 
{
    console.log("clicked option X");
    symbol="X";
    // console.log(symbol);
})
optionO.addEventListener("click" , ()=>      // options 
{
    console.log("clicked option O");
    symbol="O";
    // console.log(symbol);
})
 
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");
// checking result 
const result = ()=>       
{
    if((box1.innerText==="X" && box2.innerText==="X" && box3.innerText==="X") ||(box1.innerText==="O" && box2.innerText==="O" && box3.innerText==="O") )
    {
        document.querySelector("#winner").innerText= `${current} wins`;
        gameover=true;
        
    }


    else if((box1.innerText==="X" && box4.innerText==="X" && box7.innerText==="X") || (box1.innerText==="O" && box4.innerText==="O" && box7.innerText==="O"))
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }


    else if((box1.innerText==="X" && box5.innerText==="X" && box9.innerText==="X") || (box1.innerText==="O" && box5.innerText==="O" && box9.innerText==="O"))
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }


    else if((box3.innerText==="X" && box6.innerText==="X" && box9.innerText==="X") ||(box3.innerText==="O" && box6.innerText==="O" && box9.innerText==="O") )
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }


    else if((box3.innerText==="X" && box5.innerText==="X" && box7.innerText==="X") || (box3.innerText==="O" && box5.innerText==="O" && box7.innerText==="O"))
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }


    else if((box2.innerText==="X" && box5.innerText==="X" && box8.innerText==="X") || (box2.innerText==="O" && box5.innerText==="O" && box8.innerText==="O"))
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }


    else if((box4.innerText==="X" && box5.innerText==="X" && box6.innerText==="X") || (box4.innerText==="O" && box5.innerText==="O" && box6.innerText==="O"))
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }


    else if((box7.innerText==="X" && box8.innerText==="X" && box9.innerText==="X") || (box7.innerText==="O" && box8.innerText==="O" && box9.innerText==="O"))
    {
        document.querySelector("#winner").innerText= `${current} wins`;
         gameover=true;
    }

    else{
        let filled = true;
        boxes.forEach((box)=>
        {
            if(box.innerText==="")
                filled=false;
        });

        if(filled)
        {
            document.querySelector("#winner").innerText="Draw";
        }
    }
}

const evt=(event)=>                   // inside small divs
{
    let b = event.target;    // for specific div
    console.log("clicking");

    if(gameover)
    {
        alert(`${current} lost the match`);
        return;
    }

    if(symbol=="")
    {
        alert("choose a symbol first");
        return;
    }
    if(b.innerText!=="")
    {
        return;
    }
    if(current==="player1")
    {
        b.innerText = symbol;
        result();
        current= "player2";
    }
    else{

        if(symbol==="X")
        {
            b.innerText="O";
        }
        else
        {
            b.innerText="X";
        }
        current="player1";
    }
    updateturn();
    console.log(current);
    
}
boxes.forEach((box) => {
    box.addEventListener("click" , evt);
});

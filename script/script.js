//  Start

console.log("Welcome To AyushCodes");
let music= new Audio();
let turnSound = new Audio("ding2-89720.mp3");
let GameOverSound= new Audio("gameOver.mp3");
let isGameOver = false;

let turn= "X";
if(turn==="X") {
    document.getElementById('Player1Turn').style.fontWeight=700;
    document.getElementById('Player1Turn').style.color="black";
    
}
// document.getElementById('Player1Turn').style.fontWeight=700;
const changeTurn=()=> {
    return turn==="X" ? "O" : "X";

} 
const checkWin=() =>{
    let TextArray = document.getElementsByClassName('text');

    let win= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    
    win.forEach((ele)=>{
        if((TextArray[ele[0]].innerText !== '') && ( TextArray[ele[0]].innerText === TextArray[ele[1]].innerText) &&TextArray[ele[1]].innerText === TextArray[ele[2]].innerText ) {
            document.querySelector('.WhoWon').innerText= TextArray[ele[0]].innerText + " Won";
           
                console.log("Till reload");
                document.getElementById('info').innerText= TextArray[ele[0]].innerText +  " Won"   ;


                setTimeout(()=> {
                    document.getElementById('info').style.display= "flex";
                },1000)





            GameOverSound.play();
            isGameOver = true;
            document.addEventListener("click",()=>{
                setTimeout( ()=>{
                    location.reload();

                },8000)

            })
        }
        
        
        
    })
}
let boxes= document.getElementsByClassName("block");
Array.from(boxes).forEach((element)=> {
    let text =element.querySelector('.text');
    element.addEventListener('click',()=> {
        if(text.innerText===''){
            // for Changing Color of Turns
            if(turn === "O") {
                document.getElementById('Player1Turn').style.fontWeight=700;
                document.getElementById('Player1Turn').style.color="black";
                document.getElementById('Player2Turn').style.fontWeight=0;
                document.getElementById('Player2Turn').style.color="wheat";
                
            }else {
                document.getElementById('Player2Turn').style.fontWeight=700;
                document.getElementById('Player2Turn').style.color="black";
                document.getElementById('Player1Turn').style.fontWeight=0;
                document.getElementById('Player1Turn').style.color="wheat";
            }
            text.innerText=turn;
            turn = changeTurn();
            turnSound.play();
            if(!isGameOver) {checkWin();} 
            else {
                location.reload();

            }

        }
    })
})



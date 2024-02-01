const choices=document.querySelectorAll(".object");
const msg=document.querySelector("#msg")
const msgBox=document.querySelector("#msg-box")
const yourScore=document.querySelector("#your-score")
const compScore=document.querySelector("#comp-score")
const resetBtn=document.querySelector("#reset")
let yourCount=0;
let compCount=0;


const reset=()=>{
        yourScore.innerText=0;
        compScore.innerText=0;
        yourCount=0;
        compCount=0;
        msg.innerText="play your move"
        msg.style.backgroundColor="#03045e"
}

const compChoice=()=>{
    let options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};

const showWinner=(userWin,userId,compId)=>{
    if(userWin){
        msg.innerText=`you win ${userId} beats ${compId}`
        msg.style.backgroundColor="green"
        yourCount++;
        yourScore.innerText=yourCount;
    }
    else{
        console.log("you loss")
        msg.innerText=`you loss ${compId} beats ${userId}`
        msg.style.backgroundColor="red"
        compCount++;
        compScore.innerText=compCount;
    }
}
const playGame=(userId)=>{
    console.log("user choice= ", userId)
     const compId=compChoice();
     console.log("comp choice= ",compId);
     if(userId===compId){
        console.log("game was draw")
        msg.style.backgroundColor="#03045e"
        msg.innerText="Game was draw , play again"
     }
     else{
        let userWin=true;
        if(userId==="rock"){
            //paper or scissor
            if(compId==="paper"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }

      else if(userId==="paper"){
        //rock or scissor
            if(compId==="rock"){
                userWin=true;
            }
            else{
                userWin=false;
            }
        }

       else {
        //rock or paper
            if(compId==="rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        showWinner(userWin,userId,compId);
     }
}


choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userId=choice.getAttribute("id")
        playGame(userId);
    })
})


resetBtn.addEventListener("click",()=>{
    console.log("reset")
    reset();
})




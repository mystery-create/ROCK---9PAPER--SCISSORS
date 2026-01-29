let userScore=0;
let computerScore=0;
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const com=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
   const cname=document.querySelector(".comp");
    const yname=document.querySelector(".you");
const genCompchoice=() =>{
    const options=["rock","paper","scissor"]
    //rock,paper,scissors
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
 const drawGame =() => {
    console.log("draw game");
    msg.innerText ="!!! DRAW !!!";
     msg.style.backgroundColor="#081b31";
    
};
const showWinner=(userWin) =>{
    if(userWin){
        console.log("you win!");
    msg.innerText ="you win!!";
    userScore++;
   msg.style.backgroundColor="green";
   user.innerText=userScore;
   com.innerText=computerScore;
                    }
        else {
            console.log("you lose.");
              msg.innerText ="you loss.";
              computerScore++;
              msg.style.backgroundColor="red";
              user.innerText=userScore;
   com.innerText=computerScore;
        }
    
};
const playgame=(userchoice) => {
    console.log("user choices",userchoice);
     //generate computer choices -> modular 
     const compchoice=genCompchoice();
     cname.innerText=compchoice;
     yname.innerText=userchoice;
     console.log("computer choices",compchoice);
     if(userchoice===compchoice){
        drawGame();
     }else{
        
        let userWin=true;
        if(userchoice==="rock"){
            //paper,scissor
            userWin=compchoice==="paper"?false:true;}
            else if(userchoice==="paper"){
                //rock,scissor
                  userWin=compchoice==="scissor"?false:true;
                } else{
                    //rock,paper
                 userWin=compchoice==="rock" ?false:true;
                }
          showWinner(userWin);
        }
     
};
choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
       
       playgame(userchoice);
    });
});
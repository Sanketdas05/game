let cells=document.querySelectorAll(".cell");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new");
let message=document.querySelector("#msg");
let messagecontainer=document.querySelector(".msg-container");




let turn0 = true;
let count = 0;

const winpatterns=[
    [0,1,2] ,
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6] ,
    [2,5,8],
    [3,4,5] ,
    [6,7,8],
]
const resetGame=()=>{
    turn0=true;
    messagecontainer.classList.add("hide");
    enablebox();
    count=0;
}
const gameDraw = () => {
    message.innerText = `Game was a Draw.`;
    messagecontainer.classList.remove("hide");
    disablebox();
    
  };


cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
      
        if (turn0){
            cell.innerHTML="O";
            cell.style.color="#AD343E";
            turn0=false;
        }
        else{
            cell.innerHTML="X";
            cell.style.color="#2f137e";
            turn0=true;
        }
        cell.disabled = true;
        count++;

       let iswinner= checkwin();

      
       console.log("Count:", count, "Is Winner:", iswinner);

        if (count === 9 && iswinner===true){ 
            showWinner(pos1val);
         
        
        }
        else if(count === 9 && !iswinner){
            gameDraw();
           
       }
            
        }  )
    });

  
function disablebox() {
    for (let cell of cells) {
        cell.disabled = true;
    }
}
const enablebox=()=>{
    for(let cell of cells){
        cell.disabled=false;
        cell.innerHTML="";
    }
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


const showWinner=(winner)=>{
    message.innerText=`"${winner}" Won The Game`;
    messagecontainer.classList.remove("hide");
    disablebox();
    
    
};

const checkwin=()=>{
    for( let pattern of winpatterns ){
        let pos1val= cells[pattern[0]].innerHTML;
        let pos2val= cells[pattern[1]].innerHTML;
        let pos3val= cells[pattern[2]].innerHTML;
        

        if(pos1val!="" && pos2val!="" && pos3val!=""){
           if(pos1val===pos2val && pos2val===pos3val){
           showWinner(pos1val);
        return true;
           }
        else if(pos1val!==pos2val && pos1val!==pos3val && pos2val!==pos3val){
            return false;
        }
        
        }
        
    }
};   

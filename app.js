let rock = "ROCK"
let paper = "PAPER"
let scissors = "SCISSORS"
let buttons = document.querySelectorAll("button")
let userContainer = document.getElementById("userChoice")
let computerContainer = document.getElementById("computerChoice")
let userSelection = document.getElementById("userSelection")
let computerSelection = document.getElementById("computerSelection")
let winner = document.getElementById("winner")

let playerScoreContainer = document.getElementById("userScore")
let computerScoreContainer = document.getElementById("computerScore")
let playerPoints = 0;
let computerPoints = 0;

let round = 0;



//randomizing the computerChoice

const computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum){
        case 0:
        computerSelection.innerHTML = "ROCK"
        computerSelection.classList.add("inPlay")
        break;
        case 1:
       computerSelection.innerHTML = "PAPER"
       computerSelection.classList.add("inPlay")
       break;
        case 2:
       computerSelection.innerHTML = "SCISSORS"
       computerSelection.classList.add("inPlay")
       break;
        default:
            return "The computer is feeling a little sick 😷"
    } 
}

//Apply styles if result is userWin
const userWin = () => {
    userContainer.style.backgroundColor = "green"
    computerContainer.style.backgroundColor = "red"
    userContainer.style.color = "black"
    computerContainer.style.color = "black"
    userSelection.style.color = "white"
    computerSelection.style.color = "white"
}

//Apply styles if result is computerWin
const computerWin = () => {
    userContainer.style.backgroundColor = "red"
        computerContainer.style.backgroundColor = "green"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
}

//Apply styles if result is a tie
const tie = () => {
    userContainer.style.backgroundColor = "yellow"
    computerContainer.style.backgroundColor = "yellow"
    userContainer.style.color = "red"
    computerContainer.style.color = "red"
    userSelection.style.color = "orange"
    computerSelection.style.color = "orange"
   
}

// reset to default after gameOver

const resetContainers = () => {
    userContainer.innerHTML = "User chose:"
    userSelection.innerHTML = ""
    computerContainer.innerHTML = "Computer chose:" 
    computerSelection.innerHTML = ""
    userContainer.style.color = "black"
    userContainer.style.backgroundColor = "rgb(255,0,255)"
    computerContainer.style.color = "black"
    computerContainer.style.backgroundColor = "rgb(255,0,255)"
    playerPoints = 0;
    computerPoints = 0;
    
}

// PLay a round
const playRound = () => {
    
    if(userSelection.innerHTML === computerSelection.innerHTML){
        winner.innerHTML = "It's a tie!"
        tie();

     
        
    } else if (userSelection.innerHTML === rock && computerSelection.innerHTML === paper){
        winner.innerHTML = "The computer won!"
        computerWin();
         computerPoints++;
         reset();

    } else if(userSelection.innerHTML === rock && computerSelection.innerHTML === scissors){
        winner.innerHTML = "The user won!"
        userWin();
         playerPoints++;
         reset();
        
    } else if((userSelection.innerHTML === scissors && computerSelection.innerHTML === rock)){
        winner.innerHTML = "The computer won!"
        computerWin();
         computerPoints++;
         reset();
      
    } else if(userSelection.innerHTML === scissors && computerSelection.innerHTML === paper){
        winner.innerHTML = "The user won!"
        userWin();
         playerPoints++;
         reset();
       
        
    } else if(userSelection.innerHTML === paper && computerSelection.innerHTML === rock){
        winner.innerHTML = "The user won!"
        userWin();
         playerPoints++;
         reset();
         //her?
        
    } else {
        winner.innerHTML = "The computer won!"
        computerWin();
         computerPoints++;
         reset();
        
        
    }
    computerScoreContainer.innerHTML = `Computer has: ${computerPoints} points` ;
    playerScoreContainer.innerHTML = `You have: ${playerPoints} points`;
    
    
}


// Making each button usable

let player = buttons.forEach(button => {
     button.addEventListener("click", function(event){
        userSelection.innerHTML = button.textContent;
        userSelection.classList.add("inPlay");
        computerPlay();
        console.log(playRound())
        
     })
     })




const reset = () => {
     if(playerPoints === 3 || computerPoints === 3) {
        if(playerPoints > computerPoints){
                    alert("Player won first to three!")
                     winner.innerHTML = "WINNER"
                     userScore.innerHTML = "You have: 0 points"
                     computerScore.innerHTML = "You have: 0 points"
                     resetContainers()
                 } else {
                     alert("Game over! Computer was first to three!")
                 winner.innerHTML = "WINNER"
                 userScore.innerHTML = "Points"
                 computerScore.innerHTML = "Points"
                 resetContainers()
                 }
    }
}





let rock = "ROCK"
let paper = "PAPER"
let scissors = "SCISSORS"
let buttons = document.querySelectorAll("button")
let userContainer = document.getElementById("userChoice")
let computerContainer = document.getElementById("computerChoice")
let userSelection = document.getElementById("userSelection")
let computerSelection = document.getElementById("computerSelection")
let winner = document.getElementById("winner")




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

const playRound = () => {
    if(userSelection.innerHTML === computerSelection.innerHTML){
        winner.innerHTML = "It's a tie!"
        userContainer.style.backgroundColor = "yellow"
        computerContainer.style.backgroundColor = "yellow"
        userContainer.style.color = "red"
        computerContainer.style.color = "red"
        userSelection.style.color = "orange"
        computerSelection.style.color = "orange"
    } else if (userSelection.innerHTML === rock && computerSelection.innerHTML === paper){
        winner.innerHTML = "The computer won!"
        userContainer.style.backgroundColor = "red"
        computerContainer.style.backgroundColor = "green"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
    } else if(userSelection.innerHTML === rock && computerSelection.innerHTML === scissors){
        winner.innerHTML = "The user won!"
        userContainer.style.backgroundColor = "green"
        computerContainer.style.backgroundColor = "red"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
    } else if((userSelection.innerHTML === scissors && computerSelection.innerHTML === rock)){
        winner.innerHTML = "The computer won!"
        userContainer.style.backgroundColor = "red"
        computerContainer.style.backgroundColor = "green"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
    } else if(userSelection.innerHTML === scissors && computerSelection.innerHTML === paper){
        winner.innerHTML = "The user won!"
        userContainer.style.backgroundColor = "green"
        computerContainer.style.backgroundColor = "red"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
    } else if(userSelection.innerHTML === paper && computerSelection.innerHTML === rock){
        winner.innerHTML = "The user won!"
        userContainer.style.backgroundColor = "green"
        computerContainer.style.backgroundColor = "red"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
    } else {
        winner.innerHTML = "The computer won!"
        userContainer.style.backgroundColor = "red"
        computerContainer.style.backgroundColor = "green"
        userContainer.style.color = "black"
        computerContainer.style.color = "black"
        userSelection.style.color = "white"
        computerSelection.style.color = "white"
    }


}



let player = buttons.forEach(button => {
     button.addEventListener("click", function(event){
        userSelection.innerHTML = button.textContent;
        userSelection.classList.add("inPlay");
        computerPlay();
        console.log(playRound())
        
     })
     })









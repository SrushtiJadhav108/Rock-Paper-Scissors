let options=['rock','paper','scissor']
 let uwin=0
 let  ulost=0
 let both=0

function playGame(userChoice)
{
    console.log(userChoice)
    let randomIndex=Math.floor(Math.random()*3)
    let computerChoice=options[randomIndex]
    //soin it to te console
    console.log("User choice: ",userChoice)
    console.log("Computer choice: ",computerChoice)

    //gettin g values bye id 
    const userChoieText=document.getElementById("user-choice")
    const computerChoiceText=document.getElementById("computer-choice")
    const resultText=document.getElementById("result")
    //wins
    const yourWinText=document.getElementById("your-wins")
    const computerWinText=document.getElementById("computer-wins")
    const drawText=document.getElementById("draws")
   
    

    //wo is winning
    if(userChoice=="rock"&&computerChoice=="scissor"||userChoice=="paper"&&computerChoice=="rock"||userChoice=="scissor"&&computerChoice=="paper")
    {
        resultText.textContent="You Won 😊"
         uwin++
          yourWinText.textContent="Your Win :"+uwin
    }
    else if(userChoice=="scissor"&&computerChoice=="rock"||userChoice=="rock"&&computerChoice=="paper"||userChoice=="paper"&&computerChoice=="scissor")
    {
        resultText.textContent="You Lost 😔"
        ulost++
        computerWinText.textContent="Computer Wins : "+ulost
    }
    else
    {
        resultText.textContent="Draw ✌️"
        both++
        drawText.textContent="Draw's : "+both
    }
    //update html
    userChoieText.textContent="User Choice :"+userChoice
    computerChoiceText.textContent="Computer choice: "+computerChoice
}
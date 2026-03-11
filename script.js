let options=['rock','paper','scissor']
function playGame(userChoice)
{
    console.log(userChoice)
    let randomIndex=Math.floor(Math.random()*3)
    const computerCoice=options[randomIndex]
    console.log("User choice: ",userChoice)
    console.log("User choice: ",computerCoice)

    //wo is winning
    if(userChoice=="rock"&&computerCoice=="scissor"||userChoice=="paper"&&computerCoice=="rock"||userChoice=="scissor"&&computerCoice=="paper")
    {
        alert("You Won")
    }
    else if(userChoice=="scissor"&&computerCoice=="rock"||userChoice=="rock"&&computerCoice=="paper"||userChoice=="paper"&&computerCoice=="scissor")
    {
        alert("You lost")
    }
    else
    {
        alert("Draw")
    }

}
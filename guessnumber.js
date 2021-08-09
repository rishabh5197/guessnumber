guess_number = Math.floor(Math.random()*100) + 1
function check()
{
    let number = parseInt(document.getElementById("data").value)
    console.log(number, guess_number)
    if (number)
    {
        if (guess_number === number)
        {
            document.getElementById("results").innerHTML ="Great you now know the number"
        }
        else if (guess_number > number)
        {
            document.getElementById("results").innerHTML ="Guess the greater number"
        }
        else if (guess_number < number)
        {
            document.getElementById("results").innerHTML ="Guess the smaller number"    
        }
        else {
            document.getElementById("results").innerHTML ="Problem"              
        }
    }
    else {
        document.getElementById("results").innerHTML ="Write something"    
    }
}

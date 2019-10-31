$(document).ready(function(){
    console.log("hi")
    var score=0
    var wins=0
    var losses=0
    var goal;
    var aqua = $('#aqua')
    var red = $('#red')
    var green = $('#green')
    var blue = $('#blue')
    var goalDisplay = $('#randomScore')
    var scoreDisplay = $('#yourScore')
    var lossDisplay = $('#losses')
    var winDisplay = $('#wins')
reset()
function reset(){

    //generate random number
     goal = Math.floor((Math.random() * 120) + 19);
    score=0
    goalDisplay.text(goal)
    winDisplay.text(wins)
    lossDisplay.text(losses)
    scoreDisplay.text(score)
    
    //assign hidden values to crystals (value between 1-12)
    var num1 = Math.floor((Math.random() * 12) + 1);
    var num2 = Math.floor((Math.random() * 12) + 1);
    var num3 = Math.floor((Math.random() * 12) + 1);
    var num4 = Math.floor((Math.random() * 12) + 1);
    
    aqua.attr("data-points", num1)// .attr() with 2 arguments sets attribute value
    red.attr("data-points", num2)// .attr() with 2 arguments sets attribute value
    green.attr("data-points", num3)// .attr() with 2 arguments sets attribute value
    blue.attr("data-points", num4)// .attr() with 2 arguments sets attribute value
}
    
    //console.log(aqua.attr("data-points"))// .attr with 1 argument gets value
    
    
    //on click amount gets added to player score
    $('.clickable').on("click", function(){
        var value= $(this).attr("data-points")
        score += parseInt(value) //score = score + value
        scoreDisplay.text(score)

        if(score == goal){
            //you win
            console.log("winner")
            wins++
            reset()
        }else if (score >goal) {
            //you lost
            console.log("try again")
            losses++
            reset()
        }


    })
    
    //player win = total score matches random number
    
    //player lose if total score> then random number
    
    //update game counter
    
    //restart game if win or lose
    
    
})
function randomNumber(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    

    let result = document.querySelector("h1");
    
    document.querySelectorAll(".dice").forEach(function (dice) {
        dice.classList.toggle("spin");
    });

    setTimeout(function () {

    document.querySelector(".img1").setAttribute("src", "./images/dice"+ dice1 +".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice"+ dice2 +".png");

    if (dice1 < dice2) {
        result.innerHTML = "PLayer 2 Wins!"
    } else if (dice1 > dice2) {
        result.innerHTML = "Player 1 Wins!"
    } else {
        result.innerHTML = "Draw!"
    }
    
    }, 0);
 }
 



// When someone navigates to the page the dice won't roll but when they refresh, they will roll.
window.onload = function() {
    let website = window.performance.getEntriesByType("navigation")[0].type;
    
    
    let result = document.querySelector("h1");

    if (website === "reload") {
    randomNumber();
    } 

    let button = document.getElementById("clicked");

    button.addEventListener("click", function() {
        randomNumber();
    });
}


 


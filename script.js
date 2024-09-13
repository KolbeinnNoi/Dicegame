function randomNumber(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    

    let result = document.querySelector("h1");
    
    document.querySelector(".dice").classList.add("spin");

    setTimeout(function () {
    
    document.querySelector(".dice").classList.remove("spin");

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


 

// function randomNumber() {
//     // Randomly generate numbers for the two dice
//     let dice1 = Math.floor(Math.random() * 6) + 1;
//     let dice2 = Math.floor(Math.random() * 6) + 1;

//     // Select the dice images
//     let dice1Img = document.querySelector(".img1");
//     let dice2Img = document.querySelector(".img2");

//     // Add the spin class to both dice when the button is clicked
//     dice1Img.classList.add("spin");
//     dice2Img.classList.add("spin");

//     // Set a timeout to remove the spin class after the animation duration (0.5s)
//     setTimeout(function () {
//         dice1Img.classList.remove("spin");
//         dice2Img.classList.remove("spin");

//         // After the spin animation is over, change the dice images
//         dice1Img.setAttribute("src", "./images/dice" + dice1 + ".png");
//         dice2Img.setAttribute("src", "./images/dice" + dice2 + ".png");

//         // Update the result in the <h1> tag
//         let result = document.querySelector("h1");
//         if (dice1 < dice2) {
//             result.innerHTML = "Player 2 Wins!";
//         } else if (dice1 > dice2) {
//             result.innerHTML = "Player 1 Wins!";
//         } else {
//             result.innerHTML = "Draw!";
//         }
//     }, 500); // 500ms matches the duration of the spin animation
// }

// if (dice1 < dice2) {
//     document.querySelector("h1").innerHTML = "PLayer 2 Wins!"
// } else if (dice1 > dice2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!"
// } else {
//     document.querySelector("h1").innerHTML = "Draw!"
// }
// let result = document.querySelector("h1")







// function randomNumber1() {
//   var randomNum = Math.floor(Math.random() * 6) + 1;
  

//   if (randomNum === 1) {
//     return document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
//   } else if (randomNum === 2) {
//     return document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
//   } if (randomNum === 3) {
//     return document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
//   } else if (randomNum === 4) {
//     return document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
//   } if (randomNum === 5) {
//     return document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
//   } else if (randomNum === 6) {
//     return document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
//   }
  

// }
// function randomNumber2() {
//     var randomNum = Math.floor(Math.random() * 6) + 1;
    
  
//     if (randomNum === 1) {
//       return document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
//     } else if (randomNum === 2) {
//       return document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
//     } if (randomNum === 3) {
//       return document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
//     } else if (randomNum === 4) {
//       return document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
//     } if (randomNum === 5) {
//       return document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
//     } else if (randomNum === 6) {
//       return document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
//     }
     
//   }
  









// var dice1 = "./images/dice1.png"
// var dice2 = "./images/dice2.png"
// var dice3 = "./images/dice3.png"
// var dice4 = "./images/dice4.png"
// var dice5 = "./images/dice5.png"
// var dice6 = "./images/dice6.png"
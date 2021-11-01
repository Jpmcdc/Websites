// JavaScript Document

// @_author: Juan Pablo Martinez & Laura Niklitschek
// @_since: March 4th 2019

// Declare global variables that we're going to use for the game

// Tracks the amount of matches left
// When this var reaches 0, the game ends
var matchesLeft = 10;

// This var is going to tell us if this is the 1st image the user selects for a match or the 2nd
// If 0 then no img selected
// If 1 then 1 img is selected
// If 2 then 2 img are selected
var isThisTheSecondImg = 0;

// This are the variables to compare imgs
var img1 = 0;
var img2 = 0;

function selectImg(number) {
    isThisTheSecondImg++;
    
    if (isThisTheSecondImg == 2) {
        img2 = number;
        showCard(number);
        
        if (match(img1, img2)) {
            // Remove the cards that matched from play
            discard(img1);
            discard(img2);
            
//            setTimeout(hideImgs,1000);
            
            // Resets values
            img1 = 0;
            img2 = 0;
            isThisTheSecondImg = 0;
            
            // Lowers the amount of matches left
            matchesLeft--;
            
            if (matchesLeft == 0) {
                c = 0;
                document.location.href = "gameover.html";
            }
            
        } else {
            // Hide all imgs that were not matches or that their HTML was not removed
            // Delays the function to be able to see the second img
            setTimeout(hideImgs,1000);
            
            // Resets values
            img1 = 0;
            img2 = 0;
            isThisTheSecondImg = 0;
        } 
        
    } else {
        showCard(number);
        img1 = number;
    }
}

 //Hide all imgs that were not matches or that their HTML was not removed
function hideImgs() {
    for (var i = 1; i < 21; i++) {
        if (document.getElementById("card_" + i).alt == "done") {    
        } else {
            // Set the card to hidden by changing the src to the question mark
            document.getElementById("card_" + i).src = "images/back.png";
        }
    }
}


// Fucntion that compares the matches
function match(img1, img2) {

    if ((img1 == 1 && img2 == 9) || (img1 == 9 && img2 == 1)) {
        return true;
    } else if ((img1 == 2 && img2 == 13) || (img1 == 13 && img2 == 2)) {
        return true;
    } else if ((img1 == 3 && img2 == 15) || (img1 == 15 && img2 == 3)) {
        return true;
    } else if ((img1 == 4 && img2 == 10) || (img1 == 10 && img2 == 4)) {
        return true;
    } else if ((img1 == 5 && img2 == 8) || (img1 == 8 && img2 == 5)) {
        return true;
    } else if ((img1 == 6 && img2 == 19) || (img1 == 19 && img2 == 6)) {
        return true;
    } else if ((img1 == 7 && img2 == 17) || (img1 == 17 && img2 == 7)) {
        return true;
    } else if ((img1 == 11 && img2 == 20) || (img1 == 20 && img2 == 11)) { 
        return true;
    } else if ((img1 == 12 && img2 == 18) || (img1 == 18 && img2 == 12)) {
        return true;
    } else if ((img1 == 14 && img2 == 16) || (img1 == 16 && img2 == 14)) {
        return true;
    } else {
        return false;
    }
}

// Changes img to what it's supposed to be while no hidden
function showCard(number) {

    if (number == 1) {
        document.getElementById("card_1").src = "images/card_1.png";
    } else if (number == 2) {
        document.getElementById("card_2").src = "images/card_2.png";
    } else if (number == 3) {
        document.getElementById("card_3").src = "images/card_3.png";
    } else if (number == 4) {
        document.getElementById("card_4").src = "images/card_4.png";
    } else if (number == 5) {
        document.getElementById("card_5").src = "images/card_5.png";
    } else if (number == 6) {
        document.getElementById("card_6").src = "images/card_6.png";
    } else if (number == 7) {
        document.getElementById("card_7").src = "images/card_7.png";
    } else if (number == 8) {
        document.getElementById("card_8").src = "images/card_5.png";
    } else if (number == 9) {
        document.getElementById("card_9").src = "images/card_1.png";
    } else if (number == 10) {
        document.getElementById("card_10").src = "images/card_4.png";
    } else if (number == 11) {
        document.getElementById("card_11").src = "images/card_8.png";
    } else if (number == 12) {
        document.getElementById("card_12").src = "images/card_10.png";
    } else if (number == 13) {
        document.getElementById("card_13").src = "images/card_2.png";
    } else if (number == 14) {
        document.getElementById("card_14").src = "images/card_9.png";
    } else if (number == 15) {
        document.getElementById("card_15").src = "images/card_3.png";
    } else if (number == 16) {
        document.getElementById("card_16").src = "images/card_9.png";
    } else if (number == 17) {
        document.getElementById("card_17").src = "images/card_7.png";
    } else if (number == 18) {
        document.getElementById("card_18").src = "images/card_10.png";
    } else if (number == 19) {
        document.getElementById("card_19").src = "images/card_6.png";
    } else {
        document.getElementById("card_20").src = "images/card_8.png";
    }
}

// Intended to delete the cards that matched
function discard(index) {
    document.getElementById("card_" + index).alt = "done";
    document.getElementById("card_" + index).src = "images/done.png";
}


// TIMER
var c = 0;
function myCounter() {
    document.getElementById("timer").innerHTML = ++c;
}







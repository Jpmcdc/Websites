// JavaScript Document

// @_author: Juan Pablo Martinez
// @_since: March 8, 2019

function menu_open() {
    document.getElementById("menu_close").style.display = "block";
    document.getElementById("menu_open").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("black_screen").style.display = "block";
    
    // prevents scrollinng the body while the menun is open
    document.getElementById("body").style.overflow = "hidden";
}
function menu_close() {
    document.getElementById("menu_close").style.display = "none";
    document.getElementById("menu_open").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
    document.getElementById("black_screen").style.display = "none";
}

function login_open() {
    document.getElementById("black_screen").style.display = "block";
    document.getElementById("login_box_wireframe").style.display  = "block";
}
function login_close() {
    document.getElementById("black_screen").style.display = "none";
    document.getElementById("login_box_wireframe").style.display  = "none";
}



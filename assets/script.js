/**
 *  Start: Variables I need to apply the logic, like in conditional statments
 */

console.log("TEST-SCRIPT Start");

var canvas = document.getElementById("canvas"); /* get the canvas html element */
var paintContext = canvas.getContext("2d"); /* create the 2D context */
var viewportWidth = window.innerWidth; /* set the window's width and Heigth to var's */
var viewportHeight = window.innerHeight;
canvas.width = viewportWidth; /* Now set the canvas width/height to the inner window, I could've done this in HTML but I prefered here for better control */
canvas.height = viewportHeight;

var gravity = 0.98; /* gravitational FORCE xP */
var arraysOfTheBalls = []; 

var xAxis = 0;
var yAxis = 0;

/* mouse Event Listener */
addEventListener("click", function () {
    xAxis = event.clientX;
    yAxis = event.clientY;
});

/* This function will Generate strings (Hex Colors) that are not more that 6 characters */
function GenerateRandomColor() {
    var letters = '0123456789ABCDEF'; // Hex
    var color = '#';
    for (var i = 0; i < 6; i++) { // For every i less 6 times assgin to colors + # + i
        color += letters[Math.floor(Math.random() * 16)]; // Floor the the number (So result is not double) and produce a number betwen 0 and x16 Hex colors
    };
    return color;
}

/* Create the ball function  */
function DrawTheBall() {
    this.color = GenerateRandomColor();
    this.radius = Math.random() * 20; /* ball random radius size should change everytime */
    this.startradius = this.radius;
    /* The ball X & Y axis */
    this.xAxisBall = Math.random() * (viewportWidth - this.radius * 2) + this.radius;
    this.yAxisBall = Math.random() * (viewportHeight - this.radius);
    /* The relative X/Y axis */
    this.XAxisRelative = Math.round((Math.random() - 0.5) * 10); 
    this.YAxisRelative = Math.random() * 2;

    /* the velocity of the ball */
    this.velocity = Math.random() / 5; 

    /* standard canvas creation code, it   */
    this.update = function () { 
        paintContext.beginPath();
        paintContext.arc(this.xAxisBall, this.yAxisBall, this.radius, 0, 2 * Math.PI);
        paintContext.fillStyle = this.color;
        paintContext.fill();
    };
}
/* create 42 balls (because it's the answer to the secert of the universe) */
for (var i = 0; i < 42; i++) {
    arraysOfTheBalls.push(new DrawTheBall());
}

console.log("TEST-Script END");



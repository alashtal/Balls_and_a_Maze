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

    /* standard canvas creation code,   */
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

/* Animation started, this is the most fun function (The physics engine) */
function makeThemJumpy() {
    if (viewportWidth != window.innerWidth || viewportHeight != window.innerHeight) {
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
        canvas.width = viewportWidth;
        canvas.height = viewportHeight;
    }
/* |__________ X axis   */
// |
// |    
// Y axis   
/* this tells the browser that I wish to perform an animation and 
requests the browser to call a function that should update the animation before the repaint */
    requestAnimationFrame(makeThemJumpy);

/* clear the rectangle within the given rectangle  */
    paintContext.clearRect(0, 0, viewportWidth, viewportHeight);

/* for each of the balls objects in the array do the following physics instructions */
    for (var i = 0; i < arraysOfTheBalls.length; i++) {
    /* update function from makeTheBall() */
        arraysOfTheBalls[i].update(); 
    /* Assign the relative axis of (Y/X) to the (X & Y) axis */
        arraysOfTheBalls[i].yAxisBall += arraysOfTheBalls[i].YAxisRelative;
        arraysOfTheBalls[i].xAxisBall += arraysOfTheBalls[i].XAxisRelative;

    /* in simple, if the ball y axis + the balls radius reached the inner window height then
    decrease the relative Y axis by 0.98, else increase the velocity (by random) */
        if (arraysOfTheBalls[i].yAxisBall + arraysOfTheBalls[i].radius >= viewportHeight) {
            arraysOfTheBalls[i].YAxisRelative = -arraysOfTheBalls[i].YAxisRelative * gravity;
        } else {
            arraysOfTheBalls[i].YAxisRelative += arraysOfTheBalls[i].velocity;
        }

    /* if the balls X axis + the radius of the ball is more than inner window width 
    or the X axis - the radius is less than 0, then decrease the relative X axis   */

        if (arraysOfTheBalls[i].xAxisBall + arraysOfTheBalls[i].radius > viewportWidth || arraysOfTheBalls[i].xAxisBall - arraysOfTheBalls[i].radius < 0) {
            arraysOfTheBalls[i].XAxisRelative = -arraysOfTheBalls[i].XAxisRelative;
        }

    /* When the mouse hovers its X & Y axis, then increase it's radius, else decrease it by 5 as well  */
        if (xAxis > arraysOfTheBalls[i].xAxisBall - 20 &&
            xAxis < arraysOfTheBalls[i].xAxisBall + 20 &&
            yAxis > arraysOfTheBalls[i].yAxisBall - 50 &&
            yAxis < arraysOfTheBalls[i].yAxisBall + 50 &&
            arraysOfTheBalls[i].radius < 70) {
            arraysOfTheBalls[i].xAxisBall += +1;
            arraysOfTheBalls[i].radius += 5;
        } else {
            if (arraysOfTheBalls[i].radius > arraysOfTheBalls[i].startradius) {
                arraysOfTheBalls[i].radius += -5;
            }
        }
        
    } /* End of the for loop (array of balls.size, all the 42 holy balls) */
    
} /* End of make jumpy animation method  */

makeThemJumpy();
console.log("TEST-Script END");


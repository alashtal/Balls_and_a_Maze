/**
 *  Start: Variables I need to apply the logic, like in conditional statments
 */

console.log("TEST-SCRIPT_HAS-STARTED");

var canvas = document.getElementById("canvas");
var paintContext = canvas.getContext("2d");
var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
canvas.width = viewportWidth;
canvas.height = viewportHeight;
paintContext.strokeWidth = 5;
var gravity = 0.98;

var xAxis = 0;
var yAxis = 0;

addEventListener("mousemove", function () {
    xAxis = event.clientX;
    yAxis = event.clientY;
});
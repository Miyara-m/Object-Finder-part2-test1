status = "";
objects = []
function preload()
{
}
function setup()
{
    canvas = createCanvas(320, 320);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    modelLoaded();
}
function draw()
{
 image(camera, 0, 26, 320, 320);
}
function start()
{
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded()
{
    objectd = ml5.objectDetector("cocossd", modelLoaded);
    console.log("Model Loaded!");
}
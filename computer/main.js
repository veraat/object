img = "";
statuss = "";
var objectss;

function preload(params) {
    img = loadImage("computer.jpg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded)
}
  

function modelLoaded() {
    console.log("model loaded")
    objectDetector.detect(img , gotResults);
} 

function gotResults(error , result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    
    objectss = result
    
    // console.log("X =" +  Object1X + "Y ="+ Object1Y);
    statuss = true;
}
function draw() {
    image(img, 0, 0, 640, 420)

    if (statuss == true) {
    for (var i = 0; i < objectss.length; i++) {
        console.log("x = "+ objectss[i].x+ "y = "+ objectss[i].y + "width = "+ objectss[i].width + "height = " + objectss[i].height + "label = "+ objectss[i].label + " confidence = " + objectss[i].confidence);
        percent = floor(objectss[i].confidence *100)
        fill("#FF0000");
        text(objectss[i].label+ " " + percent + "%" , objectss[i].x - 15, objectss[i].y - 15);
        noFill();
        stroke("#FF0000");
        rect(objectss[i].x, objectss[i].y + 50,objectss[i].width,objectss[i].height)

}
    }
}
  
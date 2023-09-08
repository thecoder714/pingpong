x = 0;
y = 0;
score = 0;
game_status = "";

function preload() {}

function setup() {
    createCanvas(1280,720);
    video = createCapture(VIDEO);
    video.size(1280,720);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    if(score > 0.2) {
        fill('#454545');
        stroke('#606060');
        circle(x, y, 40);
    }
    image(img, 350, 350, 1280, 720);

    if(game_status  == "start") {
        //
    }
}

function modelLoaded() {console.log('model loaded');}

function gotPoses(results) {
    if(results.length > 0) {
        x = ml5.pose.rightwrist.x;
        y = ml5.pose.rightwrist.y;
        score = ml5.pose.rightwrist.score;
    } 
}

function startGame() {
    game_status = "status";
    document.getElementById("status").innerHTML = "Game is Loaded";
}
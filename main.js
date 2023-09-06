function preload() {

}

function setup() {
    createCanvas(1280,720);
    video = createCapture(VIDEO);
    video.size(1280,720);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(img, 350, 350, 1280, 720);
}

function modelLoaded() {console.log('model loaded');}
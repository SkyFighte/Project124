function setup(){
video= createCapture(VIDEO);
video.size(550,500);

canvas= createCanvas(550,400);
canvas.position(550,100);
}

poseNet= ml5.poseNet(video,ModelLoaded);
poseNet.on('pose',gotPoses);

function draw(){
    background('#0000FF');
}

function ModelLoaded(){
    console.log('Posenet Is active')
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results)
    }

}

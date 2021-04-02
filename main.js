



function preload() {

}

function setup() {
	video=createCapture(VIDEO)
	video.size(800,400);

	posenet=ml5.poseNet(video, modelLoaded)
	posenet.on('pose',gotPoses)
	
}

function draw() {
	function gotPoses(results){
		if(results.length>0){
			leftWristY=results[0].pose.leftWrist.y;
			rightWristY=results[0].pose.rightWrist.y;
			console.log("leftWristY =" + leftWristY + "rightWristY = " + rightWristY );
		}
	}
}
function modelLoaded() {
	console.log("poseNet initialised");
}



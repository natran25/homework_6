var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").textContent = document.getElementById("volumeSlider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * (9/10);
	console.log("New Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * (10/9);
	console.log("New Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime = video.currentTime + 5;
	if (video.ended == true) {
		video.currentTime = 0;
		console.log("Going back to beginning")
		video.play()
	}
	console.log("Current location " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == false) {
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
	} else if (video.muted = true) {
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function () {
	document.getElementById("volume").textContent = document.getElementById("volumeSlider").value + "%";
	video.volume = document.getElementById("volumeSlider").value / 100;
	console.log(video.volume)
});

document.querySelector("#old").addEventListener("click", function () {
	video.className = "oldTime"
});

document.querySelector("#original").addEventListener("click", function () {
	video.className = "default"
});


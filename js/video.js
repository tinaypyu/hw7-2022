var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.querySelector(".video").autoplay = false; 
	console.log("autoplay is false")
	document.querySelector(".video").loop = false; 
	console.log("loop is false")
});

// const playButton = document.getElementById('play'); 

// playButton.addEventListener('click', function() { 
// 	console.log("button pressed"); 
// })

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector(".video").play(); 
	document.querySelector("#volume").innerHTML = (document.querySelector("video").volume)*100 + "%"; 
	console.log("Current volume is " + document.querySelector("video").volume); 
	}); 
});

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#pause").addEventListener("click", function(){ 
		console.log("Pause video"); 
		document.querySelector(".video").pause(); 

	})
}); 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#slower").addEventListener("click", function() { 
		document.querySelector(".video").playbackRate *= 0.9; 
		console.log("current speed is: " + document.querySelector(".video").playbackRate); 
	})
}) 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#faster").addEventListener("click", function() { 
		document.querySelector(".video").playbackRate /= 0.9; 
		console.log("current speed is: " + document.querySelector(".video").playbackRate); 
	})
}) 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#skip").addEventListener("click", function() { 
		document.querySelector(".video").currentTime += 10; 
		console.log("Video current time is: " + document.querySelector(".video").currentTime); 
	})
	document.querySelector(".video").addEventListener("ended", function (){ 
		document.querySelector(".video").currentTime = 0; 
		console.log("Video current time is: " + document.querySelector(".video").currentTime); 
	})
}) 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#mute").addEventListener("click", function() { 
		if (document.querySelector(".video").muted){ 
			document.querySelector(".video").muted = false;
			console.log("Video is unmuted"); 
			document.querySelector("#mute").innerHTML = "Mute";
		}
		else { 
			document.querySelector(".video").muted = true; 
			console.log("Video is muted"); 
			document.querySelector("#mute").innerHTML = "Unmute"; 
		}
	})
}) 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#slider").addEventListener("input", function() { 
		document.querySelector("#slider").value; 
		document.querySelector(".video").volume = (document.querySelector("#slider").value) * 0.01; 
		console.log("Current volume is " + document.querySelector("#slider").value); 
		// document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"; 
		document.querySelector("#volume").innerHTML = (document.querySelector(".video").volume)*100 + "%"
	})
}) 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#vintage").addEventListener("click", function() { 
		document.querySelector(".video").classList.add("oldSchool"); 
		console.log("Style is set to old school"); 
	})
}) 

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#orig").addEventListener("click", function() { 
		document.querySelector(".video").classList.remove("oldSchool"); 
		console.log("Style is set to original"); 
	})
}) 


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


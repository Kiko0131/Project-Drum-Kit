var drumFinder = document.querySelectorAll(".drum");

for (var i = 0; i < drumFinder.length; i++) {
    function createAudioHandler(i) {
        return function(){
            var audio;
            if (i < 4) {
                var tomAudio = "./sounds/tom-" + (i + 1) + ".mp3";
                audio = new Audio(tomAudio);
            } else if (i == 4) {
                audio = new Audio("./sounds/snare.mp3");  
            } else if (i == 5) {
                audio = new Audio("./sounds/crash.mp3");  
            } else if (i == 6) {
                audio = new Audio("./sounds/kick-bass.mp3");  
            }
            audio.play();
        }
    }

    drumFinder[i].addEventListener("click", createAudioHandler(i));
}




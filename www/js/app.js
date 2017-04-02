var video = document.getElementsByTagName("video")[0];

var currenttime = document.getElementById('currenttime');
var playpause = document.getElementById("playpause");
var stop = document.getElementById("stop");
var soundless = document.getElementById("soundless");
var soundmore = document.getElementById("soundmore");
var mute = document.getElementById("mute");
var begin = document.getElementById("begin");
var end = document.getElementById("end");


playpause.onclick = function(){
    if(video.paused || video.ended){

        if(video.ended)
            video.currentTime = 0;

        playpause.innerHTML = "PAUSE";

        video.play();
    }else{
        playpause.innerHTML = "PLAY";
        video.pause();
    }
};

stop.onclick = function(){
    video.currentTime = 0;
    video.pause();
};

soundless.onclick = function(){
    video.volume = video.volume-0.1;
};

soundmore.onclick = function(){
    video.volume = video.volume+0.1;
};

mute.onclick = function(){
    console.log(video.volume);
    if(video.volume == 0)
        video.volume = 1;
    else
        video.volume = 0;
};

begin.onclick = function(){
    video.currentTime = 0;
};

end.onclick = function(){
    video.currentTime = video.duration;
};

var modifierTemps = function(){
    var width = (video.currentTime/video.duration*100)+'%';
    currenttime.setAttribute('style', 'width:'+width);
};

video.addEventListener('timeupdate', function(){
    modifierTemps();
}, false);
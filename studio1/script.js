(function() {
    'use strict';
    console.log('js running');

    const playToggle = document.querySelector('.fa-pause');
    const sunsetVideo = document.querySelector('#sunsetVideo');
    const body = document.querySelector('body');
    const link = document.querySelector('a');
    let video = sunsetVideo;
    let playing = true;

    // play/pause
    playToggle.addEventListener('click', function() {
        if (!playing) { // !playing = if playing is false
            video.play();
            playToggle.className = 'fa-solid fa-pause';
        }
        else {
            video.pause();
            playToggle.className = 'fa-solid fa-play'
        }
        playing = !playing;
    });

    // loading script
    const loading = document.querySelector('.fa-spinner');

    video.addEventListener('playing', function (){
        loading.style.display = 'none';
    });

    // lyrics script
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');
    const line7 = document.querySelector('#line7');
    const line8 = document.querySelector('#line8');
    const line9 = document.querySelector('#line9');
    const lyrics = {
        start: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        stop: [4, 4, 4, 7, 14, 14, 14, 14, 14],
        line: [line1, line2, line3, line4, line5, line6, line7, line8, line9]
    }

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        for (let i = 0; i < lyrics.start.length; i++) {
            if (lyrics.start[i] < video.currentTime && video.currentTime < lyrics.stop[i]) {
                lyrics.line[i].className = "showing";
            } else {
                lyrics.line[i].className = "hidden";
            }
        }
    }

    const sunicon = document.querySelector('#sunicon');
    const moonicon = document.querySelector('#moonicon');

    moonicon.addEventListener('click', function() {
        moonicon.className = 'disappear';
        sunicon.className = 'appear';
        sunsetVideo.className = 'disappear';
        nightVideo.className = 'appear';
        video = nightVideo;
        body.style.color = "#f5f5f5";
        link.style.color = "#f5f5f5";
    })

    sunicon.addEventListener('click', function() {
        moonicon.className = 'appear';
        sunicon.className = 'disappear';
        sunsetVideo.className = 'appear';
        nightVideo.className = 'disappear';
        video = sunsetVideo;
        body.style.color = "#333";
        link.style.color = "#333";
    })

})();
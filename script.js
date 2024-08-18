function playSong() {
    const song = document.getElementById('love-song');
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}


const player = document.querySelector('#beta__video');
const video = document.querySelector('#video');
const playControls = document.querySelector('#beta__play');
const play = document.querySelector('#play')

play.addEventListener('click', (e) => {
    e.preventDefault();
    video.play();
    play.classList.remove('visible');
    play.classList.add('hidden');
    playControls.classList.add('hidden');
    video.setAttribute('controls', true);
});


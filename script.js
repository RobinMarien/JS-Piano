const WHITE_KEYS = ['q', 'd', 'g', 'h', 'k', 'm', 'µ', 'a', 'e', 't', 'y', 'i', 'p', '$', '&', '"', "(", '§', '!', 'à', '-'];
const BLACK_KEYS = ['s', 'f', 'j', 'l', 'ù', 'z', 'r', 'u', 'o', 'Dead', 'é', "'", 'è', 'ç', ')'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key =>{
    key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
    console.log(key);

});


function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}

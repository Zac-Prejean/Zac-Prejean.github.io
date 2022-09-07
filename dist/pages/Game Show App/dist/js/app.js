
const srtButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

let missed = 0;

//start page
srtButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

//phrases    
const phrases = [
    'pleased punch',
    'blood turnip',
    'biteing bullets',
    'flying pigs',
    'proof puddiing'
];

//randomly chooses a phrase from the array
function getRandomPhraseAsArray(arr){
    const randomPhrase = Math.floor(Math.random() * arr.length );
    return arr[randomPhrase];
};
const phraseArray = getRandomPhraseAsArray(phrases);

//sets the game display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
//check letter function
        if (li.textContent === " " ){
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}
addPhraseToDisplay(phraseArray); 

//event listener to the keyboard.
qwerty.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON' && e.target.className != 'chosen'){
        const btn = e.target;
        btn.disabled = true;
        btn.className = "chosen";
        const chnLetter = e.target.textContent;
        const check = checkLetter(chnLetter);
    }
    checkWin();
});

function checkLetter(sctLetter){
    const correct = phraseArray.includes(sctLetter)
    if (correct === true){
        for(let i =0; i < phraseArray.length; i++){
            if (phraseArray[i] === sctLetter) {
                document.querySelectorAll('li')[i].classList.add('show');
            }
        }
    } else {
        const tries = document.querySelectorAll("img");
        tries[missed].src = "images/lostHeart.png"; missed++;
    }
};

//change overlay if win or lose
function checkWin(){
    const letters = document.getElementsByClassName('letter');
    const shows = document.getElementsByClassName('show');
    const h2 = document.createElement('h2');

    if (letters.length === shows.length){
        overlay.className = 'win';
        overlay.style.display = 'flex';
        srtButton.textContent = 'Play Again?'
        srtButton.addEventListener('click', () => {
            location.reload();
        });
        overlay.appendChild(h2);
        h2.textContent = 'YOU WON!';  

    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        srtButton.textContent = 'Try Again?';
        srtButton.addEventListener('click', () => {
            location.reload();
        }); 
        overlay.appendChild(h2);
        h2.textContent = 'YOU LOST!';            
    }
}
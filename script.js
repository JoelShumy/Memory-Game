const cards = document.querySelectorAll('.card')

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard(e) {
    if(lockBoard) return;
    if(this === firstCard) return;
    hider = e.target;
    hider.classList.add('invisible');
    checkCard(e)
    checkMatch();
}

    
//Check card
function checkCard(e) {
    if(!hasFlippedCard){
        //first selected card
        hasFlippedCard = true;
        firstCard = e.target.parentNode;
        return;

    } 

        //second click
        hasFlippedCard = false;
        secondCard = e.target.parentNode;
}

//does it match ?
function checkMatch(){

    let isMatch = firstCard.dataset.pokemon === secondCard.dataset.pokemon;

    isMatch ? disableCards() : resetHiderCards();

}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    setTimeout(() => {
        alert("it's a match !")}, 100);
    resetCards();
}

function resetHiderCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.childNodes[3].classList.remove('invisible');
        secondCard.childNodes[3].classList.remove('invisible');
        resetCards();
        lockBoard = false;
            }, 1000);
    hasFlippedCard = false;
    
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}


cards.forEach(card => {
    card.addEventListener('click', flipCard);
});



(function shuffle() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 6);
        card.style.order = randomNumber;
    });
})();

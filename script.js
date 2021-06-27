const cards = document.querySelectorAll('.card')

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard () {

    const hider = this.childNodes[3];
    //console.log(hider)
    hider.classList.add('invisible');
    
    
    // console.log(this)

    if(!hasFlippedCard){
        //first selected card
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
    }

    //does it match ?

    console.log(firstCard.dataset.pokemon);
    console.log(secondCard.dataset.pokemon);

    if(firstCard.dataset.pokemon === secondCard.dataset.pokemon){
        //it's a match ! 
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else {
        firstCard.classList.remove('invisible');
        secondCard.classList.remove('invisible');
    }

}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
});


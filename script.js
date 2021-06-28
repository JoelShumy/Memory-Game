const cards = document.querySelectorAll('.card')

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard (e) {

    const hider = this.childNodes[3];
    console.log(hider)

    hider.classList.add('invisible');
    // console.log(this)


    // console.log(firstCard.childNodes[3]);
    // console.log(firstCard.dataset.pokemon);


    //does it match ?


        if(!hasFlippedCard){
            //first selected card
            hasFlippedCard = true;
            firstCard = this;
            console.log(firstCard.childNodes[3]);
            console.log(firstCard.dataset.pokemon);
            return;
        } else {
            //second click
            hasFlippedCard = false;
            secondCard = this;
            console.log(secondCard.childNodes[3]);
        }
    

    function resetCards() {
        firstCard = "";
        secondCard = "";
    }


        if(firstCard.dataset.pokemon === secondCard.dataset.pokemon){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            alert("it's a match !")
            resetCards();
        } else {
            setTimeout(() => {
                firstCard.childNodes[3].classList.remove('invisible');
                secondCard.childNodes[3].classList.remove('invisible');
                resetCards();
            }, 1000);
            hasFlippedCard = false;
        }

}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});


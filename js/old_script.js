const arrImages = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// Assegno la const all'oggetto slider, viene fatto fuori dal ciclo per non ripere l'operazione
const eleSlider = document.querySelector('.slider-container');

// Assegno la const ai bottoni
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');

let activeIndex = 0;

// Con questo ciclio inietto gli elementi dell'array dentro l'HTML (quindi creo i tag img)
for (let i = 0; i < arrImages.length; i++) {
    const eleImg = document.createElement('img');
    eleImg.src = arrImages[i];  //aggiungiamo il percorso all'elemento eleImg (in questo caso un'immagine)
    eleImg.classList.add('slider-img'); //aggiungiamo la classe all'elemento eleImg

    // !i è uguale a i === 0

    if (!i) {
        eleImg.classList.add('active')
    }
    
    eleSlider.append(eleImg); //con append inseriamo l'img dentro lo slider
};

// con questa variabile vado a selezionare tutti gli elementi con la classe 'slider-img'
const listEleImg = document.querySelectorAll('.slider-img'); // questo non è un array ma qualcosa di simile

//document.querySelector('.slider-img').classList.add('active');

//aggiungere le funzioni ai bottoni
downButton.addEventListener('click',

    function () {  

        //  if (activeIndex === listEleImg.length - 1) {
        //     listEleImg[activeIndex].classList.remove('active');
        //     activeIndex = 0;
        //     listEleImg[activeIndex].classList.remove('active');
        //     activeIndex++;
        //     listEleImg[activeIndex].classList.add('active');
        //  }

        // tigliere la classe active dall'elemento attivo corrente
        
        listEleImg[activeIndex].classList.remove('active');

        activeIndex++; //così incrementiamo l'active index di 1 ogni volta che premiamo il bottone

        if (activeIndex === listEleImg.length) {
            activeIndex = 0;
        }
        
        // aggiungere la classe active dall'elemento successivo
        listEleImg[activeIndex].classList.add('active');
            
    }

);

upButton.addEventListener('click',

    // function () {

    //     if (activeIndex === 0) {
    //         listEleImg[activeIndex].classList.remove('active');
    //         activeIndex= 4;
    //         listEleImg[activeIndex].classList.add('active');
    //     }

    //     else {
    //         listEleImg[activeIndex].classList.remove('active');
    //         activeIndex--;
    //         listEleImg[activeIndex].classList.add('active');
    //     }

    // }

    function () {

        listEleImg[activeIndex].classList.remove('active');

        if (activeIndex === 0) {
            activeIndex = listEleImg.length;
        }

        activeIndex--;

        listEleImg[activeIndex].classList.add('active');

    }

);
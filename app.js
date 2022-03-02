
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const startBtn =document.querySelector('.btn__reset');
    let missed = 0;
    const phrases= 
    ['shola is a good boy',
    'muyiwa is a good boy',
    'kemi is a good boy',
    'i like food']


    function getRandomPhraseAsArray(arr){
        let randomNumber = Math.floor(Math.random() * arr.length);
        return arr[randomNumber].split("");
    }
   




    startBtn.addEventListener('click',(event)=>{
        const target =event.target;
        const overlay =document.getElementById('overlay');

        overlay.style.display = 'none';


    })








    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const startBtn =document.querySelector('.btn__reset');
    const qwertyButton = document.q
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

    function addPhraseToDisplay(arr){
        // do stuff any arr that is passed in, and add to `#phrase ul`
        const ul = document.querySelector('#phrase ul');
        for(let i = 0; i < arr.length; i++){
            const li = document.createElement('li')
            li.textContent = arr[i]
            if(li.textContent !== ' '){
                li.className = 'letter';
                ul.appendChild(li);

                }
           
            }        
        }
    
        function checkLetter(para){
            let match = null
            const checkLetter = document.getElementsByClassName('letter')
            for(let i=0;i<checkLetter.length;i++){
                if(checkLetter[i].textContent == para){
                    checkLetter[i].classList.add('show');
                    match.textContent =checkLetter[i];
                    

                }
                }
                return match;
            }
            
        

        
        
 
   




    startBtn.addEventListener('click',(event)=>{
        const target =event.target;
        const overlay =document.getElementById('overlay');

        overlay.style.display = 'none';


    })







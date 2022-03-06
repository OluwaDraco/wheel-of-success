
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const startBtn =document.querySelector('.btn__reset');
    const overlay =document.getElementById('overlay');

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
        let randomPhrase = getRandomPhraseAsArray(phrases);
       let randomPhraseLetters = addPhraseToDisplay(randomPhrase);

    
        function checkLetter(button){
            let match = null
            const letters = document.getElementsByClassName('letter')
            let letterPicked = button.textContent;

            for(let i=0;i<letters.length;i++){

                if(letters[i].textContent == letterPicked){
                    letters[i].classList.add('show');
                    match =letterPicked;
                    

                }
                }
                return match;
            }
            
        
            qwerty.addEventListener('click', (event)=>{
               let target = event.target;
              if(target.tagName='BUTTON' && target.className !== 'chosen'){
                  target.className=('chosen');
                  target.disable = true;
                  const foundLetter = checkLetter(target);
                  if(foundLetter == null){
                      let heart = document.querySelector('img[ src="images/liveHeart.png"]')
                      heart.src="images/lostHeart.png"
                      missed ++;
                      
                  }
                  checkWin();
                  
              }
            })



            function checkWin(){
                const classLi = document.querySelectorAll('.letter');
                const classShow = document.querySelectorAll('.show');
                const headline = overlay.firstChild;

                
                if (missed > 4){
                    overlay.classList.add('lose');
                    headline.textContent = 'You Lose :( try again!';
                    overlay.style.display ='flex'
                }
                if(classLi.length === classShow.length){
                    overlay.classList.add('win');
                    headline.textContent = 'You won!';
                    overlay.style.display ='flex'

                }


            }

        
        
 
   




    startBtn.addEventListener('click',()=>{
       
        overlay.style.display = 'none';


    })







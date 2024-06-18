let form  = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let input = parseInt(document.querySelector('#guessField').value)
    if(input == '' || input < 0 || isNaN(input)){
        document.querySelector('#guessField').setAttribute('placeholder', ' Enter number')
    }
    else{
        
        let minNum = 1
        let maxNum = 100
        let randomNum = Math.round(Math.random() * (maxNum-minNum*10))
        let remainingGuess = document.querySelector('.lastResult')
        console.log(remainingGuess.innerHTML);
        let guess = 10
        let previousGuess = []
        while(guess > 0){
            if( input == randomNum ){
                remainingGuess.innerHTML = 'Right Guess'
                break
            }
            guess = guess - 1
            console.log(guess);
            remainingGuess.innerHTML = guess
        }
    }
})



// let guess = 10;

// let previousGuess = [];

// while (guess > 0) {
//     console.log("Hello");
//     guess = guess - 1
// }
// // // console.log('hello');

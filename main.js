let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')

let number = Math.floor(Math.random() * 150)
let numberGuesses = 0
let tries = []


function game(){

    let guess = document.getElementById('input').value

    if(guess == ''){

        alert("Type some number, please.")

    } else if(guess < 1 || guess > 150){

        alert("Only numbers between 1 and 150, please.")

    } else {

       tries.push(guess)
       numberGuesses += 1
        
       if(guess < number){

        p1.textContent = "Your guess is too low"
        p1.classList.add("bold")
        p2.textContent = `Number of guesses: ${numberGuesses}`
        p3.textContent = `Guessed numbers are:  ${tries}`

       } else if(guess > number){

        p1.textContent = "Your guess is too high"
        p1.classList.add("bold")
        p2.textContent = `Number of guesses: ${numberGuesses}`
        p3.textContent = `Guessed numbers are:  ${tries}`

       } else if(guess == number){

        p1.textContent = "You got it righ!!!"
        p1.classList.add("bold")
        p2.textContent = `The answer is ${number}`
        const a = document.createElement('button')
        a.classList.add('btn2')
        a.textContent = "Try again?"
        a.addEventListener('click', () => {
            location.reload()
        })
        document.querySelector('.container').appendChild(a)
        p3.classList.add("none")
         

        document.getElementById('btn').disabled = true

       }
    }

    document.getElementById('input').value = '' 

}

document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
        game()
    }
})


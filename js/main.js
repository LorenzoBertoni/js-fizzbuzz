let userPrompt = parseInt(prompt('Inserisci un numero intero :)'));
const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= userPrompt; i++) {
    let square = `<div class="square"> ${i} </div> `;
    let fizz = '<div class="square fizz"> Fizz </div>'
    let buzz = '<div class="square buzz"> Buzz </div>'
    let fizzBuzz = '<div class="square fizzBuzz"> FizzBuzz </div>'
        if ((i % 3 == 0) && (i % 5 == 0)){
            wrapper.innerHTML += fizzBuzz;
        } else if (i % 3 == 0){
            wrapper.innerHTML += fizz;
        }else if (i % 5 == 0) {
            wrapper.innerHTML += buzz;
        } else {
            wrapper.innerHTML += square;
        }
}
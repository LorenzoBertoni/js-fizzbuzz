const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)){
            wrapper.innerHTML += '<div class="square fizzBuzz"> FizzBuzz </div>';
        } else if (i % 3 == 0){
            wrapper.innerHTML += '<div class="square fizz"> Fizz </div>';
        }else if (i % 5 == 0) {
            wrapper.innerHTML += '<div class="square buzz"> Buzz </div>';
        } else {
            wrapper.innerHTML += `<div class="square"> ${i} </div> `;
        }
}
/* Implement your solution here */
let container = document.querySelector('.container');
let buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', function(e) {
    let color = e.target.className;
    container.style.backgroundColor = color;
  });
}

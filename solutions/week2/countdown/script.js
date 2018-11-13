let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function() {
  let value = parseInt(input.value);
  for (let i = value; i >= 0; i--) {
    setTimeout(function() {
      p.textContent = i;
    }, (value - i) * 1000);
  }
});

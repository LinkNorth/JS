let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let message = document.querySelector('p');

button.addEventListener('click', validate);

function validate() {
  let value = textarea.value;
  try {
    let o = JSON.parse(value);   
    message.textContent = 'Valid JSON';
  } catch (err) {
    message.textContent = 'Invalid JSON';
  }
}

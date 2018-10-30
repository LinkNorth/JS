function onClick(e) {
  let text = e.target.textContent;
  let container = document.querySelector('container');
  container.style.background-color = text;
  if (text = "Red") {
    container.style['color'] = 'white';
  } else {
    container.style['color'] = 'black';
  }
}

let buttons = document.querySelector('buttons');
for (let button in buttons) {
  button.addeventlistener('click', onClick);
}

function asyncPrompt(msg) {
  return new Promise((resolve, reject) => {
    let body = document.body;
    let popup = document.createElement('div');
    popup.classList.add('popup');
    let text = document.createElement('p');
    text.textContent = msg;
    let input = document.createElement('input');
    let ok = document.createElement('button');
    ok.textContent = 'OK';
    ok.addEventListener('click', function() {
      body.removeChild(popup);
      resolve(input.value);
    });

    popup.appendChild(text);
    popup.appendChild(input);
    popup.appendChild(ok);
    body.appendChild(popup);
  });
}

function syncPrompt(msg) {
  return prompt(msg);
}


let loop = document.querySelector('.loop');
let i = 0;
function backgroundLoop() {
  setTimeout(function() {
    i++;
    loop.textContent = i;
    backgroundLoop();
  }, 1000);
}

backgroundLoop();

function doPrompt() {
  let name = syncPrompt('What is your name?');
  let age = syncPrompt('What is your age?');

  asyncPrompt('What is your name?')
    .then(name => {
      console.log(name);
      asyncPrompt('What is your age?')
        .then(age => {
          console.log(age);
        });
    });
}

document.querySelector('#showprompt').addEventListener('click', doPrompt);

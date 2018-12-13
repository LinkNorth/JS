function popup(element) {
  return new Promise((resolve, reject) => {
    let popup = document.createElement('div');
    popup.classList.add('popup');

    let overlay = document.createElement('div');
    overlay.classList.add('overlay');

    let body = document.body;
    popup.appendChild(element);
    body.appendChild(popup);
    body.appendChild(overlay);

    let ok = document.createElement('button');
    ok.textContent = 'OK';
    popup.appendChild(ok);

    overlay.addEventListener('click', function() {
      body.removeChild(popup);
      body.removeChild(overlay);
      resolve();
    });

    ok.addEventListener('click', function() {
      body.removeChild(popup);
      body.removeChild(overlay);
      resolve();
    });
  });
}

function asyncAlert(msg) {
  let body = document.body;
  let content = document.createElement('div');
  content.classList.add('content');
  let text = document.createElement('p');
  text.textContent = msg;
  content.appendChild(text);

  return popup(content);

}

function asyncPrompt(msg) {
  let body = document.body;
  let content = document.createElement('div');
  let text = document.createElement('p');
  text.textContent = msg;
  let input = document.createElement('input');

  content.appendChild(text);
  content.appendChild(input);
  return popup(content)
    .then(function() {
      return input.value;
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
  asyncPrompt('What is your name?')
    .then(name => {
      return asyncPrompt('What is your age?')
      .then(age => {
        let obj = {
          name: name,
          age: age,
        };  
        return obj;
      });
    })
    .then(obj => {
      console.log(obj.name, obj.age);
      let table = document.createElement('table');
    });
}

function renderPerson(obj) {
  console.log(obj.name, obj.age);
}

document.querySelector('#showprompt').addEventListener('click', doPrompt);

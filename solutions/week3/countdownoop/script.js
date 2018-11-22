let input = document.querySelector('input');
let button = document.querySelector('button');

function Countdown(count) {
  this.count = count;
  this.el = document.createElement('p');
  document.body.appendChild(this.el);
  this.el.textContent = count;
  this.tick = function() {
    this.count--;
    if (this.count === 0) {
      document.body.removeChild(this.el);
      clearInterval(this.timer);
    } else {
      this.el.textContent = this.count;
    }
  }

  let _this = this;
  this.timer = setInterval(function() {
    _this.tick();
  }, 1000);
}

button.addEventListener('click', function(e) {
  let value = parseInt(input.value);
  new Countdown(value);
});

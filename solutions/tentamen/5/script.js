const box = document.querySelector('.inner');
const ball = document.querySelector('.ball');
ball.style.position = 'absolute';
window.addEventListener('mousemove', function(e) {
  let x = e.clientX;
  let y = e.clientY;
  let maxWidth = box.clientWidth;
  let maxHeight = box.clientHeight;

  if (x > maxWidth) {
    x = maxWidth;
  } else if (x < (ball.clientWidth) ) {
    x = ball.clientWidth;
  }

  if (y > maxHeight) {
    y = maxHeight;
  } else if (y < (ball.clientHeight) ) {
    y = ball.clientHeight;
  }

  x -= ball.clientWidth;
  y -= ball.clientHeight;

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
});

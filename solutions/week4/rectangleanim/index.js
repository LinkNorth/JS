function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.x = 0;
  this.y = 0;
}

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

Rectangle.prototype.scale = function(n) {
  this.width = this.width * n;
  this.height = this.height * n;
}

Rectangle.prototype.setSize = function(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.setPos = function(x, y) {
  this.x = x;
  this.y = y;
}

Rectangle.prototype.translate = function(x, y) {
  this.x += x;
  this.y += y;
}

let rectangle = new Rectangle(50, 50);

let canvas = document.getElementById('canvas');
canvas.width = 1000;
canvas.height = 1000;
let ctx = canvas.getContext('2d');

setInterval(function() {
  ctx.clearRect(0, 0, 1000, 1000);
  ctx.fillStyle = 'green';
  rectangle.translate(10, 0);
  ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}, 1000);


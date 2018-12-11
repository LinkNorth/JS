function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.plus = function(other) {
  let x = this.x + other.x;
  let y = this.y + other.y;
  let newPoint = new Point(x, y);
  return newPoint;
}

Point.prototype.subtract = function(other) {
  let x = this.x - other.x;
  let y = this.y - other.y;
  return new Point(x, y);
}

Point.prototype.multiply = function(n) {
  return new Point(this.x * n, this.y * n);
}

let point1 = new Point(2, 3);
let point2 = new Point(7, 8);
let point3 = point1.plus(point2);
let point4 = point1.subtract(point3);
let point5 = point1.multiply(2);

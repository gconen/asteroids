(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var MovingObject = Asteroids.MovingObject = function MovingObject(options) {
  var that = this;
  Object.keys(options).forEach(function (key) {
    that[key] = options[key];
  });
};

MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.strokeStyle = this.color;
};

MovingObject.prototype.move = function move() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
  var distance = Asteroids.Util.distance(this.pos, otherObject.pos);
  var radiusSum = this.radius + otherObject.radius;
  return distance < radiusSum;
};
})();

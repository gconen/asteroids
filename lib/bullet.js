(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var Bullet = Asteroids.Bullet = function Bullet(options) {
  options.radius = Bullet.RADIUS;
  options.color = Bullet.COLOR;
  Asteroids.MovingObject.call(this, options);
};

Bullet.RADIUS = 2;
Bullet.SPEED = 10;
Bullet.COLOR = "#FF0000";


Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);


Bullet.prototype.move = function move() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
};


})();

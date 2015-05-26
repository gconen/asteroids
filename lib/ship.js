(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var Ship = Asteroids.Ship = function Ship(options) {
  options.radius = Ship.RADIUS;
  options.color = Ship.COLOR;
  options.vel = [0, 0];
  options.pos = [options.game.dim_x / 2, options.game.dim_y /2];
  Asteroids.MovingObject.call(this, options);
};

Ship.RADIUS = 10;
Ship.COLOR = "#FF0000";

Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

Ship.prototype.fireBullet = function fireBullet() {
  var ship = this;
  var direction = Asteroids.Util.direction(ship.vel);
  var velocity = [direction[0] * Asteroids.Bullet.SPEED + ship.vel[0],
                  direction[1] * Asteroids.Bullet.SPEED + ship.vel[1]];
  var bullet = new Asteroids.Bullet(
    { game: ship.game,
      vel: velocity,
      pos: ship.pos
    });
  this.game.bullets.push(bullet);
}

Ship.prototype.relocate = function relocate() {
  this.pos = Asteroids.Game.randomPos();
};

Ship.prototype.power = function power(impulse) {
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
};

})();

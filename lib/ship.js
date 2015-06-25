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
  this.shootSound = options.shootSound;
};

Ship.RADIUS = 10;
Ship.COLOR = "#FF0000";
Ship.FIRING_TIMEOUT = 200;

Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

Ship.prototype.fireBullet = function fireBullet(direction) {
  if (this.firedRecently) {
    return;
  }

  this.shootSound.load();
  this.shootSound.play();

  var ship = this;
  var velocity = [direction[0] * Asteroids.Bullet.SPEED + ship.vel[0],
                  direction[1] * Asteroids.Bullet.SPEED + ship.vel[1]];
  var bullet = new Asteroids.Bullet(
    { game: ship.game,
      vel: velocity,
      pos: ship.pos
    });
  this.game.bullets.push(bullet);
  this.firedRecently = true;
  window.setTimeout(function () {
      this.firedRecently = false;
    }.bind(this),
    Ship.FIRING_TIMEOUT
  );
}

Ship.prototype.relocate = function relocate() {
  this.pos = Asteroids.Game.randomPos();
};

Ship.prototype.power = function power(impulse) {
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
};

})();

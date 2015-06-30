(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var Debris = Asteroids.Debris = function Debris(options) {
  options['color'] = Debris.COLOR;
  options['radius'] = options['radius'] || 2;
  options['vel'] = Asteroids.Util.randomVec(Debris.SPEED);
  Asteroids.MovingObject.call(this, options);
  this.timeLeft = Math.floor(Math.random() * Debris.DURATION);
};

Asteroids.Util.inherits(Debris, Asteroids.MovingObject);

Debris.COLOR = '#808080';
Debris.SPEED = 5;
Debris.DURATION = 100;
})();

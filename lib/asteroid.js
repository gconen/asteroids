(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function Asteroid(options) {
  options['color'] = Asteroid.COLOR;
  options['radius'] = options['radius'] ||
                        Asteroid.RADII[Math.floor( Math.random() * 4 )];
  options['vel'] = Asteroids.Util.randomVec(Asteroid.SPEED);
  Asteroids.MovingObject.call(this, options);
};

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

Asteroid.COLOR = '#808080';
Asteroid.RADII = [13, 20, 30, 40, 50];
Asteroid.SPEED = 5;
})();

(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var GameView = Asteroids.GameView = function GameView(game, ctx, shootSound) {
  this.game = game;
  this.ctx = ctx;
  this.shootSound = shootSound;
};

GameView.prototype.start = function start() {
  var that = this;
  this.bindKeyHandlers();
  setInterval( function () {
    that.game.step(that.ctx);
  }, 16);
};

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  var that = this;

  var shoot = function () {
    that.shootSound.load();
    that.shootSound.play();
    that.game.ship.fireBullet();
  };

  key('k,space', shoot);
};

})();

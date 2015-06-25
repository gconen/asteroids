(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var GameView = Asteroids.GameView = function GameView(game, ctx, shootSound) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function start() {
  var that = this;
  // this.bindKeyHandlers();
  setInterval( function () {
    that.game.step(that.ctx);
  }, 16);
};

})();

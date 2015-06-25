(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var GameView = Asteroids.GameView = function GameView (game, ctx, overlay) {
  this.game = game;
  this.ctx = ctx;
  this.overlay = overlay;
};

GameView.prototype.startListening = function () {
  key('tab', this.togglePlay.bind(this));
}

GameView.prototype.startPlay = function () {
  this.overlay.className = "hidden";
  var that = this;
  this.intervalId = setInterval( function () {
    that.game.step(that.ctx);
  }, 16);
};

GameView.prototype.stopPlay = function () {
  this.overlay.className = "";
  clearInterval(this.intervalId);
  this.intervalId = null;
}

GameView.prototype.togglePlay = function (event) {
  event.preventDefault();
  if (this.intervalId) {
    this.stopPlay();
  } else {
    this.startPlay();
  }
}


})();

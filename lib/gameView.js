(function () {

if ( window.Asteroids === undefined ) {
  window.Asteroids = {};
}

var GameView = Asteroids.GameView = function GameView (game, ctx, overlay) {
  this.game = game;
  this.ctx = ctx;
  this.overlay = overlay;
  this.paused = true;
  this.shipsLeftEl = document.getElementById("ships-left");
  this.asteroidsLeftEl = document.getElementById("asteroids-left");
  this.gameLostEl = document.getElementById("game-lost");
  this.gameWonEl = document.getElementById("game-won");
};

GameView.prototype.gameLost = function () {
  var ending = this.gameLostEl;
  ending.className = "";
  this.handleEnding(ending);
};

GameView.prototype.gameUpdate = function () {
  this.shipsLeftEl.innerHTML = this.game.spareShips;
  this.asteroidsLeftEl.innerHTML = this.game.asteroidCount();
};

GameView.prototype.gameWon = function () {
  var ending = this.gameWonEl;
  ending.className = "";
  this.handleEnding(ending);
};

GameView.prototype.handleEnding = function (endingEl) {
  this.stopPlay();
  var resetButton = endingEl.getElementsByClassName("reset-button")[0];
  var that = this;
  resetButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.removeEventListener(event.type, arguments.callee);
    that.newGame(endingEl);
  });
};

GameView.prototype.newGame = function (endingEl) {
  endingEl.className="hidden";
  var astDestroySound = this.game.astDestroySound;
  var shootSound = this.game.shootSound;
  this.game = new Asteroids.Game(astDestroySound, shootSound);
  this.startPlay();
};

GameView.prototype.run = function () {
  this.game.step(this.ctx);
  if (this.game.asteroidCount() === 0) {
    this.gameUpdate();
    this.gameWon();
  } else if (this.game.spareShips < 0) {
    this.gameLost();
  } else {
  this.gameUpdate();
  }
};

GameView.prototype.startListening = function () {
  key('tab', this.togglePlay.bind(this));
  key('enter', this.togglePlay.bind(this));
};

GameView.prototype.startPlay = function () {
  this.overlay.className = "hidden";
  this.intervalId = setInterval( this.run.bind(this), 16);
};

GameView.prototype.stopPlay = function () {
  this.overlay.className = "";
  clearInterval(this.intervalId);
  this.intervalId = null;
};

GameView.prototype.togglePlay = function (event) {
  event.preventDefault();
  if (this.intervalId) {
    this.stopPlay();
    this.paused = true;
  } else if (this.paused) {
    this.startPlay();
    this.paused = false;
  }
};


})();

# Asteroids
[Live Link](http://gconen.github.io/asteroids/) (Audio Warning)

A fun little asteroids game. It uses newtonian motion; 
your accelation is fixed, but your velocity is uncapped 
and your when you fire, your bullet's velocity is determined
by adding a constant to your velocity.
## Why not jQuery?
There were a number of places in this program where using jQuery
would have made things quite a bit easier. But I intentionally
choose not to use, in order to explore what other options were
available.

I think I learned a number of things doing this. For example,
I add an event listener that I only want to trigger once. I
could use .one, in jQuery, to do this easily. Instead I 
learned about and used a new pattern that looks like this:

```
var that = this;
  resetButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.removeEventListener(event.type, arguments.callee);
    that.newGame(endingEl);
  });
```

So now I know how to make a self-cancelling listener, and a
few other incidental things along the way (arguments.callee
for example).

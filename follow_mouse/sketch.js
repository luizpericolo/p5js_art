function _createWorld() {
    _world = {
        WIDTH: 400,
        HEIGHT: 400,
        SPEED: 0.42,
        BACKGROUND: 0,
        MAIN_COLOR: 255,
    };

    _world.CENTER_X = _world.WIDTH / 2;
    _world.CENTER_Y = _world.HEIGHT / 2;

    return _world;
}


function setup() {
    WORLD = _createWorld();

    createCanvas(WORLD.WIDTH,WORLD.HEIGHT);

    balls = [];
    for(var i = 0; i < 5; i ++) {
        balls.push(new Circle(new Vector2(random() * WORLD.HEIGHT, random() * WORLD.HEIGHT), 5));
    }
}

function draw() {
  background(WORLD.BACKGROUND);
  fill(WORLD.MAIN_COLOR);
  for(var i = 0; i < balls.length; i ++) {
      balls[i].moveTowards(mouseX, mouseY);
      balls[i].draw();
  }
}


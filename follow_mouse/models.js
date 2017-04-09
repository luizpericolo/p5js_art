function Circle(position, radius) {
    this._position = position;
    this._radius = radius;

    this.radius = function() {
        return this._radius;
    }

    this.draw = function() {
        ellipse(this._position._x, this._position._y, this.radius(), this.radius());
    }

    this.moveTowards = function(x, y) {
        var _directionMorm = this._calculateDirection(x, y);
        this._position.add(_directionNorm.times(WORLD.SPEED));
    }

    this.runFrom = function(x,y) {
        var _directionNorm = this._calculateDirection(x, y);
        this._position.add(_directionNorm.times(WORLD.SPEED * -1));
    }

    this._calculateDirection = function(x, y) {
        var _direction = new Vector2(x - this._position._x, y - this._position._y);
        return _direction.norm(); 
    }
}

function Vector2(x, y) {
    this._x = x;
    this._y = y;

    this.abs = function() {
        return sqrt(this._x * this._x + this._y * this._y);
    }

    this.norm = function() {
        return new Vector2(this._x / this.abs(), this._y / this.abs());
    }

    this.add = function(other) {
        this._x = this._x + other._x;
        this._y = this._y + other._y;
    }

    this.times = function(n) {
        return new Vector2(this._x * n, this._y * n);
    }
}
var Car = /** @class */ (function () {
    function Car() {
        this._speed = 0;
    }
    Object.defineProperty(Car.prototype, "getSpeed", {
        get: function () {
            return this._speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setSpeed", {
        set: function (val) {
            if (val < 0) {
                throw new Error("Speed cannot be negative");
            }
            this._speed = val;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car = new Car();
console.log(car.getSpeed);
car.setSpeed = 100;
console.log(car.getSpeed);

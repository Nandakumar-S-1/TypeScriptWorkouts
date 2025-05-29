"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.score = 0;
    }
    Player.prototype.addPoints = function (points) {
        this.score += points;
        console.log("".concat(this.name, " have earned ").concat(points, " points. \n            The total score is now : ").concat(this.score));
    };
    return Player;
}());
exports.Player = Player;

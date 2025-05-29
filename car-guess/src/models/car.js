"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuxuryCar = exports.SportsCar = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, country) {
        this.brand = brand;
        this.country = country;
    }
    Car.prototype.getClue = function () {
        return "The Brand originated in ".concat(this.country);
    };
    return Car;
}());
exports.Car = Car;
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(brand, country) {
        return _super.call(this, brand, country) || this;
    }
    return SportsCar;
}(Car));
exports.SportsCar = SportsCar;
var LuxuryCar = /** @class */ (function (_super) {
    __extends(LuxuryCar, _super);
    function LuxuryCar(brand, country) {
        return _super.call(this, brand, country) || this;
    }
    return LuxuryCar;
}(Car));
exports.LuxuryCar = LuxuryCar;

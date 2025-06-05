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
var User = /** @class */ (function () {
    function User() {
        //   private name:string ="rohith"
        this.name = "rohith";
        this.age = 27;
    }
    User.prototype.getData = function () {
        return "".concat(this.name, " , ").concat(this.age);
    };
    return User;
}());
var newUser = /** @class */ (function (_super) {
    __extends(newUser, _super);
    function newUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isApproved = true;
        _this.name = "ash";
        return _this;
    }
    newUser.prototype.getData = function () {
        return "name is ".concat(this.name, " and age is ").concat(this.age);
    };
    return newUser;
}(User));
var use = new newUser();
console.log(use.name);
use.name = "belwin";
console.log(use.name);

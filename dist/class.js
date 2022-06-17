"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
// const rafa = new UserAccount('Rafa', 31)
// console.log(rafa)
// console.log(rafa.age)
// rafa.logDetails()
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " has the char " + this.nickname + " at level " + this.level);
    };
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            return this.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: true,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var john = new CharAccount('John', 45, 'johnmaster', 80);
console.log(john.name);
// john.nickname = 'josé'
john.logCharDetails();

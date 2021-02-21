"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.HLSPlayer = exports.JumpSpeeds = exports.JumpPosition = void 0;
var inversify_1 = require("inversify");
var types_1 = require("./types");
require("reflect-metadata");
var JumpPosition = /** @class */ (function () {
    function JumpPosition() {
    }
    JumpPosition.prototype.setPosition = function (position) {
        console.log('Set Position ' + position);
    };
    JumpPosition.prototype.getPosition = function () {
        console.log('Get Position');
        return 1;
    };
    JumpPosition = __decorate([
        inversify_1.injectable()
    ], JumpPosition);
    return JumpPosition;
}());
exports.JumpPosition = JumpPosition;
var JumpSpeeds = /** @class */ (function () {
    function JumpSpeeds() {
    }
    JumpSpeeds.prototype.setSpeed = function (speed) {
        console.log('Set Speed ' + speed);
    };
    JumpSpeeds.prototype.getSpeed = function () {
        console.log('Get Speed');
        return 1;
    };
    JumpSpeeds = __decorate([
        inversify_1.injectable()
    ], JumpSpeeds);
    return JumpSpeeds;
}());
exports.JumpSpeeds = JumpSpeeds;
var HLSPlayer = /** @class */ (function () {
    function HLSPlayer(_jumpSpeeds, _jumpPosition) {
        this._jumpSpeeds = _jumpSpeeds;
        this._jumpPosition = _jumpPosition;
    }
    HLSPlayer.prototype.start = function () {
        this._jumpPosition.setPosition(0);
        this._jumpSpeeds.setSpeed(1);
    };
    HLSPlayer.prototype.stop = function () {
        this._jumpPosition.setPosition(0);
        this._jumpSpeeds.setSpeed(0);
    };
    HLSPlayer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1["default"].jspeeds)), __param(1, inversify_1.inject(types_1["default"].jposition))
    ], HLSPlayer);
    return HLSPlayer;
}());
exports.HLSPlayer = HLSPlayer;
// class HLSPlayer implements TYPES.Iplay {
//     private _position: number
//     private _speed: number
//     constructor() {
//         this._position = 0
//         this._speed = 1
//     }
//     start(player: Player):any {
//         console.log('Play started from ' + player.getBookmark());
//         this._position = player.getBookmark()
//         this._speed = 1
//         return true
//     }
//     getPosition(): number {
//         return this._position + 1
//     }
//     increment(): any {
//         setTimeout(()=> {
//             this._position++;
//             console.log('Incrementing position');
//             this.increment()
//         }, 1000)
//     }
//     setPosition(position: number): any {
//         this._position = position
//     }
//     getSpeed(): number {
//         return this._speed
//     }
//     setSpeed(speed: number): any {
//         this._speed = speed
//     }
//  }

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HLSPlayer = exports.JumpSpeeds = exports.JumpPosition = void 0;
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("../interface/types"));
require("reflect-metadata");
var JumpPosition = /** @class */ (function () {
    function JumpPosition() {
    }
    JumpPosition.prototype.setPosition = function (position) {
    };
    JumpPosition.prototype.getPosition = function () {
        console.log('Return Position');
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
    };
    JumpSpeeds.prototype.getSpeed = function () {
        console.log('Return Speed');
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
        this.position = 0;
        this.speed = 0;
    }
    HLSPlayer.prototype.start = function () {
        this._jumpPosition.setPosition(0);
        this._jumpPosition.getPosition();
        console.log("Hello");
        this._jumpSpeeds.setSpeed(1);
        this._jumpSpeeds.getSpeed();
        this.position = 2;
        this.speed = 1;
    };
    HLSPlayer.prototype.stop = function () {
        this._jumpPosition.setPosition(0);
        this._jumpSpeeds.setSpeed(0);
        this.position = 0;
        this.speed = 0;
    };
    HLSPlayer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.jspeeds)), __param(1, inversify_1.inject(types_1.default.jposition))
    ], HLSPlayer);
    return HLSPlayer;
}());
exports.HLSPlayer = HLSPlayer;
//# sourceMappingURL=hlsPlayer.js.map
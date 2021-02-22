"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("../interface/types"));
var hlsPlayer_1 = require("../lib/hlsPlayer");
var container = new inversify_1.Container();
container.bind(types_1.default.player).to(hlsPlayer_1.HLSPlayer);
container.bind(types_1.default.jspeeds).to(hlsPlayer_1.JumpSpeeds);
container.bind(types_1.default.jposition).to(hlsPlayer_1.JumpPosition);
exports.default = container;
//# sourceMappingURL=inversify.config.js.map
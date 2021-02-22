"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = __importDefault(require("./container/inversify.config"));
var types_1 = __importDefault(require("./interface/types"));
var firstMovie = inversify_config_1.default.get(types_1.default.player);
firstMovie.start();
//# sourceMappingURL=index.js.map
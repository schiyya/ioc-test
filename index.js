"use strict";
exports.__esModule = true;
var inversify_config_1 = require("./container/inversify.config");
var types_1 = require("./interface/types");
var firstMovie = inversify_config_1["default"].get(types_1["default"].player);
firstMovie.start();
// console.log(firstMovie.start())

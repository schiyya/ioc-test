"use strict";
exports.__esModule = true;
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var ironman = inversify_config_1["default"].get(types_1["default"].player);
ironman.start();

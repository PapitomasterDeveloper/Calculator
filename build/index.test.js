"use strict";

var _ = require(".");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("It's a number", function () {
      return expect((0, _2.default)()).toBe(30);
});
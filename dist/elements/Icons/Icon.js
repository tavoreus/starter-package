"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Press = _interopRequireDefault(require("./Press"));
var _Arrow = _interopRequireDefault(require("./Arrow"));
var Icon = function Icon(_ref) {
  var name = _ref.name;
  var renderIcon = function renderIcon(name) {
    switch (name) {
      case "press":
        return /*#__PURE__*/_react["default"].createElement(_Press["default"], null);
      case "arrow":
        return /*#__PURE__*/_react["default"].createElement(_Arrow["default"], null);
      default:
        return;
    }
  };
  return renderIcon(name);
};
var _default = Icon;
exports["default"] = _default;
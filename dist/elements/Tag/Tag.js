"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icon = _interopRequireDefault(require("../Icons/Icon"));
var Tag = function Tag(_ref) {
  var label = _ref.label,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "Tag mavie-bg-beige-soft mavie-text-green-dark rounded-2xl p-2 shadow-md"
  }, leftIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: leftIcon
  }), " ", label, " ", rightIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: rightIcon
  }));
};
var _default = Tag;
exports["default"] = _default;
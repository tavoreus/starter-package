"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icon = _interopRequireDefault(require("../Icons/Icon"));
var Button = function Button(_ref) {
  var label = _ref.label,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    handleClick = _ref.handleClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick,
    className: "mavie-bg-yellow-dark mavie-text-green-dark rounded-3xl p-2"
  }, leftIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: leftIcon
  }), label, rightIcon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: rightIcon
  }));
};
var _default = Button;
exports["default"] = _default;
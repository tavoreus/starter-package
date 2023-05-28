"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Arrow;
function Arrow(_ref) {
  var className = _ref.className,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#025450" : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    className: "inline",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    className: "".concat(className),
    d: "M8.53033 1.46966L8 0.939331L6.93934 1.99999L7.46967 2.53032L11.1886 6.24926H1H0.25V7.74926H1H11.1901L7.46967 11.4697L6.93934 12L8 13.0607L8.53033 12.5303L13.5303 7.53032C13.8232 7.23743 13.8232 6.76255 13.5303 6.46966L8.53033 1.46966Z"
  }));
}
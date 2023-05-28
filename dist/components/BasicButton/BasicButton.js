"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BasicButton;
require("../../themes");
var _Arrow = _interopRequireDefault(require("./Arrow"));
var _Spinner = _interopRequireDefault(require("./Spinner"));
function getIcon(iconName) {
  switch (iconName) {
    case 'arrow':
      return /*#__PURE__*/React.createElement("span", {
        className: "px-2"
      }, /*#__PURE__*/React.createElement(_Arrow["default"], null));
      break;
    case 'spinner':
      return /*#__PURE__*/React.createElement("span", {
        className: "animate-spin px-2"
      }, /*#__PURE__*/React.createElement(_Spinner["default"], null));
      break;
    default:
      return /*#__PURE__*/React.createElement(React.Fragment, null);
      break;
  }
}
function BasicButton(props) {
  if (props.type == 'solid') {
    var states = {
      'default': 'mavie-bg-yellow-dark mavie-shadow-16-light mavie-text-green-dark mavie-fill-green-dark',
      'hover': 'hover:mavie-bg-yellow-light hover:mavie-text-green-dark',
      'disabled': 'disabled:mavie-bg-gray-soft disabled:mavie-text-gray-medium disabled:mavie-fill-gray-medium disabled:shadow-none'
    };
  } else {
    var states = {
      'default': 'mavie-bg-white mavie-shadow-16-light mavie-text-green-dark mavie-fill-green-dark',
      'hover': 'hover:mavie-bg-beige-light hover:mavie-text-green-dark',
      'disabled': 'disabled:mavie-bg-gray-soft disabled:mavie-text-gray-medium disabled:mavie-fill-gray-medium disabled:shadow-none'
    };
  }
  var cls = Object.values(states).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    disabled: props.disabled,
    className: "inline-flex items-center mavie-font-sans py-4 px-6 mavie-rounded-4xl mavie-font-semibold ".concat(cls)
  }, props.iconPosition == 'left' ? getIcon(props.iconType) : '', props.children.length ? /*#__PURE__*/React.createElement("span", {
    className: "px-2"
  }, props.children) : '', props.iconPosition == 'right' ? getIcon(props.iconType) : '');
}
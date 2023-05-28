"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RightIcon = exports.Default = void 0;
var _Tag = _interopRequireDefault(require("./Tag"));
var _default = {
  title: "Elements/Tag",
  component: _Tag["default"],
  argTypes: {}
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_Tag["default"], args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Article",
  leftIcon: "press"
};
var RightIcon = Template.bind({});
exports.RightIcon = RightIcon;
RightIcon.args = {
  label: "Visit",
  rightIcon: "arrow"
};
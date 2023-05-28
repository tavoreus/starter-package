"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _Button = _interopRequireDefault(require("./Button"));
var _default = {
  title: "Elements/Button",
  component: _Button["default"],
  argTypes: {}
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_Button["default"], args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Book",
  leftIcon: "press",
  handleClick: function handleClick() {
    alert("Handling onClick");
  }
};
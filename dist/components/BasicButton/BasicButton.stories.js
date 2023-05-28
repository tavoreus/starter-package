"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoLabel = exports.Disabled = exports.Base = void 0;
var _BasicButton = _interopRequireDefault(require("./BasicButton"));
var _default = {
  title: 'Basic Button',
  component: _BasicButton["default"],
  argTypes: {
    iconPosition: {
      options: ['left', 'right', null],
      control: {
        type: 'inline-radio'
      },
      description: 'Status of the button.'
    },
    iconType: {
      options: ['arrow', 'spinner', null],
      control: {
        type: 'inline-radio'
      },
      description: 'Status of the button.'
    },
    type: {
      options: ['solid', 'empty'],
      control: {
        type: 'inline-radio'
      },
      description: 'Status of the button.'
    }
  }
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_BasicButton["default"], args);
};
var Base = Template.bind({});
exports.Base = Base;
Base.args = {
  // status: 'default',
  children: 'Label',
  type: 'solid',
  disabled: false,
  iconPosition: null,
  iconType: 'arrow'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  // status: 'default',
  children: 'Label',
  type: 'solid',
  disabled: true,
  iconPosition: 'right',
  iconType: 'spinner'
};
var NoLabel = Template.bind({});
exports.NoLabel = NoLabel;
NoLabel.args = {
  children: 'Test',
  type: 'empty',
  disabled: false,
  iconPosition: 'left',
  iconType: 'arrow'
};
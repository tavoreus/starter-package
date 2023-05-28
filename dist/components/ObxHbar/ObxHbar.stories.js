"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThreeBars = exports.Spacing = exports.OutOfRange = exports.FiveBars = void 0;
var _ObxHbar = _interopRequireDefault(require("./ObxHbar"));
var _default = {
  title: 'Obx Hbar',
  component: _ObxHbar["default"],
  argTypes: {
    locale: {
      options: ['de-DE', 'en-GB'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the locale for correct displaying numerical values based on language code.'
      // type: String
    },

    value: {
      control: {
        type: 'number',
        min: 0,
        max: 1200,
        step: 1
      }
    }
  }
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_ObxHbar["default"], args);
};
var ThreeBars = Template.bind({});
exports.ThreeBars = ThreeBars;
ThreeBars.args = {
  thresholds: [10, 20],
  cmap: 'ryg',
  value: 15.78,
  units: 'mol',
  locale: 'de-DE'
};
var FiveBars = Template.bind({});
exports.FiveBars = FiveBars;
FiveBars.args = {
  thresholds: [10, 20, 30, 40],
  cmap: 'RYGYR',
  value: 33.3,
  units: 'mol',
  locale: 'de-DE'
};
var OutOfRange = Template.bind({});
exports.OutOfRange = OutOfRange;
OutOfRange.args = {
  thresholds: [10, 20, 30, 40],
  cmap: 'RYGYR',
  value: 60,
  units: 'mol',
  locale: 'de-DE'
};
var Spacing = Template.bind({});
exports.Spacing = Spacing;
Spacing.args = {
  thresholds: [1.234, 20, 21],
  cmap: 'RYGYR',
  value: 60,
  units: 'mol',
  locale: 'de-DE'
};
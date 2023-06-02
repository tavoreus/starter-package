"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
/** @type {import('tailwindcss').Config} */

var addPlugin = require("tailwindcss/plugin");
var aspectRatioPlugin = require("@tailwindcss/aspect-ratio");
var BASE_FONT_SIZE_PX = 10;
var noop = function noop(val) {
  return val;
};
var unitToPx = function unitToPx(val) {
  return "".concat(val, "px");
};
var unitToRem = function unitToRem(val) {
  return "".concat(val, "rem");
};
var pxToRem = function pxToRem(val) {
  return val / BASE_FONT_SIZE_PX;
};
var pxUnitToRem = function pxUnitToRem(val) {
  return unitToRem(pxToRem(val));
};
var createScale = function createScale(_ref) {
  var _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$steps = _ref.steps,
    steps = _ref$steps === void 0 ? 1 : _ref$steps,
    _ref$formatVal = _ref.formatVal,
    formatVal = _ref$formatVal === void 0 ? noop : _ref$formatVal,
    _ref$formatKey = _ref.formatKey,
    formatKey = _ref$formatKey === void 0 ? noop : _ref$formatKey;
  var limit = Math.round((max - min) / steps);
  var scale = (0, _toConsumableArray2["default"])(new Array(limit + 1)).map(function (_, i) {
    return min + i * steps;
  });
  return scale.reduce(function (prev, curr) {
    var key = String(formatKey(curr));
    var val = curr === 0 ? curr : formatVal(curr);
    return (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, prev), {}, (0, _defineProperty2["default"])({}, key, val));
  }, {});
};
var spacing = (0, _objectSpread3["default"])((0, _objectSpread3["default"])((0, _objectSpread3["default"])((0, _objectSpread3["default"])((0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, createScale({
  max: 32,
  steps: 1,
  formatVal: pxUnitToRem
})), createScale({
  min: 32,
  max: 64,
  steps: 2,
  formatVal: pxUnitToRem
})), createScale({
  min: 68,
  max: 128,
  steps: 4,
  formatVal: pxUnitToRem
})), createScale({
  min: 136,
  max: 256,
  steps: 8,
  formatVal: pxUnitToRem
})), createScale({
  min: 272,
  max: 512,
  steps: 16,
  formatVal: pxUnitToRem
})), createScale({
  min: 544,
  max: 1024,
  steps: 32,
  formatVal: pxUnitToRem
}));
module.exports = {
  utils: {
    pxRem: pxUnitToRem
  },
  preset: {
    theme: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#ffffff",
        black: "#262626",
        grey: {
          soft: "#D8D8D8",
          light: "#E9E9E9",
          medium: "#676767",
          dark: "#3B3B3B",
          darkest: "#2A2A2A",
          quote: "#929292",
          teaser: "#262626",
          event: "#ffffff26"
        },
        green: {
          softest: "#CCDDDC",
          soft: "#80A9A7",
          light: "#4D8784",
          medium: "#1B6561",
          dark: "#025450"
        },
        beige: {
          soft: "#F8F8F3",
          light: "#F0EFE4",
          medium: "#EBEADC",
          dark: "#E9E8D8"
        },
        mint: {
          softest: "#E1F5D7",
          soft: "#CBE3BF",
          light: "#B7D8A6",
          medium: "#A2CC8C",
          dark: "#98C780"
        },
        softBlue: {
          softest: "#EAF4F8",
          soft: "#CBE2EE",
          light: "#B7D7E7",
          medium: "#A2CCE0",
          dark: "#98C6DD"
        },
        yellow: {
          soft: "#FCF2A7",
          light: "#FBED83",
          medium: "#FAE860",
          dark: "#F9E54F"
        },
        coral: {
          soft: "#F8AFB0",
          light: "#F58F90",
          medium: "#F26F70",
          dark: "#F15F61"
        },
        functional: {
          success: "#24BB60",
          error: "#F15F61"
        }
      },
      extend: {
        spacing: spacing,
        zIndex: {
          behind: -1
        }
      }
    },
    plugins: [aspectRatioPlugin, addPlugin(function (_ref2) {
      var addBase = _ref2.addBase,
        theme = _ref2.theme;
      addBase({
        ":root": {
          fontSize: unitToPx(BASE_FONT_SIZE_PX)
        }
      });
    })]
  }
};
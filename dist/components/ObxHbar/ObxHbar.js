"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ObxHbar;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _react = require("react");
var _helpers = require("./helpers");
function ObxHbar(_ref) {
  var _ref$cmap = _ref.cmap,
    cmap = _ref$cmap === void 0 ? 'RYG' : _ref$cmap,
    thresholds = _ref.thresholds,
    value = _ref.value,
    units = _ref.units,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? 'de-DE' : _ref$locale;
  var ref = (0, _react.useRef)(null);
  var cmapKey = {
    'G': "mavie-fill-mint-medium",
    'Y': "mavie-fill-yellow-medium",
    'R': "mavie-fill-coral-medium"
  };
  var markerColor = "mavie-fill-gray-dark mavie-stroke-gray-dark";
  var rectColors = cmap.toUpperCase().split("").map(function (item) {
    return cmapKey[item];
  });
  var decFormat = new Intl.NumberFormat(locale, {
    maximumSignificantDigits: 3
  });
  var scaledThresholds, labelPositions, scaledWidths, scaledValue;
  var rects = [];
  var padding = 2; // value of the gap between the rects

  if (thresholds) {
    // Calculates scaling factor for the rectangles.
    // Takes shifts if the value exceeds right edge.
    var c = (0, _helpers.getScalingFactor)(thresholds, value);

    // scale thresholds
    scaledThresholds = (0, _helpers.scaleThresholds)(thresholds, c, value);
    scaledWidths = (0, _helpers.getWidths)(scaledThresholds);

    // scale value
    scaledValue = value * c;

    //  rectangles
    var cursor = 0;
    for (var index = 0; index < scaledWidths.length; index++) {
      var width = scaledWidths[index];
      rects.push({
        'width': Math.max(width - padding, padding),
        'x': cursor + padding / 2,
        'fill': rectColors[index]
      });
      cursor += width;
    }
    labelPositions = (0, _toConsumableArray2["default"])(scaledThresholds.slice(0, -1));
  }
  (0, _react.useEffect)(function () {
    (0, _helpers.adjustLabelPosition)(ref.current.children);
  });
  return /*#__PURE__*/React.createElement("svg", {
    baseProfile: "full",
    version: "1.1",
    viewBox: "0 0 650 50",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/React.createElement("rect", {
    className: "fill-transparent",
    height: "50",
    width: "650",
    x: "0",
    y: "0"
  }), rects.map(function (rect, index) {
    return /*#__PURE__*/React.createElement("rect", {
      key: index,
      className: rect.fill,
      height: "10",
      width: rect.width,
      x: rect.x,
      y: "15"
    });
  }), /*#__PURE__*/React.createElement("g", {
    className: "text-xs font-sans",
    ref: ref
  }, labelPositions.map(function (t, index) {
    return /*#__PURE__*/React.createElement("g", {
      className: "text-boxes"
    }, /*#__PURE__*/React.createElement("line", {
      x1: t,
      y1: "27",
      x2: t,
      y2: "32",
      className: "stroke-gray-300"
    }), /*#__PURE__*/React.createElement("text", {
      className: "mavie-fill-gray-medium",
      key: index,
      textAnchor: "middle",
      x: t,
      y: "46"
    }, thresholds[index]));
  })), /*#__PURE__*/React.createElement("g", {
    className: "stroke-2 hover:animate-pulse ".concat(markerColor)
  }, /*#__PURE__*/React.createElement("line", {
    x1: scaledValue,
    x2: scaledValue,
    y1: "10",
    y2: "27",
    strokeLinecap: "round",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: scaledValue,
    cy: "6",
    r: "5",
    className: ""
  })), /*#__PURE__*/React.createElement("g", {
    className: "text-sm"
  }, /*#__PURE__*/React.createElement("text", {
    className: "font-bold font-sans text-2xl mavie-fill-gray-dark",
    x: "520",
    y: "28",
    textAnchor: "end"
  }, decFormat.format(value)), /*#__PURE__*/React.createElement("text", {
    className: "italic mavie-fill-gray-medium",
    x: "530",
    y: "28"
  }, units)));
}
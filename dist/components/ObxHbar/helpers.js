"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjustLabelPosition = adjustLabelPosition;
exports.getScalingFactor = getScalingFactor;
exports.getWidths = getWidths;
exports.scaleThresholds = scaleThresholds;
function getScalingFactor(thresholds, value) {
  var edgeWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
  var chartWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 440;
  if (thresholds) {
    var maxValuePosition = chartWidth - edgeWidth / 2;
    var lastThreshold = thresholds.at(-1);
    var maxValue = chartWidth / maxValuePosition * lastThreshold;
    return maxValuePosition / (value > maxValue ? value : maxValue);
  }
  return 0;
}
function scaleThresholds(thresholds, scalingFactor, value) {
  var chartWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 440;
  var rightEdgeValue = chartWidth / scalingFactor;

  // scale
  var scaledThresholds = thresholds.map(function (item) {
    return item * scalingFactor;
  });

  // push edge as a treshold
  scaledThresholds.push((value > rightEdgeValue ? value : rightEdgeValue) * scalingFactor);
  return scaledThresholds;
}
function getWidths(scaledThresholds) {
  var widths = [scaledThresholds[0]];
  for (var index = 1; index < scaledThresholds.length; index++) {
    var currentElement = scaledThresholds[index];
    var prevElement = scaledThresholds[index - 1];
    widths.push(currentElement - prevElement);
  }
  return widths;
}
function adjustLabelPosition(elements) {
  var textAttr = [];

  // extract the x and width
  for (var index = 0; index < elements.length; index++) {
    var textElement = elements[index].querySelector('text');
    var width = textElement.getBoundingClientRect().width;
    var settedX = parseFloat(textElement.getAttribute('x'));
    textAttr.push({
      width: width,
      settedX: settedX
    });
  }

  // calculate the adjusted values
  for (var _index = 0; _index < textAttr.length; _index++) {
    var element = textAttr[_index];
    if (_index == 0) {
      if (element.settedX - element.width / 2 < 0) {
        textAttr[_index]['settedX'] = textAttr[_index]['width'] / 2 + 1;
      }
    } else {
      var labelPadding = 5;
      var prevElement = textAttr[_index - 1];
      var rightValue = prevElement.settedX + prevElement.width / 2;
      var leftValue = element.settedX - element.width / 2;
      if (rightValue > leftValue) {
        textAttr[_index]['settedX'] = prevElement.settedX + prevElement.width / 2 + element.width / 2 + labelPadding;
      }
    }
  }

  // repaint
  for (var _index2 = 0; _index2 < elements.length; _index2++) {
    var _textElement = elements[_index2].querySelector('text');
    var lineElement = elements[_index2].querySelector('line');
    _textElement.setAttribute('x', textAttr[_index2]['settedX']);
    lineElement.setAttribute('x2', textAttr[_index2]['settedX']);
  }
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tag = _interopRequireDefault(require("../../../elements/Tag/Tag"));
var ArticleCard = function ArticleCard(_ref) {
  var title = _ref.title,
    tags = _ref.tags,
    image = _ref.image,
    readingTime = _ref.readingTime;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ArticleCard"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "asd",
    className: "w-72 rounded-3xl"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "max-w-md text-2xl"
  }, title), /*#__PURE__*/_react["default"].createElement("div", null, tags.map(function (tag) {
    return /*#__PURE__*/_react["default"].createElement(_Tag["default"], Object.assign({
      key: tag.label
    }, tag));
  }), /*#__PURE__*/_react["default"].createElement("span", null, readingTime)));
};
var _default = ArticleCard;
exports["default"] = _default;
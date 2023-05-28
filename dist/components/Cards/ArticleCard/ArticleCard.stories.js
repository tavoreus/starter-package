"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _ArticleCard = _interopRequireDefault(require("./ArticleCard"));
var _default = {
  title: "Components/ArticleCard",
  component: _ArticleCard["default"],
  argTypes: {}
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_ArticleCard["default"], args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: "Diese Methode hilft Ihnen, Entscheidungen zu treffen",
  tags: [{
    label: "Article",
    leftIcon: "press"
  }],
  image: "article.png",
  readingTime: "4 min Lesezeit"
};
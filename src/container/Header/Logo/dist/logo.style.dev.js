"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LText = exports.StyledLogo = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-family: Roboto;\n    font-size: 24px;\n    font-weight: 900;\n    line-height: 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 44px;\n    width: 139px;\n    left: 0px;\n    top: 0px;\n    border-radius: 0px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: 768px) {\n        transform-origin: left;\n        transform: scale(0.8);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLogo = _styledComponents["default"].div(_templateObject());

exports.StyledLogo = StyledLogo;

var LText = _styledComponents["default"].div(_templateObject2());

exports.LText = LText;
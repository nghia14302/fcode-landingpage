"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsContainer = exports.Spirit = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    max-width: 1064px;\n    z-index: 0;\n    @media screen and (max-width: 1200px) {\n        max-width: 600px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    padding: 4rem 0;\n    @media screen and (max-width: 560px) {\n        font-size: 12px;\n        padding: 2rem 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spirit = _styledComponents["default"].div(_templateObject());

exports.Spirit = Spirit;

var CardsContainer = _styledComponents["default"].div(_templateObject2());

exports.CardsContainer = CardsContainer;
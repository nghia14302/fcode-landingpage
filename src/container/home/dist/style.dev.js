"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = exports.Title = exports.DescriptionContainer = exports.Content = exports.HomeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Roboto', 'sans-serif';\n    font-size: 1.5em;\n    color: rgba(0, 0, 0, 0.6);\n    line-height: 29px;\n    margin-bottom: 4.17em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    font-family: 'Roboto', 'sans-serif';\n    font-weight: bold;\n    font-size: 4em;\n    text-transform: capitalize;\n    margin-bottom: 2.25rem;\n    @media screen and (max-width: 560px) {\n        margin-bottom: 0.8rem;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    max-width: 635px;\n    @media screen and (max-width: 560px) {\n        font-size: 12px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 4rem;\n    margin: 0 auto;\n    height: 100%;\n    @media screen and (max-width: 560px) {\n        padding: 0 1rem;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeContainer = _styledComponents["default"].div(_templateObject());

exports.HomeContainer = HomeContainer;

var Content = _styledComponents["default"].div(_templateObject2()); // common components


exports.Content = Content;

var DescriptionContainer = _styledComponents["default"].div(_templateObject3());

exports.DescriptionContainer = DescriptionContainer;

var Title = _styledComponents["default"].h2(_templateObject4());

exports.Title = Title;

var Description = _styledComponents["default"].p(_templateObject5()); // Activities components


exports.Description = Description;
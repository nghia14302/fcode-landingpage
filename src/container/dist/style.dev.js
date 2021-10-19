"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.Block = exports.LandingContainer = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    text-decoration: none;\n    color: #00d17d;\n    :visited,\n    :active {\n        text-decoration: none;\n        color: #00d17d;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    min-width: 100vw;\n    min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LandingContainer = _styledComponents["default"].div(_templateObject());

exports.LandingContainer = LandingContainer;

var Block = _styledComponents["default"].span(_templateObject2());

exports.Block = Block;
var NavLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.NavLink = NavLink;